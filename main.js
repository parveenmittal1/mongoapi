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
app.get('/getview',function (req,res) {

    db.collection('prvjson').find({}).toArray(function(err,resl){
        console.log(resl);
        res.send(resl);
    });

});


var original=[{"_id":"5cc21b39edf6760017961f21","index":0,"guid":"054be26a-46ae-4c95-b482-a9c35eca77c1","isActive":false,"balance":"$3,716.63","picture":"http://placehold.it/32x32","age":30,"eyeColor":"green","name":"Peck Wise","gender":"male","company":"HINWAY","email":"peckwise@hinway.com","phone":"+91 9894982450","address":"433 McKinley Avenue, Topanga, Iowa, 3482","about":"Nostrud laboris irure culpa sint do labore velit. Deserunt sunt laboris ad laborum non mollit voluptate nulla. Adipisicing minim magna tempor sunt ullamco cupidatat sunt aute. Exercitation mollit irure amet minim exercitation consectetur. Laboris cillum officia anim cillum ex excepteur mollit qui enim id deserunt nostrud do. Qui nulla cupidatat fugiat enim nisi aliqua labore aute mollit Lorem exercitation ut sint.\r\n","registered":"2019-02-17T08:31:34 -06:-30","latitude":11.33591,"longitude":28.888934,"tags":["adipisicing","duis","cillum","quis","irure","consequat","sint"],"friends":[{"id":0,"name":"Shelby Forbes","pets":[{"id":0,"name":"Garza Snow","petskid":[{"id":0,"name":"Buchanan Dennis"},{"id":1,"name":"Sonia Camacho"},{"id":2,"name":"Stein Vazquez"}]},{"id":1,"name":"Carver Obrien","petskid":[{"id":0,"name":"Foley Carroll"},{"id":1,"name":"Hayes Ellis"},{"id":2,"name":"Rose Padilla"}]},{"id":2,"name":"Natalie Clarke","petskid":[{"id":0,"name":"Solomon Phillips"},{"id":1,"name":"Leanna Page"},{"id":2,"name":"Morse Francis"}]}]},{"id":1,"name":"Kitty Kirk","pets":[{"id":0,"name":"Kirsten Avila","petskid":[{"id":0,"name":"Carol May"},{"id":1,"name":"Reva Scott"},{"id":2,"name":"Lopez Bentley"}]},{"id":1,"name":"Young Mooney","petskid":[{"id":0,"name":"Tracie English"},{"id":1,"name":"Jeannie Hull"},{"id":2,"name":"Whitney Wilder"}]},{"id":2,"name":"Sheila Raymond","petskid":[{"id":0,"name":"Katheryn Quinn"},{"id":1,"name":"Holcomb Crane"},{"id":2,"name":"Carmela Stanton"}]}]},{"id":2,"name":"Imelda Bradshaw","pets":[{"id":0,"name":"Lindsay Johns","petskid":[{"id":0,"name":"Earline Phelps"},{"id":1,"name":"Katrina Barr"},{"id":2,"name":"Shaffer Hopper"}]},{"id":1,"name":"Serrano Cox","petskid":[{"id":0,"name":"Doyle Rodriguez"},{"id":1,"name":"Diaz Sparks"},{"id":2,"name":"Robbins Case"}]},{"id":2,"name":"Sophia Cameron","petskid":[{"id":0,"name":"Joanna Miles"},{"id":1,"name":"Carmen Gilmore"},{"id":2,"name":"Violet Peters"}]}]}],"greeting":"Hello, Peck Wise! You have 8 unread messages.","favoriteFruit":"strawberry"},{"_id":"5cc227092fd73c0017aae3a2","index":0,"guid":"2b17ad44-41e9-45ba-9f89-e4065746d0b4","isActive":true,"balance":"$1,324.06","picture":"http://placehold.it/32x32","age":26,"eyeColor":"green","name":"Dejesus House","gender":"male","company":"GYNK","email":"dejesushouse@gynk.com","phone":"+91 9732128733","address":"160 Lenox Road, Bascom, Alaska, 7206","about":"Exercitation cupidatat ullamco elit consectetur eiusmod voluptate. Lorem sit culpa elit eiusmod. Dolor esse tempor reprehenderit culpa occaecat incididunt sit veniam aute adipisicing culpa. Fugiat aute laborum do eiusmod mollit in Lorem labore magna magna. Minim velit in sint elit qui in dolore tempor.\r\n","registered":"2017-09-20T08:21:02 -06:-30","latitude":1.784502,"longitude":36.719813,"tags":["eiusmod","voluptate","commodo","ut","laboris","consequat","mollit"],"friends":[{"id":0,"name":"Dawson Guthrie","pets":[{"id":0,"name":"Fitzgerald Kent","petskid":[{"id":0,"name":"Jerry Rosales"},{"id":1,"name":"Odessa Hudson"},{"id":2,"name":"Terry Ferrell"}]},{"id":1,"name":"Judy Levy","petskid":[{"id":0,"name":"Lilia Wade"},{"id":1,"name":"Juliet Wiley"},{"id":2,"name":"Josefina Campos"}]},{"id":2,"name":"Sheryl Mercado","petskid":[{"id":0,"name":"Romero Burgess"},{"id":1,"name":"Weber Mcleod"},{"id":2,"name":"Hazel Merrill"}]}]},{"id":1,"name":"William Yang","pets":[{"id":0,"name":"Roach Garza","petskid":[{"id":0,"name":"Brenda Peterson"},{"id":1,"name":"Melanie Bolton"},{"id":2,"name":"Delia Williamson"}]},{"id":1,"name":"Ramos Sims","petskid":[{"id":0,"name":"Shari Russo"},{"id":1,"name":"Decker Conway"},{"id":2,"name":"Puckett Gaines"}]},{"id":2,"name":"Mayra Hobbs","petskid":[{"id":0,"name":"Maxwell Obrien"},{"id":1,"name":"Witt Downs"},{"id":2,"name":"Ashley Bond"}]}]},{"id":2,"name":"Fuller Wood","pets":[{"id":0,"name":"Pacheco Kennedy","petskid":[{"id":0,"name":"Wilson Fisher"},{"id":1,"name":"Sofia Dale"},{"id":2,"name":"Maxine Conley"}]},{"id":1,"name":"Millicent Norris","petskid":[{"id":0,"name":"Katie Bailey"},{"id":1,"name":"Brown Sherman"},{"id":2,"name":"Goldie Kirkland"}]},{"id":2,"name":"Tisha Contreras","petskid":[{"id":0,"name":"Harmon Turner"},{"id":1,"name":"Cobb Garrison"},{"id":2,"name":"Rebekah Wright"}]}]}],"greeting":"Hello, Dejesus House! You have 8 unread messages.","favoriteFruit":"apple"},{"_id":"5cc227422fd73c0017aae3a3","index":0,"guid":"472afc44-cb63-4fbd-b694-ea219ce61f14","isActive":true,"balance":"$1,446.24","picture":"http://placehold.it/32x32","age":31,"eyeColor":"brown","name":"Meadows Hays","gender":"male","company":"DELPHIDE","email":"meadowshays@delphide.com","phone":"+91 9538908158","address":"661 Beacon Court, Sunwest, Mississippi, 7163","about":"Ad dolor culpa sit culpa labore cillum cillum occaecat in esse adipisicing commodo esse. Magna reprehenderit do laborum est labore et aute proident cillum pariatur deserunt exercitation. Tempor eiusmod qui adipisicing consequat non. Sunt aute veniam eiusmod adipisicing ex est.\r\n","registered":"2016-04-25T01:38:37 -06:-30","latitude":52.449842,"longitude":-12.72003,"tags":["consectetur","laborum","pariatur","commodo","id","voluptate","dolor"],"friends":[{"id":0,"name":"Pearson Holcomb","pets":[{"id":0,"name":"Hardy Luna","petskid":[{"id":0,"name":"Rosalind Peters"},{"id":1,"name":"Calderon Buck"},{"id":2,"name":"Marcie Case"}]},{"id":1,"name":"Kelley Swanson","petskid":[{"id":0,"name":"Elba Garner"},{"id":1,"name":"Hines William"},{"id":2,"name":"Nielsen Cervantes"}]},{"id":2,"name":"Shanna Pollard","petskid":[{"id":0,"name":"Allison Madden"},{"id":1,"name":"Kirby Underwood"},{"id":2,"name":"Roberson Gill"}]}]},{"id":1,"name":"Mai Alford","pets":[{"id":0,"name":"Marylou Morrow","petskid":[{"id":0,"name":"Wilma Richard"},{"id":1,"name":"Suarez Crawford"},{"id":2,"name":"Rose Mcmillan"}]},{"id":1,"name":"Alberta Murphy","petskid":[{"id":0,"name":"Miles Allen"},{"id":1,"name":"Consuelo Robles"},{"id":2,"name":"Andrea Justice"}]},{"id":2,"name":"Alyssa Garza","petskid":[{"id":0,"name":"Eve Benjamin"},{"id":1,"name":"Carlson Lott"},{"id":2,"name":"Cassandra Klein"}]}]},{"id":2,"name":"Porter Caldwell","pets":[{"id":0,"name":"Wright Wagner","petskid":[{"id":0,"name":"Mathis Mcfadden"},{"id":1,"name":"Rhonda Patel"},{"id":2,"name":"Kate Bishop"}]},{"id":1,"name":"Brandi Moon","petskid":[{"id":0,"name":"Bridges French"},{"id":1,"name":"Margery Faulkner"},{"id":2,"name":"Blake Vaughan"}]},{"id":2,"name":"Sybil Ball","petskid":[{"id":0,"name":"Elsa Gibson"},{"id":1,"name":"Zimmerman Miller"},{"id":2,"name":"York Hubbard"}]}]}],"greeting":"Hello, Meadows Hays! You have 8 unread messages.","favoriteFruit":"banana"},{"_id":"5cc2275b2fd73c0017aae3a4","index":0,"guid":"749f50c3-15a0-4abe-a5a7-b0897d6ca7e4","isActive":false,"balance":"$2,204.62","picture":"http://placehold.it/32x32","age":26,"eyeColor":"brown","name":"Beatrice Mosley","gender":"female","company":"SPORTAN","email":"beatricemosley@sportan.com","phone":"+91 9298214022","address":"100 Bowne Street, Kenvil, Texas, 3017","about":"Sunt tempor exercitation pariatur commodo amet cupidatat. Nisi laboris enim irure eiusmod dolor eiusmod ut excepteur enim ipsum ea et. Voluptate adipisicing et aliquip laborum. Laboris labore incididunt tempor duis nostrud officia aliqua sint. In minim enim velit irure quis tempor id sit id laboris cillum. Quis sunt sunt proident voluptate excepteur.\r\n","registered":"2017-05-10T02:55:07 -06:-30","latitude":-43.926269,"longitude":68.104218,"tags":["velit","aute","proident","elit","laborum","officia","Lorem"],"friends":[{"id":0,"name":"Cooley Britt","pets":[{"id":0,"name":"Berry Osborn","petskid":[{"id":0,"name":"Lupe Melton"},{"id":1,"name":"Merritt Bender"},{"id":2,"name":"Goldie Stein"}]},{"id":1,"name":"Kaufman Clarke","petskid":[{"id":0,"name":"Cantrell Spence"},{"id":1,"name":"Mack Shannon"},{"id":2,"name":"England Guerra"}]},{"id":2,"name":"Samantha Payne","petskid":[{"id":0,"name":"Dickerson Avila"},{"id":1,"name":"Lester Farley"},{"id":2,"name":"Hendricks Vasquez"}]}]},{"id":1,"name":"Mckee Trevino","pets":[{"id":0,"name":"Rosemary Carroll","petskid":[{"id":0,"name":"Kayla Ware"},{"id":1,"name":"Lelia Solis"},{"id":2,"name":"Ashley Anthony"}]},{"id":1,"name":"Shanna Morton","petskid":[{"id":0,"name":"Rosa Downs"},{"id":1,"name":"Tammy Cleveland"},{"id":2,"name":"Walters Walls"}]},{"id":2,"name":"Guy George","petskid":[{"id":0,"name":"Tania Fisher"},{"id":1,"name":"Whitehead Horton"},{"id":2,"name":"Cole Watson"}]}]},{"id":2,"name":"Benjamin Porter","pets":[{"id":0,"name":"Noble Gonzales","petskid":[{"id":0,"name":"Cathleen Lynch"},{"id":1,"name":"Taylor Santos"},{"id":2,"name":"Matthews Hutchinson"}]},{"id":1,"name":"Adkins Burton","petskid":[{"id":0,"name":"Harding Ferguson"},{"id":1,"name":"Alisa Cardenas"},{"id":2,"name":"Bell Justice"}]},{"id":2,"name":"Maria Brady","petskid":[{"id":0,"name":"Alexis Ballard"},{"id":1,"name":"Ruth Byers"},{"id":2,"name":"Lily Black"}]}]}],"greeting":"Hello, Beatrice Mosley! You have 7 unread messages.","favoriteFruit":"banana"}]

app.get('/original',function (req,res) {
        res.send(original);
    });

});

/*###################################################################3*/
