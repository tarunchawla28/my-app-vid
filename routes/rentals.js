const express = require('express');
const { Rental, validate } = require('../model/rental');
const { Customer } = require('../model/customer');
const { Movie } = require('../model/movie');
const Fawn = require('fawn');
const router = express.Router();
const mongoose = require('mongoose');
Fawn.init(mongoose);

router.get('/', async (req, res) => {
    const rentals = await Rental.find().sort('-dateOut');
    res.send(rentals);
});
router.post('/', async (req, res) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

     /*if (!mongoose.Types.ObjectId.isValid(req.body.customerId))
        return res.status(400).send('Invalid customer');*/

    const customer = await Customer.findById(req.body.customerId);
    if (!customer) return res.status(400).send('The customer with gievn id was not found');

    const movie = await Movie.findById(req.body.movieId);
    if (!movie) return res.status(400).send('The movie with given id was not found');

    if (movie.numberInStock === 0) return res.status(400).send('Movie not in stock');

    let rental = new Rental({
        customer: {
            _id: customer._id,
            name: customer.name,
            phone: customer.phone
        },
        movie: {
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
        }
    });
    /*rental = await rental.save();

    movie.numberInStock--;
    movie.save();

    res.send(rental);*/
    //Doing above task by two phase commit method

    try {
        new Fawn.Task()
            .save('rentals', rental)
            .update('movies', { _id: movie._id }, {
                $inc: {
                    numberInStock: -1
                }
            })
            .run()
        res.send(rental);
    } catch (ex) {
        res.status(500).send(ex)
    }
});

module.exports = router;