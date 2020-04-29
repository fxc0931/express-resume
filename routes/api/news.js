
const express = require('express')
const router = express.Router()
const News = require('../../modules/News')




router.get('/', (req, res) => {
    let page = req.query.page || 1
    let pageSize = req.query.pageSize || 10
    let skip = (page - 1) * pageSize
    let params = {}
    let number = 0
    News.count({}, (err, count) => {
        if (err) {
            console.log(err);
        } else {
            number = count
        }
    })
    News.find(params).skip(skip).limit(pageSize)
        .then(news => {
            if (!news) {
                return res.status(404).json('没有任何内容')
            }
            let data = {}
            data.items = news
            data.total = number
            res.status(200).json(data)
        })
        .catch(err => res.status(404).json(err))
}
)

router.get('/:id', (req, res) => {
    News.findOne({ _id: req.params.id })
        .then(news => {
            if (!news) {
                return res.status(404).json('没有任何内容')
            }
            res.status(200).json(news)
        })
        .catch(err => res.status(404).json(err))
}
)


router.post('/add', (req, res) => {
    const newsFields = {}
    if (req.body.author) newsFields.author = req.body.author
    if (req.body.content) newsFields.content = req.body.content
    if (req.body.content_short) newsFields.content_short = req.body.content_short
    if (req.body.display_time) newsFields.display_time = req.body.display_time
    if (req.body.image_uri) newsFields.image_uri = req.body.image_uri
    if (req.body.title) newsFields.title = req.body.title
    if (req.body.status) newsFields.status = req.body.status


    new News(newsFields).save().then(news => {
        res.status(200).json(news)
    })
}
)

router.put('/edit/:id',
    (req, res) => {
        const newsFields = {}
        if (req.body.author) newsFields.author = req.body.author
        if (req.body.content) newsFields.content = req.body.content
        if (req.body.content_short) newsFields.content_short = req.body.content_short
        if (req.body.display_time) newsFields.display_time = req.body.display_time
        if (req.body.image_uri) newsFields.image_uri = req.body.image_uri
        if (req.body.title) newsFields.title = req.body.title
        if (req.body.status) newsFields.status = req.body.status

        News.findOneAndUpdate(
            { _id: req.params.id },
            { $set: newsFields },
            { new: true }
        ).then(news => res.status(200).json(news))
    }
)

router.delete('/:id', (req, res) => {
    News.deleteOne({ _id: req.params.id })
        .then(news => {
            if (!news) {
                return res.status(404).json('没有任何内容')
            }
            res.status(200).json('删除成功')
        })
        .catch(err => res.status(404).json(err))
}
)

module.exports = router
