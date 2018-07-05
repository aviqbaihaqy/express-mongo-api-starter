module.exports = function(app){
    var products = require('../controllers/product.controller');

    //Create a new Product
    app.post('/products', products.create);
    //Retrieve all Products
    app.get('/products', products.findAll);
    //Retrieve a single Product with productId
    app.get('/products/:productId', products.findOne);
    //Update an Product with productId
    app.put('/products/:productId', products.update);
    //Delete an Product with productId
    app.delete('/products/:productId', products.delete);

}