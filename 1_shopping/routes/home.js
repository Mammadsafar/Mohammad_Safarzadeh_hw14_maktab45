const express = require('express');
const router = express.Router();
const path = require('path');

const fs = require('fs');


router.get('/:id', function (req, res) {

    if (req.params.id === "home") {
        console.log(req.params.id);
        fs.readFile(path.join(__dirname, "../public/product.json"), "utf8", (err, product) => {
            if (err) {
                return res.status(400).send("oops! something went wrong");
            };

            product = JSON.parse(product);

            if (!product) return res.status(404).send("product Not Found");

            res.render('pages/home', {
                product
            });
        })
    } else {
        console.log(req.params.id);

        fs.readFile(path.join(__dirname, "../public/product.json"), "utf8", (err, product) => {
            if (err) {
                return res.status(400).send("oops! something went wrong");
            };
            product = JSON.parse(product);
            var results = [];
            for (var i = 0; i < product.length; i++) {
                for (key in product[i]) {
                    if (product[i][key].indexOf(req.params.id) != -1) {
                        results.push(product[i]);
                    }
                }
            }
            // console.log(results);

            if (results.length === 0) {
                res.render('pages/notFound');
            } else {
                let temp = results[0];
                res.render('pages/product', {
                    temp
                });
            }

        })
    }





})




module.exports = router;