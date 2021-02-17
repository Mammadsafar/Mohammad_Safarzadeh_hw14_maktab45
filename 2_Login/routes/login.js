const express = require('express');
const router = express.Router();
const path = require('path');

const fs = require('fs');


router.get('/', function (req, res) {

    fs.readFile(path.join(__dirname, "../database/users.json"), "utf8", (err, users) => {
        if (err) {
            return res.status("400").send("oops! something went wrong");
        };
        console.log(users);

        users = JSON.parse(users);

        for (const key in users) {
            // console.log(users[key].isLoggedIn);
            // console.log(users[key].user_agent);
            // console.log(req.headers['user-agent']);


            if (users[key].isLoggedIn === true && users[key].user_agent === req.headers['user-agent']) {
                let user = users[key];
                res.redirect('/profile');
                // res.render('pages/profile' , {user});
            }
        }
        // }res.redirect('/login');
        res.render('pages/login');


    })







})
router.post('/logout', function (req, res) {
    // console.log(req.headers);
    // console.log(typeof req.headers);
    // console.log( req.headers['user-agent']);
    // console.log(typeof req.headers.referer);
    req.on("data", function (User) {
        User = JSON.parse(User);
        console.log("================================");
        console.log(User);
        console.log("================================");

        fs.readFile(path.join(__dirname, "../database/users.json"), "utf8", (err, users) => {
            if (err) {
                return res.status("400").send("oops! something went wrong");
            };

            users = JSON.parse(users);
            // console.log(users);
            if (!users) return res.status("404").send("users Not Found");

            // console.log(check_user(User, users));


            // todo for cookies

            console.log(users);
            for (const key in users) {

                if (users[key].userName === User.userName && users[key].isLoggedIn === true && users[key].user_agent === req.headers['user-agent']) {

                    users[key].isLoggedIn = false
                    users[key].user_agent = ""
                    fs.writeFile(path.join(__dirname, "../database/users.json"), JSON.stringify(users), (err) => {
                        if (err) return res.status("404");
                        // users.push(User);
                        console.log("===========> ok write");
                    });
                    res.status(200);
                    // res.redirect('/home');
                    return res.end();
                }
            }

            // User.user_agent = "";
            // User.isLoggedIn = false;
            res.status("400").send("User Invalid");
            res.end();


        })
    })

})
// router.post('/', function )
router.post('/LoginUser', function (req, res) {
    // console.log(req.headers);
    // console.log(typeof req.headers);
    // console.log( req.headers['user-agent']);
    // console.log(typeof req.headers.referer);
    req.on("data", function (User) {
        User = JSON.parse(User);

        // console.log(User);

        fs.readFile(path.join(__dirname, "../database/users.json"), "utf8", (err, users) => {
            if (err) {
                return res.status("400").send("oops! something went wrong");
            };

            users = JSON.parse(users);
            // console.log(users);
            if (!users) return res.status("404").send("users Not Found");

            console.log(check_user(User, users));
            if (check_user(User, users) === true) {

                // todo for cookies


                for (const key in users) {
                    if (users[key].userName == User.userName) {
                        users[key].user_agent = req.headers['user-agent'];
                        users[key].isLoggedIn = true;
                    }
                }

                console.log(users);

                fs.writeFile(path.join(__dirname, "../database/users.json"), JSON.stringify(users), (err) => {
                    if (err) return res.status("404");
                    // users.push(User);
                    console.log("===========> ok write");
                });
                res.status(200);
                // res.redirect('/home');
                res.end();
            } else {
                User.user_agent = "";
                User.isLoggedIn = false;
                res.status("400").send("User Invalid");
                res.end();
            }

        })
    })

})

router.post('/signUpUser', function (req, res) {


    req.on("data", function (nweUser) {
        nweUser = JSON.parse(nweUser);

        // console.log(nweUser);

        fs.readFile(path.join(__dirname, "../database/users.json"), "utf8", (err, users) => {
            if (err) {
                return res.status("400").send("oops! something went wrong");
            };
            users = JSON.parse(users);
            // console.log(users);
            if (!users) return res.status("404").send("users Not Found");

            // console.log(check_userName(nweUser, users));
            if (check_userName(nweUser, users) === false) {
                users.push(nweUser);
                // console.log(users);
                // fs.writeFileSync("../database/users.json", JSON.stringify(users));
                fs.writeFile(path.join(__dirname, "../database/users.json"), JSON.stringify(users), (err) => {
                    if (err) return res.status("404");
                    // console.log("okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
                });
                // console.log("====200");
                res.status(200);
                res.send("salam")
                res.end();
            } else {
                res.status("400").send("User Invalid");
                res.end();
            }



        })
    })

})




function check_userName(nweUser, users) {
    // console.log("===============================");
    for (const key in users) {
        // console.log(`${users[key].userName}     <======>     ${nweUser.userName}`);
        if (users[key].userName === nweUser.userName) {
            return true;
        }
    }
    return false;
}

function check_user(User, users) {
    // console.log("===============================");
    for (const key in users) {
        // console.log(`${users[key].userName}     <======>     ${nweUser.userName}`);
        if (users[key].userName === User.userName && users[key].password === User.password) {
            return true;
        }
    }
    return false;
}





module.exports = router;