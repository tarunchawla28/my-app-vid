const { Movie, validate } = require('../model/movie');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const movies = await Movie.find();
    console.log(movies);
    res.send(movies);
});


router.post('/', async (req, res) => {
    let movie = new Movie({
        title: req.body.title,
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate,
        genre: req.body.genre
    })
    movie = await movie.save();
    console.log(movie);
    res.send(movie);
})
module.exports = router;