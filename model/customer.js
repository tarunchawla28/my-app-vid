const mongoose = require('mongoose');
const Joi = require('Joi');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    },
    phone: {
        type: Number,
        required: true
    },
    isGold: {
        type: Boolean,
        required: true
    }
})
const Customer = mongoose.model('Customer', customerSchema);
function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(5).required(),
        phone: Joi.number().required(),
        isGold: Joi.boolean().required()
    }
    return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomer;