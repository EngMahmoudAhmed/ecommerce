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
                console.log(setFilter());
            }
            return () => {
                componenteMonted = false;
            }
        }
        getProducts();
    }, []);

    return (
        <>
        </>
    )
}

export default Product
