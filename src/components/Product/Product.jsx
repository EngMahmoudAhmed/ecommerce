import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';

const Product = () => {

    const [data, setData] = useState([]);
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

            <div className="col-sm-12 col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-sm-12 col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-sm-12 col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-sm-12 col-md-3">
                <Skeleton height={350} />
            </div>

        </>
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat)
        setFilter(updatedList)
        console.log(cat);
    }

    const ShowProducts = () => {
        return (<>
            <div className="container buttons d-flex justify-content-center align-items-center py-5">
                <div className="row d-flex justify-content-center">
                    <button className="col-sm-8 my-1 col-md-2 btn btn-outline-dark me-2" onClick={() => {
                        setFilter(data)
                    }}>All Products</button>
                    <button className="col-sm-8 my-1 col-md-2 btn btn-outline-dark me-2" onClick={() => {
                        filterProduct("men's clothing")
                    }}>Men's Clothing</button>
                    <button className="col-sm-8 my-1 col-md-2 btn btn-outline-dark me-2" onClick={() => {
                        filterProduct("women's clothing")
                    }}>Women's Clothing</button>
                    <button className="col-sm-8 my-1 col-md-2 btn btn-outline-dark me-2" onClick={() => {
                        filterProduct("jewelery")
                    }}>Jewellery</button>
                    <button className="col-sm-8 my-1 col-md-2 btn btn-outline-dark me-2" onClick={() => {
                        filterProduct("electronics")
                    }}>Electronics</button>
                </div>
            </div>

            {filter.map((product) => {
                return (
                    <div className="col-sm-4 col-md-3 mb-4" key={product.id}>
                        <div className="card h-100 text-center p-4">
                            <img src={product.image} className="card-img-top shadow-sm" alt={product.title} height={250} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title.substring(0,12)}...</h5>
                                <p className="card-text lead fw-bold">{product.price} $</p>
                                <a href="#" className="btn btn-outline-dark">Buy Now</a>
                            </div>
                        </div>
                    </div>

                )
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
