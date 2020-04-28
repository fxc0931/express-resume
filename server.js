const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const helmet = require('helmet')
const compression = require('compression')
const app = express()



//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
})

app.use(helmet())
app.use(compression())

// 使用body-parser中间件
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// DB config

const db = require("./config/key").mongoURI

// Connect to mongodb
mongoose.set('useFindAndModify', false)
mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)
mongoose.connect( db)
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch(err => console.log(err))

// const education = require("./routes/api/education")
// const skill = require("./routes/api/skill")
// const company = require("./routes/api/company")
// const project = require("./routes/api/project")
const allData = require("./routes/api/allData")
const news = require("./routes/api/news")

app.get("/",(req, res) => {
    res.send('Hello World!')
})

// use route
// app.use("/api/education", education)
// app.use("/api/skill", skill)
// app.use("/api/company", company)
app.use("/api/news", news)
app.use("/api/allData", allData)

const port = process.env.PORT || 5000

app.set('NODE_ENV', 'production')

app.listen(port,() => {
    console.log('Server running on Port', port)
})
