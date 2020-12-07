import React, { useEffect, useState } from "react";
// import ProductResult from "./ProductResult";


function OrderFilter() {
    const [orderIdState, setOrderIdState] = useState();


    // Handle Input Change
  function handleInputChange(event) {
    const { name, value } = event.target;
    
    setOrderIdState({[name] : value});
  }


    return (
        <div>
                <input
                    className="input is-rounded"
                    name="search"
                    type="text"
                    placeholder="OrderId"
                    onChange={handleInputChange}
                  />

        </div>
    )
}

export default OrderFilter;