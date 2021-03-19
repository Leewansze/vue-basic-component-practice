
var express = require('express')
var router = express.Router()
var models = require('./db/db')
var mysql = require('mysql2')
var multer = require('multer')
var connection = mysql.createConnection(models.mysql)
connection.connect()
router.get('/getVideoList', function (req, res) {
  var users = []
  connection.query('select * from videomsg', function (err, result) {
    if (err) throw err
    users = result
    res.end(JSON.stringify(users))
  })
})
// router.post('/uploadFile', function (req, res) {
//   var user = {}
//   connection.query('select * from users where id = ' + req.params.id, function (err, result) {
//     if (err) throw err
//     user = result
//     res.end(JSON.stringify(user))
//   })
// })

var uploadFolder = '../public/video'

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder) // 保存的路径，备注：需要自己创建
  },
  filename: function (req, file, cb) {
    var sql = 'select count(*) as num from videomsg'
    // var title = req.body.name
    connection.query(sql, function (error, results) {
      if (error) {
        console.log('[SELECT ERROR] - ', error.message)
        return
      }
      var num = parseInt(results[0].num) + 1
      var getfiletype = file.originalname.split('.')
      var src = num + '.' + getfiletype[getfiletype.length - 1]
      console.log(file.originalname)
      var title = file.originalname
      cb(null, src)
      connection.query('INSERT INTO videomsg(id, title, create_time) VALUES(?,?,?)', [num, title, new Date()], function (error, results, field) {
        if (error) {
          console.log(error)
        }
        console.log('success')
      })
    })
    // const fileFormat = (file.originalname).split('.'); // 取后缀
    // cb(null , num + '.' + fileFormat[fileFormat.length - 1]);
  }
})

var upload = multer({ storage: storage })

router.post('/uploadFile', upload.single('file'), function (req, res, next) {
  console.log('call')
  var file = req.file
  console.log(req.body)
  console.log('文件类型：%s', file.mimetype)
  console.log('原始文件名：%s', file.originalname)
  console.log('文件大小：%s', file.size)
  console.log('文件保存路径：%s', file.path)
  var path = file.path
  var arr = path.split('\\')
  var idarr = arr[arr.length - 1].split('.')
  res.send(idarr[0])
})

module.exports = router
