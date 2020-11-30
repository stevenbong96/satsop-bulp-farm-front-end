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

  console.log(totalState);

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
          console.log(details)
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
        });
      }}
    />
  );
}

// import React from 'react';
// import PaypalExpressBtn from 'react-paypal-express-checkout';

// export default class MyApp extends React.Component {
//     render() {
//         const onSuccess = (payment) => {
//             // Congratulation, it came here means everything's fine!
//             		console.log("The payment was succeeded!", payment);
//             		// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
//         }

//         const onCancel = (data) => {
//             // User pressed "cancel" or close Paypal's popup!
//             console.log('The payment was cancelled!', data);
//             // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
//         }

//         const onError = (err) => {
//             // The main Paypal's script cannot be loaded or somethings block the loading of that script!
//             console.log("Error!", err);
//             // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
//             // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
//         }

//         let env = 'sandbox'; // you can set here to 'production' for production
//         let currency = 'USD'; // or you can set this value from your props or state
//         let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
//         // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

//         const client = {
//             sandbox:    'YOUR-SANDBOX-APP-ID',
//             production: 'YOUR-PRODUCTION-APP-ID',
//         }
//         // In order to get production's app-ID, you will have to send your app to Paypal for approval first
//         // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
//         //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
//         // For production app-ID:
//         //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

//         // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
//         return (
//             <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
//         );
//     }
// }

// import React, {useState, useRef, useEffect } from "react";

// function PaywithPaypal(props) {
//     const [paidFor, setPaidFor] = useState(false)
//     const [error, setError] = useState(null)
//     const [totalState, setTotalState] = useState({
//         total: '',
//         list: []
//     })

//     const paypalRef = useRef();
//     const {items} = props
//     console.log(items)

//     // const checkoutList =
//     // (items.props.length !== 0 ?
//     //     (items.props.map(item => {
//     //         return {
//     //             name: item.name,
//     //             description: item.description,
//     //             sku: item._id,
//     //             unit_amount: {
//     //                 currency_code: "USD",
//     //                 value: item.price
//     //             }
//     //         }
//     //     }))
//     // : null)

//     useEffect(() => {
//         setState();
//     },[items.props, items.total])

//     useEffect(() => {
//         paypalRender()
//     }, [])

//     async function setState() {
//         await setTotalState({
//                total: items.total,
//                list: items.props.length !== 0 ?
//                    (items.props.map(item => {
//                        return {
//                            name: item.name,
//                            description: item.description,
//                            unit_amount: {
//                                currency_code: "USD",
//                                value: item.price
//                            }
//                        }
//                    }))
//                : null
//            })

//     }

//  function paypalRender() {
//         window.paypal
//         .Buttons({
//             createOrder: (data, actions) => {
//                 console.log(totalState.total)
//                 return actions.order.create({
//                     intent: 'CAPTURE',
//                     purchase_units: [{
//                         description: "Satsop Bulb Farm Online Purchase",
//                         amount: {
//                                 currency_code: "USD",
//                                 value: totalState.total
//                             }
//                         // items: totalState.list
//                         }]
//                     })
//                 },
//                 onApprove: async (data, actions) => {
//                     console.log(totalState.total)
//                     const order = await actions.order.capture();
//                     setPaidFor(true)
//                     console.log(order)
//                 },
//                 onError: err => {
//                     console.log(totalState.total)
//                     setError(err)
//                     console.log(err)
//                 }
//             }).render(paypalRef.current)

//         }

// console.log(totalState)

//     if (paidFor) {
//         return (
//             <div>
//                 Thank you for your purchase
//             </div>
//         )
//     }

//     if (error) {
//         return (
//             <div>
//                 Error when processing payment. Please try again later
//             </div>
//         )
//     }

//     return (
//         <div className="paypal">
//             <div ref={paypalRef} ></div>
//         </div>
//     )
// }

// export default PaywithPaypal;
