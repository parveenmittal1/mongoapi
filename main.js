const express = require('express');
const mnDb= require('mongodb').MongoClient;
const app= express();
const bp= require('body-parser');
var port = process.env.PORT || 3000;


app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.get('/',function (req,res) {
    console.log("PPS open at port: "+port);
        res.send("PPS open at port: "+port);

});

var success = {
    message:"true"
};

var failure = {
    message:"false"
};

/*##############################################################*/
var db;
var url='mongodb://asr:asr@ds127101.mlab.com:27101/asr';
mnDb.connect(url,{ useNewUrlParser: true },function (err,database) {
    db=database;
    app.listen(port,function () {
        console.log('connected to :'+port);
    });
});




/*################################################################*/


app.post('/save',function (req,res) {
    var obj= req.body;
    console.log("PRV Mongo Message: "+JSON.stringify(obj));

    db.collection('prvjson').save(obj,function (err, result){
        if(err) {res.json(failure);}
        else{console.log(req.body);
        res.json(result);}
    });

});

app.post('/view',function (req,res) {

    db.collection('prvjson').find({}).toArray(function(err,resl){
        console.log(resl);
        res.send(resl);
    });

});

/*###################################################################3*/
