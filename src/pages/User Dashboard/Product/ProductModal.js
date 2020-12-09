import { Category } from '@material-ui/icons'
import React,{useState, useEffect} from 'react'


function ProductModal(props) {

    const [productState, setproductState] = useState()

    useEffect(() => {
        setproductState(props.props.props)
    },[props])

    const handleModalClose = event => {
        document.querySelector(`.modal${productState._id}`).className = `modal  modal${productState._id}`
    }

    const handleInputChange = event => {
        // grab name of property to be changed and new value
        const { name, value } = event.target
    }
    // console.log(props)
// console.log(productState)
    return (
        <div>
            {
                productState !== undefined ?
            <div className={`modal modal${productState._id}`} >
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">{productState.name}</p>
                        <button className="delete" aria-label="close" onClick={handleModalClose} ></button>
                    </header>
                    <section className="modal-card-body">
                          <img src={productState.image} alt={productState.name} />
                          <hr />
                          <span>
                              Category: {productState.category}
                          </span>
                          <br />
                          <span>
                              Planting Season: {productState.plantingSeason}
                          </span>
                          <br />
                          <span>
                              Description: {productState.description}
                          </span>
                          <br />
                          <span>
                              Color: {productState.color.join(", ")}
                          </span>
                          <br />
                          <span>
                              Price: {productState.price}
                          </span>
                          <br />
                            
                    </section>
                    <footer>

                    </footer>
                </div>
            </div>
            : null
            }
        </div>
    )
}

export default ProductModal;