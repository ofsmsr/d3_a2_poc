var express = require('express'),
    app = express(),
    port = process.env.PORT || 9000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// mock salesperson

var mockData = [{
    salesperson: 'Bob',
    sales: 33
},
{
    salesperson: 'Robin',
    sales: 12
},
{
    salesperson: 'Anne',
    sales: 41
},
{
    salesperson: 'Mark',
    sales: 16
},
{
    salesperson: 'Joe',
    sales: 59
},
{
    salesperson: 'Eve',
    sales: 38
},
{
    salesperson: 'Kirsty',
    sales: 21
},
{
    salesperson: 'Chris',
    sales: 25
},
{
    salesperson: 'Lisa',
    sales: 30
},
{
    salesperson: 'Tom',
    sales: 59
},
{
    salesperson: 'Stacy',
    sales: 92
},
{
    salesperson: 'Charles',
    sales: 33
},
{
    salesperson: 'Mary',
    sales: 55
}];

//Routes
app.route('/status')
   .get(function getUsers(req, res) {
        res.json({msg: 'ok'});
    });

app.route('/data')
    .get(function getUsers(req, res) {
        res.json({data: mockData});
    });

app.listen(port);
console.log('The server is on: '+ port);