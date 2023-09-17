import React from 'react'
import '../../index.css'
import Product from '../Product/Product'
const Home = () => {
    return (
        <>
            <div className="hero">
                <div className="card text-white border-0">
                    <img src="./assets/home2.jpg" className="card-img" alt="background" height={550}/>
                    <div className="card-img-overlay  d-flex justify-content-center flex-column">
                        <div className="container">
                            <div>
                                <h5 className="card-title display-3 fw-bolder mb-0">NEW SESSION ARRIVALS</h5>
                                <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <Product />

        </>
    )
}

export default Home
