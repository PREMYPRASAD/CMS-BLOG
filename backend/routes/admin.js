const adminModel = require("../models/admin-and-users");
const express = require("express");
const { default: mongoose } = require("mongoose");
const { json } = require("express");
const route = express.Router();
const bcrypt = require("bcrypt");
const Category = require("../models/category");
const post = require("../models/posts");
const jwt = require("jsonwebtoken");

route.post("/asa", (req, res) => {
    let datas = {
        email: req.body.email,
        password: req.body.password,

    };

    let data = new adminModel(datas);
    data.save();
    res.json({ message: "new user data saving,,," })
})

// try {
//     route.post("/login", (req, res) => {
//         console.log("inside the login route", req.body);

//         adminModel.findOne({ email: req.body.email, isAdmin: true },
//             (err, data) => {
//                 if (err) {
//                     console.log(err);
//                     res.send(err);
//                     // res.send(err);
//                 } else if (data) {
//                     console.log("admin email  is matching");
//                     console.log("data", data);

//                     bcrypt.compare(req.body.password, data.password, (err, resp) => {
//                         if (err) {
//                             console.log("error in bcrypt");
//                             res.json({ message: "error while password comparison" });
//                         }
//                         if (resp) {
//                             let payload = { subject: data.email + data.password };
//                             let token = jwt.sign(payload, "secretKey");
//                             res.json({
//                                 message: "password matching",
//                                 status: "success",
//                                 id: data._id,
//                                 tok: token,
//                             });
//                             // res.json({ message: "password matching" });
//                         } else {
//                             res.json({ message: "password donot match" });
//                         }
//                     });
//                 } else {
//                     console.log("wrong email id");
//                     res.json({ message: "invalid email" });
//                 }
//             }
//         );
//     });
// } catch (err) {
//     console.log(err);
// }

route.post("/login", (req, res) => {
    console.log("inside the login route", req.body);

    adminModel.findOne({ email: req.body.email, isAdmin: true }, (err, data) => {
        if (err) {
            console.log(err);
            // res.json({"message":"enter valid email"})
            res.send(err);
        } else if (data) {
            console.log("user email  is matching");
            console.log("data", data);


            if (req.body.password === data.password) {
                let payload = { subject: data.email + data.password };
                let token = jwt.sign(payload, "secretKey");
                res.json({
                    message: "password matching",
                    status: "success",
                    id: data._id,
                    tok: token,
                });
                // console.log("password matching")
                // res.json({message:"password matching"})
            } else {
                res.send({ message: "invalid password" })
            }
        } else {
            res.send({ message: "email not matching" })
        }
    });
});



module.exports = route;