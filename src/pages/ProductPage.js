import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import ProductList from '../components/ProductList';

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
            } catch (error) {
                console.error("Failed to fetch products", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>All Products</h1>
            <ProductList products={products} />
        </div>
    );
};

export default ProductPage;
