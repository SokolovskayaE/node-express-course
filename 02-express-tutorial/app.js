const express = require('express');
const app = express();
const { products } = require('./data');

// Setup static
app.use(express.static('./public'));

// API that return JSON
app.get('/api/v1/test', (req, res) => {
    res.json({ message: 'It worked!' });
});

// API that returns products data
app.get('/api/v1/products', (req, res) => {
    res.json(products);
});

// API that returns products by ID
app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID);
    const singleProduct = products.find(
        (product) => product.id === idToFind
    );
    if (!singleProduct) {
        return res.status(404).json({ message: 'That product was not found.' });
    }
    return res.json(singleProduct);
});

// Query
app.get('/api/v1/query', (req, res) => {
    const { search, limit = 0, priceLimit = 0 } = req.query;
    const maxLimit = parseInt(limit, 10);

    // Use Array.reduce to build a list of filtered products
    const filteredProducts = products.reduce((acc, product) => {
        // If the product price is greater than priceLimit OR
        // If there's a search and the product name doesn't include the search term OR
        // If there’s a limit and the accumulator (acc === list of filtered products) hit the limit
        // Then return the accumulator (acc === list of filtered products)
        if (
            product.price > parseFloat(priceLimit) || 
            (search && !product.name.includes(search)) ||
            (maxLimit && acc.length === maxLimit)
        ) {
            return acc;
        }
       
        // Add product to accumulator list
        acc.push(product);

        // Return the accumulator to check the next product
        return acc;
    }, []);

    res.status(200).json(filteredProducts);
});

// Not found handler
app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});