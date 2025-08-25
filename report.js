const newman = require ('newman');
require('dotenv').config();

newman.run({

    collection:`https://api.postman.com/collections/45503194-a644143e-5f66-4c61-a796-838dba5ca87e?access_key=${process.env.pmatKey}`,

    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export:  './Reports/report.html',           
        }
    
    }

 },  function (err) {
     if (err) { throw err; } 
     console.log('collection run complete'); 
 
});

