const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Joi = require('joi');
const { Genre, validate } = require('../model/genre');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
/*const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
})*/
// const Genre = mongoose.model('Genre', new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         minlength: 5,
//         maxlength: 50
//     }
// }));
/*const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Horror' },
    { id: 3, name: 'Romance' }
];*/

router.get('/', async (req, res) => {
    const genres = await Genre.find().sort('name');
    res.send(genres);
});

router.post('/', auth, async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //const
    let genre = new Genre({
        name: req.body.name
    });

    genre = await genre.save();
    res.send(genre);
});

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) res.status(400).send(error.details[0].message);

    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
        new: true
    })
    //const genre = Genre.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with given id not found');
    res.send(genre);
});

router.delete('/:id', [auth, admin], async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);
    //const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with given id was not found');
    // const index = genres.indexOf(genre);
    // genres.splice(index, 1);
    res.send(genre);
});

router.get('/:id', async (req, res) => {
    //const genre = genres.find(c => c.id === parseInt(req.params.id));
    const genre = await Genre.findById(req.params.id);
    if (!genre) return res.status(404).send('The genre with gievn id was not found');
    res.send(genre);
})

// function validateGenre(genre) {
//     const schema = {
//         name: Joi.string().min(3).required()
//     };
//     return Joi.validate(genre, schema);
// }
module.exports = router;
