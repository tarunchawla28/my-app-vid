const { Movie, validate } = require('../model/movie');
const express = require('express');
const router = express.Router();
const { Genre } = require('../model/genre');


router.get('/', async (req, res) => {
    const movies = await Movie.find().sort('name');
    console.log(movies);
    res.send(movies);
});


router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(400).send('Invalid genre');
    const movie = new Movie({
        title: req.body.title,
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate,
        genre: {
            _id: genre._id,
            name: genre.name
        }
    })
    await movie.save();
    console.log(movie);
    res.send(movie);
})

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(400).send('Invalid genre');

    const movie = await Movie.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    }, {
            new: true
        })
    if (!movie) return res.status(404).send('The movie with given id was not found');
    res.send(movie);
});

router.delete('/:id', async (req, res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).send('The movie with given id was not found');
    res.send(movie);
});
router.get('/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).send('The movie with given id was not found');
    res.send(movie);
})
module.exports = router;