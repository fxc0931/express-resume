
const express = require('express')
const router = express.Router()
const Project = require('../../modules/Project')




router.get('/', (req, res) => {
        Project.find()
            .then(project => {
                if (!project) {
                    return res.status(404).json('没有任何内容')
                }

                res.json(project)
            })
            .catch(err => res.status(404).json(err))
    }
)


router.post('/add', (req, res) => {

        const projectFields = {}

        if (req.body.name) projectFields.name = req.body.name
        if (req.body.position) projectFields.position = req.body.position
        if (req.body.date) projectFields.date = req.body.date
        if (req.body.workContent) projectFields.workContent = req.body.workContent


        new Project(projectFields).save().then(project => {
            res.json(project)
        })
    }
)

module.exports = router
