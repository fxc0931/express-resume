
const express = require('express')
const router = express.Router()
const AllData = require('../../modules/AllData')




router.get('/all', (req, res) => {
        AllData.find()
            .then(AllData => {
                if (!AllData) {
                    return res.status(404).json('没有任何内容')
                }

                res.json(AllData)
            })
            .catch(err => res.status(404).json(err))
    }
)


router.post('/add', (req, res) => {

        // const AllDataFields = {
        //     education: [
        //         {"name":"香港浸会大学","major":"高级信息系统  硕士研究生","date":"09/2018-06/2019","otherInfo":"获得理学院入学奖学金"},
        //         {"name":"广州中医医药大学","major":"计算机科学与技术 工学学士","date":"09/2012-07/2016","otherInfo":"学生会主席助理，学术部成员"}
        //     ],
        //     skill: [{"name":"深入了解 JavaScript，CSS，H5，ES6;"},
        //         {"name":"熟悉 Vue.js, Bootstrap.js, webpack;"},
        //         {"name":"熟悉 Sails.js, Express.js;"},
        //         {"name":"熟悉 Restful API, Axios, AJAX;"},
        //         {"name":"熟练掌握 git 代码管理工具;"},
        //         {"name":"Node.js 全栈开发经验;"},
        //         {"name":"熟悉浏览器兼容性问题;"},
        //         {"name":"熟悉 Python;"}
        //     ],
        //     company: [
        //         {"name":"深圳关心万家健康管理有限公司","position":"前端开发工程师","date":"04/2016-12/2017","workContent":"负责公司项目移动、PC端部分模块开发;"},
        //         {"name":"香港浸会大学区块链实验室","position":"教授学生助理","date":"10/2018-06/2019","workContent":"独立负责实验室项目的前端开发"}
        //     ],
        //     project: [
        //         {"workContent":["运用前端框架 Vue.js 进行开发。熟练运用 CSS 和 H5 的基本用法，深入理解 JavaScript 的面向对象原理，熟悉相关的设计模式。开发 Web 端和微信端，熟悉浏览器的兼容问题;","通过把医院的床位管理全部信息化，医生只需要在系统里操作就可以完成平时患者的出院，入院， 换床等工作;"],"name":"医秘项目","position":"前端开发工程师","date":"05/2016-12/2017"},
        //         {"workContent":["运用前端框架 Vue.js 开发项目前端部分，独立负责前端开发和 API 的设计;","在香港浸会大学读书期间任职教授的学生助理，帮助教授开发 Newscahin 项目，是一个基于区块链的新闻生产 App，用区块链不能修改的特性，用户对新闻的真假性进行评判，结果无法更改;"],"name":"Newschain","position":"前端开发工程师","date":"10/2018-12/2018"},
        //         {"workContent":["运用 bootstrap 和 sails.js, 独立完成前后端的开发和 API 的设计;","用于管理香港浸会大学活动项目的管理;"],"name":"HKBU Events Management","position":"独立开发","date":"09/2018-12/2018"}
        //     ]
        // }
        //
        //
        //
        // new AllData(AllDataFields).save().then(allData => {
        //     res.json(allData)
        // })
    }
)

module.exports = router
