
const express = require('express')
const router = express.Router()
const Company = require('../../modules/Company')




router.get('/', (req, res) => {
        Company.find()
            .then(company => {
                if (!company) {
                    return res.status(404).json('没有任何内容')
                }

                res.json(company)
            })
            .catch(err => res.status(404).json(err))
    }
)


router.post('/add', (req, res) => {

        const companyFields =  {}


        if (req.body.name) companyFields.name = req.body.name
        if (req.body.position) companyFields.position = req.body.position
        if (req.body.date) companyFields.date = req.body.date
        if (req.body.workContent) companyFields.workContent = req.body.workContent


        new Company(companyFields).save().then(company => {
            res.json(company)
        })
    }
)

module.exports = router
