const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');

const server = 'localhost:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'area777';      // REPLACE WITH YOUR DB NAME

mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true });

const UserModel = require('../../models/user.js')

// Fetch User Info
router.post('/', (req, res) => {
    const filter = { email: req.body.email }

    console.log(filter)

    UserModel
        .find(filter)
        .then(doc => {
            res.json({ status: true, res: doc })
        })
        .catch(err => {
            res.json({ status: false, res: err })
        })
});

// Update User
router.post('/update', (req, res) => {
    const filter = { email: req.body.email }

    console.log(filter)


    const update = {
        balance: req.body.balance,
        lastActive: new Date()
    }

    UserModel
        .findOneAndUpdate(filter, update, {new: true})
        .then(doc => {
            res.json({ status: true, res: doc })
        })
        .catch(err => {
            res.json({ status: false, res: err })
        })
});

// Register User
router.post('/register', (req, res) => {

    let registered = new UserModel({
        email: req.body.email,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        balance: 1000,
        userCreated: new Date(),
        lastActive: new Date()
    });

    console.log(registered)

    registered.save()
        .then(doc => {
            res.json({ status: true, res: doc })
        })
        .catch(err => {
            res.json({ status: false, res: err })
        });

});

router.post('/authenticate', (req, res) => {
    console.log(req.body)
    res.json(req.body)
});

// git push
// router.post('/:id', (req, res) => {
//     const found = members.some(member => member.id === Number(req.params.id))

//     if(found){
//         res.json(members.filter(member => member.id === Number(req.params.id)));
//     } else {
//         res.status(400).json({ msg: `no ${req.params.id}`})
//     }

// })

module.exports = router