const express = require ('express');
const app = express ();
const { products } = require('./data');

// Setup static
app.use(express.static ('./public' ));

// API that return JSON
app.get('/api/v1/test', (req, res) => {
    res.json({message: 'It worked!'});
})

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
        return res.status(404).json({ message: 'That product was not found.' })
    }
    return res.json(singleProduct);
});

// Query
app.get('/api/v1/query', (req, res) => {
    const { search, limit, priceLimit } = req.query;
    let sortedProducts = [...products]

    // Filter products
    if (search) {
        sortedProducts = sortedProducts.filter ((product) => {
            return product.name.startsWith(search)
        })
    }
    // Limit the number of results
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    // Filter products by maximum price if provided
    if (priceLimit) {
        sortedProducts = sortedProducts.filter ((product) => {
            return product.price <= Number(priceLimit); 
        });
    }
    // No products matched 
    if (sortedProducts.length <1 ) {
       return res.status(200).send('No products matched the search')
    }
    res.status(200).json(sortedProducts)
})

// Not found handler
app.all('*', (req, res) => {
    res.status(404).send('<h1>Resourse not found</h1>')
})

// Start the server
app.listen (3000, () =>{
    console.log('Server is lisening on port 3000')
})