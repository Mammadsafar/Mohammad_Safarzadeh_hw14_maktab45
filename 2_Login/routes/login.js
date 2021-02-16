const express = require('express');
const router = express.Router();
const path = require('path');

// const fs = require('fs');


router.get('/', function (req, res) {

    // if (req.params.id === "home" || req.params.id === "") {
        // console.log(req.params.id);
        // fs.readFile(path.join(__dirname, "../public/product.json"), "utf8", (err, product) => {
        //     if (err) {
        //         return res.status(400).send("oops! something went wrong");
        //     };

        //     product = JSON.parse(product);
        //     console.log(product);
        //     if (!product) return res.status(404).send("product Not Found");

            res.render('pages/login');
        // })
    // }






})




module.exports = router;