import React from "react"



function ShoppingCartList(props) {
const deleteItem = async () => {
    let obj = await props.props
    props.remove(obj)
}
    return (
    <div style={{display: "block", margin:'auto'}}>
        <img src={props.props.image} alt={props.props.name} style={{height: 100, width: 100, display: "inline-block", margin: 3}} />
        <h1 style={{display: "inline-block", textAlign:"center",}}>{props.props.name} ${props.props.price.toFixed(2)}</h1>
        <button className="button is-danger" onClick={deleteItem} style={{float:'right', width: 35}}>X</button>
        <hr /> 
    </div>
    )
}

export default ShoppingCartList