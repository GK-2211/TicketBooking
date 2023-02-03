const express=require ('express');
const router=express.Router();
const bodyParser=require('body-parser')
const db=require('../db');


router.use(bodyParser.json({urlencoded:true}));

router.put("/byRow",function(req,res,next){
    const {RowNumber, limit}=req.body;
    var sql="Update booking.ticket_details SET SeatStatus='1' where SeatStatus='0' AND RowNumber=? limit ?;";
    db.query(sql,[RowNumber, limit],function(err,result){
        if (err){
            throw err;
        }
        else{
            res.json({"Status" : "Sucess"});
        }
    }   
    )
})

router.put("/SeatNumber",function(req,res,next){
    const {limit}=req.body;
    var sql="Update booking.ticket_details SET SeatStatus='1' where SeatStatus='0' order by SeatNumber limit ?";
    db.query(sql,[limit],function(err,result){
        if (err){
            throw err;
        }
        else{
            res.json({"Status" : "Sucess"});
        }
    }   
    )
})






module.exports=router;

