const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { User } = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

router.post('/', async (req, res) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email or password');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password');

    //res.send(true);

    const token = user.generateAuthToken();
    res.send(token);
});


function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    }
    const r = Joi.validate(req, schema);
    console.log(r);
    return r;
}
module.exports = router;