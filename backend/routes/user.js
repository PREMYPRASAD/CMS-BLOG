const usersModel = require("../models/admin-and-users");
const express = require("express");
const { default: mongoose } = require("mongoose");
const { json } = require("express");
const route = express.Router();
const bcrypt = require("bcrypt");
const { object } = require("joi");
const category = require("../models/category");
const post = require("../models/posts");
const jwt = require("jsonwebtoken");


function verifyToken(req, res, next) {
    console.log(req.headers)
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    console.log("token", token)
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

try {
    route.post("/signup", async(req, res) => {
        console.log("body in signup route", req.body);
        let user = await usersModel.find({ email: req.body.email });
        if (Object.keys(user).length > 0) {
            res.json({ message: "user already exixt" });
        } else if (Object.keys(user).length == 0) {
            let datas = {
                email: req.body.email,
                password: req.body.password,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                phone: req.body.phone,
                city: req.body.city,
                state: req.body.state,
                gender: req.body.gender,
            };
            datas.password = await bcrypt.hash(datas.password, 10);
            let data = new usersModel(datas);
            data.save();
            res.json({ message: "new user data saving,,," });
        } else {
            res.json({ message: "some error occured" });
        }
    });
} catch (err) {
    console.log(err);
}

try {
    route.post("/login", (req, res) => {
        console.log("inside the login route", req.body);
        // let email=req.body.email;
        // let pass = req.body.pass;
        usersModel.findOne({ email: req.body.email, isAdmin: false },
            (err, data) => {
                if (err) {
                    console.log(err);
                    res.json({ message: "enter valid email" });
                    // res.send(err);
                } else if (data) {
                    console.log("user email  is matching");
                    console.log("data", data);

                    bcrypt.compare(req.body.password, data.password, (err, resp) => {
                        if (err) {
                            console.log("error in bcrypt");
                            res.json({ message: "error while password comparison" });
                        }
                        if (resp) {
                            // console.log("hai", resp);
                            // res.json({ message: "password matching" });
                            let payload = { subject: data.email + data.password };
                            let token = jwt.sign(payload, "secretKey");
                            //  res.status(200).send({token});
                            res.json({
                                message: "password matching",
                                status: "success",
                                id: data._id,
                                tok: token,
                            });
                        } else {
                            res.json({ message: "password donot match" });
                        }
                    });
                } else {
                    console.log("no user");
                    res.send({ message: "invalid user" });
                }
            }
        );
    });
} catch (err) {
    console.log(err);
}


module.exports = route;