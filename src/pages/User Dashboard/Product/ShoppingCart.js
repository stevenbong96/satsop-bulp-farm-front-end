import React from "react"
import ShoppingCartList from "./shoppingCartList"
import PayWithPaypal from "./PayWithPaypal"



function ShoppingCart(props) {
   
const handleModalClose = event => {
        document.querySelector('.modal').className='modal'
}



// const createOrder = (data, actions) => {
//     return actions.order.create({
//         purchase_units: props.props.map(product => {
//             return {
//                name: product.name,
//                description: product.description,
//                amount: {
//                    currency_code: "USD",
//                    value: product.price.toFixed(2)
//            }}
//        })
//       });
// }

const checkoutList = props.props.map(product => {
         return {
            name: product.name,
            description: product.description,
            amount: {
                currency_code: "USD",
                value: product.price
        }}
    })
    // console.log(checkoutList)


    return (
        <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Shopping Cart</p>
                    <button class="delete" aria-label="close" onClick={handleModalClose} ></button>
                </header>
                <section class="modal-card-body">
                    <div className='field'>
                        {props.props.length != 0 ? 
                            <div>
                                {props.props.map((item, i) => 
                                    <ShoppingCartList props={item} remove={props.remove} index={i} />
                                )}
                            </div> 
                            : <h1>Nothing in your cart yet, Keep Shopping!</h1>}
                            <hr />
                        <div>
                            <h1>Total Price: ${props.total.toFixed(2)}</h1>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <PayWithPaypal items={props} />
    
                    
                </footer>
            </div>
        </div>
       

    )
}

export default ShoppingCart