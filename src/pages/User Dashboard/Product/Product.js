import React from "react";
import ProductResult from "./ProductResult";
import "./product.css";

function Product() {
    return (
        <>
            <div className="columns productStyle is-justify-content-center">
                <div className="column">
                    <div className="field">
                        <div className="control has-icons-left">
                            <div className="select">
                                <select>
                                    <option selected>Filter</option>
                                    <option>Put here</option>
                                    <option>Put here</option>
                                </select>
                                <div className="icon is-small is-left">
                                    <i className="fas fa-info-circle"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="column">

                </div>

                <div className="column">

                </div>

                <div className="column">
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-rounded" type="text" placeholder="Rounded input" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>

            </div>

            <ProductResult />
        </>
    )
}

export default Product