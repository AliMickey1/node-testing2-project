const express = require('express')
const router = express.Router()
const Bored = require('./boredModel')

router.delete('./:id', async (req, res) => {
    const id = req.params.id
    const delAct = await Bored.remove(id)
    res.status(200).json(delAct)
})

router.get('/', (req, res) => {
    res.status(200).json('bored')
})

router.get('/bored', (req, res) => {
    Bored.getAll()
        .then(act => {
            res.status(200).json(act)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/bored', async (req, res) => {
    res.status(201).json(await Bored.insert(req.body))
})

module.exports = router