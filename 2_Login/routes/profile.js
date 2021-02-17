const express = require('express');
const router = express.Router();
const path = require('path');

const fs = require('fs');


router.get('/', function (req, res) {



    fs.readFile(path.join(__dirname, "../database/users.json"), "utf8", (err, users) => {
        if (err) {
            return res.status("400").send("oops! something went wrong");
        };

        users = JSON.parse(users);
console.log(req.headers['user-agent']);
        for (const key in users) {
            console.log(users[key].isLoggedIn);
            // console.log(users[key].user_agent);
            // console.log(req.headers['user-agent']);


            if (users[key].isLoggedIn === true && users[key].user_agent === req.headers['user-agent']) {
                let user = users[key];
                let pic ;
                let man = ["7", "2"];
                let woman = ["8", "3"];
                let num = Math.floor(Math.random() * 2);
                if(user.gender === 'Male') {
                    pic = man[num];
                }else{
                    pic = woman[num];
                }
                res.render('pages/profile' , {user , pic});
            }
        }


    })

    // if (req.params.id === "home" || req.params.id === " ") {
    //     // console.log(req.params.id);
    //     // fs.readFile(path.join(__dirname, "../public/product.json"), "utf8", (err, product) => {
    //     //     if (err) {
    //     //         return res.status(400).send("oops! something went wrong");
    //     //     };

    //     //     product = JSON.parse(product);
    //     //     console.log(product);
    //     //     if (!product) return res.status(404).send("product Not Found");

    //         res.render('pages/check_user');
    //     // })
    // }






})




module.exports = router;