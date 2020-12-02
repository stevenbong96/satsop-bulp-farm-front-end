import { PayPalButton } from "react-paypal-button-v2";
import React, { useEffect, useState } from "react";
import API from "../../../utils/User/userAPI"

export default function PaywithPaypal(props) {
  const [totalState, setTotalState] = useState({
    total: "",
    list: [],
  });

  useEffect(() => {
    setTotalState({
      total: props.items.total.toFixed(2),
      list:
        props.items.props.length !== 0
          ? props.items.props.map((item) => {
              return {
                name: item.name,
                description: item.description,
                price: item.price,
                currency: "USD",
              };
            })
          : null,
    });
  }, [props]);

  // console.log(totalState);

  return (
    <PayPalButton
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: "Satsop Bulb Farm Online Purchase",
              amount: {
                currency_code: "USD",
                value: totalState.total,
              },
              item_list: totalState.list,
            },
          ],
          // application_context: {
          //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
          // }
        });
      }}
      onApprove={(data, actions) => {
        // Capture the funds from the transaction
        return actions.order.capture().then(function (details) {
          // console.log(details)
          // Show a success message to your buyer
          alert(
            `Thank you ${details.payer.name.given_name}! Your order of $${details.purchase_units[0].amount.value} has been placed.`
          );

          // OPTIONAL: Call your server to save the transaction
          // return fetch("/paypal-transaction-complete", {
          //   method: "post",
          //   body: JSON.stringify({
          //     orderID: data.orderID,
          //   }),
          // });


          API.sendOrderInfo({
            orderId: data.orderID,
            customerTotalAmount: details.purchase_units[0].amount.value,
            purchaseList: totalState.list,
            customerEmail: details.payer.email_address,
            customerAddress: details.purchase_units[0].shipping.address.address_line_1,
            customerCity: details.purchase_units[0].shipping.address.admin_area_2,
            customerState: details.purchase_units[0].shipping.address.admin_area_1,
            customerZipCode: details.purchase_units[0].shipping.address.postal_code,
            customerCountry: details.purchase_units[0].shipping.address.country_code,
          })

          var setObjPurchase = {detailsKey: details, listKey: totalState.list}

          API.orderNodemailer(setObjPurchase).then(res => {
            // console.log(res);
            if (res.data.status === "success") {
              alert("Message Sent!!!!!");
            } else if (res.data.status === "fail") {
              alert("Message failed to send.");
            }
          }).catch(err => {
            console.log(err);
          })
        });
      }}
    />
  );
}

