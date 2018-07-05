var Product = require('../models/product.model');

exports.create = function(req, res){
    Product.create(req.body, function(err, product){

        if (err) throw err;
        console.log('Product created');

        var id = product._id;
        res.writeHead(200,{
            'Content-type' : 'text/plain'
        });
        res.send('Added tehe product with id ' +id);
    });
}

exports.findAll = function(req, res){
    Product.find(function(err, products){

        if (err) {
            res.status(500).send({message: "Some error occured while retrieving product"});
        }else{
            res.send(products);
        }
    });
}

exports.findOne = function(req, res){
    Product.findById(req.params.productId, function(err, data){
        if (err) {
            res.status(500).send({message: "Could not retrieve product with id "+ req.params.productId});
        }else{
            res.send(data);
        }
    });
}

exports.update = function(req, res){
    Product.findById(req.params.productId, function(err, product){
        if (err) {
           res.status(500).send({message: "Could not retrieve product with id "+ req.params.productId});
        }
        
        product.category = req.body.category;
        product.description = req.body.description;
        product.items = req.body.items;
        
        product.save(function(err, data){
            if (err) {
                res.status(500).send({message: "Could not retrieve product with id "+ req.params.productId});
            }else{
                res.send(data);
            }
        });
    });   
}

exports.delete = function(req, res){
    Product.remove({_id: req.params.productId}, function(err, data){
        if (err) {
            res.status(500).send({message: "Could not delete product with id "+ req.params.productId});
        }else{
            res.send({message: "Product deleted succesfully"});
        }
    });
}