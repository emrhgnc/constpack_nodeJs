var express     =   require("express");
var bodyParser  =   require("body-parser");
var mongoOp     =   require("../models/user");
var router      =   express.Router();

router.use(bodyParser.urlencoded({"extended" : true}));

router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello World"});
});

router.route("/users")
    .get(function(req,res){
        var response = {};
        mongoOp.find({},function(err,data){
            if(err) {
                response = {
                    "result" : false,
                    "errorId" : "101",
                    "errorMsg" : "Error fetching data",
                    "data" : null
                };
            } else {
                response = {
                    "result" : true,
                    "errorId" : 0,
                    "errorMsg" : null,
                    "data" : data};
            }
            res.json(response);
        });
    })
    .post(function(req,res){
        var db = new mongoOp();
        var response = {};
        db.kullaniciAdi=req.body.kullaniciAdi;
        db.eposta=req.body.eposta;
        db.sifre=req.body.sifre;
        db.unvan=req.body.unvan;
        db.rolId=req.body.rolId;
        db.durum=req.body.durum;
        db.save(function(err){
            if(err) {
                response = {
                    "result" : false,
                    "errorId" : 201,
                    "errorMsg" : "Error adding data",
                    "data" : null
                };
            } else {
                response = {
                    "result" : false,
                    "errorId" : 201,
                    "errorMsg" : "Data added",
                    "data" : data
                };
            }
            res.json(response);
        });
    });
router.route("/users/:id")
    .get(function(req,res){
        var response = {};
        mongoOp.findById(req.params.id,function(err,data){
            if(err) {
                response = {
                    "result" : false,
                    "errorId" : "101",
                    "errorMsg" : "Error fetching data",
                    "data" : null
                };
            } else {
                response = {
                    "result" : true,
                    "errorId" : 0,
                    "errorMsg" : null,
                    "data" : data};
            }
            res.json(response);
        });
    })

module.exports=router;

