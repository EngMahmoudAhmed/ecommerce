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
        return <>
        
        ....loading
        </>
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
                        loading ? <Loading/>: <showProduct/>
                    }
                </div>
            </div>
        </>
    )
}

export default Product
