const express=require ('express');
const router=express.Router();
const bodyParser=require('body-parser')
const db=require('../db');

router.use(bodyParser.json({urlencoded:true}));


router.get("/",function(req, res, next) {
    //const email = req.params.email;
    var sql = `SELECT count(*) AS totalCountAvailable FROM booking.ticket_details where SeatStatus=0`;
    db.query(sql,function(err, row, fields) {
      if(err) {
        console.log(err)
      }
      else{
      res.json(row[0]); 
      //console.log(JSON.parse(res.json(row[0])).count);
      }
    })
  });  

  router.get("/byEachRow",function(req, res, next) {
   var sql = `SELECT count(*) AS totalCountAvailableatEachRow FROM booking.ticket_details where SeatStatus=0 group by RowNumber`;
    db.query(sql,function(err, row, fields) {
      if(err) {
        console.log(err)
      }
      else{
      res.json(row); 
      //console.log(JSON.parse(res.json(row[0])).count);
      }
    })
});  






module.exports=router;
