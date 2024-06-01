import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductList = ({ products }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {products.map((product) => (
                <Card key={product.id} style={{ width: '200px' }}>
                    <CardContent>
                        <Typography variant="h6">{product.name}</Typography>
                        <Typography variant="body2">{product.company}</Typography>
                        <Typography variant="body2">{product.category}</Typography>
                        <Typography variant="body2">Price: ${product.price}</Typography>
                        <Typography variant="body2">Rating: {product.rating}</Typography>
                        <Typography variant="body2">Discount: {product.discount}%</Typography>
                        <Typography variant="body2">Available: {product.availability ? 'Yes' : 'No'}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default ProductList;
