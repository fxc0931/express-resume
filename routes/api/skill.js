const express = require('express')
const router = express.Router()
const Skill = require('../../modules/Skill')


router.get('/', (req, res) => {
    Skill.find()
            .then(skill => {
                if (!skill) {
                    return res.status(404).json('没有任何内容')
                }

                res.json(skill)
            })
            .catch(err => res.status(404).json(err))
    }
)


router.post('/add', (req, res) => {

        const skillFields =  {}

        if (req.body.name) skillFields.name = req.body.name

        new Skill(skillFields).save().then(skill => {
            res.json(skill)
        })
    }
)

router.post(
    '/edit/:id',
    (req, res) => {
        const skillFields =  {}

        if (req.body.name) skillFields.name = req.body.name

        Skill.findOneAndUpdate(
            { _id: req.params.id },
            { $set: skillFields },
            { new: true }
        ).then(skill => res.json(skill))
    }
)

module.exports = router
