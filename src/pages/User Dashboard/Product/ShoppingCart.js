import React from "react"
import ShoppingCartList from "./shoppingCartList"



function ShoppingCart(props) {
const handleModalClose = event => {
        document.querySelector('.modal').className='modal'
}

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
                        {props.props != undefined ? 
                            <div>
                                {props.props.map(item => 
                                    <ShoppingCartList props={item} remove={props.remove} />
                                )}
                            </div> 
                            : "Nothing in your cart yet, Keep Shopping!"}
                            <hr />
                        <div>
                            <h1>Total Price: ${props.total.toFixed(2)}</h1>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success"></button>
                    
                </footer>
            </div>
        </div>
       

    )
}

export default ShoppingCart