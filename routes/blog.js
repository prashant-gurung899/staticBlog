const e = require('express')
let express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
let router = express.Router()
let path = require('path')
const { resourceUsage } = require('process')
let blogs = require('../data/blogs')

router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '../templates/index.html'))
    res.render('home')
})
router.get('/blog', (req, res) => {
    /*blogs.forEach(e => {
        console.log(e.title)        
    });*/
    //res.sendFile(path.join(__dirname, '../templates/bloghome.html'))
    res.render('blogHome',{
        blogs:blogs,
    })
})
router.get('/blogpost/:slug', (req, res) => {
    /*blogs.forEach(e => {
        console.log(e.title)        
    });*/
    console.log(req.params.slug)
    myBlog = blogs.filter((e) => {
        return e.slug == req.params.slug;
    })
    res.render('blogPage',{
        title:myBlog[0].title,
        content:myBlog[0].content,
        
    })
    // console.log(myBlog);
    //res.sendFile(path.join(__dirname, '../templates/blogpage.html'))
})
module.exports = router