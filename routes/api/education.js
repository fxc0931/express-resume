
const express = require('express')
const router = express.Router()

const Education = require('../../modules/Education')




router.get('/', (req, res) => {
    Education.find()
            .then(education => {
                if (!education) {
                    return res.status(404).json('没有任何内容')
                }

                res.json(education)
            })
            .catch(err => res.status(404).json(err))
    }
)


router.post('/add', (req, res) => {

        const educationFields =  {}


        if (req.body.name) educationFields.name = req.body.name
        if (req.body.major) educationFields.major = req.body.major
        if (req.body.date) educationFields.date = req.body.date
        if (req.body.otherInfo) educationFields.otherInfo = req.body.otherInfo


        new Education(educationFields).save().then(education => {
            res.json(education)
        })
    }
)

module.exports = router
