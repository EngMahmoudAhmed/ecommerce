import React, { useEffect, useState } from 'react'

const Product = () => {

    const [data, setData] = useState();
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componenteMonted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componenteMonted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componenteMonted = false;
            }
        }
        getProducts();
    }, []);


    const Loading = () => {
        return <>....loading</>
    }

    const ShowProducts = () => {
        return( <>
            <div className="buttons d-flex justify-content-center py-5">                   
                <button className="btn btn-outline-dark me-2">All Products</button>
                <button className="btn btn-outline-dark me-2">Men's Clothing</button>
                <button className="btn btn-outline-dark me-2">Women's Clothing</button>
                <button className="btn btn-outline-dark me-2">Jewellery</button>
                <button className="btn btn-outline-dark me-2">Electronics</button>
            </div>
            {
                filter.map((product) => {
                    return (<>
                        <div class="card" style="width: 18rem;">
                            <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    
                    </>)
                })
            }

        </>)
    }

    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='display-6 fw-bold text-center'>Latest Product</h1>
                    </div>
                    <hr />
                </div>
                <div className="row justify-content-center">
                    {
                        loading ? <Loading /> : <ShowProducts />
                    }
                </div>
            </div>
        </>
    )
}

export default Product
