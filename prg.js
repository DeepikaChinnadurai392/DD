const express = require('express');
var mysql = require('mysql');  
const app = express();

const db = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "password",  
database: "bookstore"  
});  
db.connect((err)=> {  
if (err) 
    {throw err;  }

console.log("MySQL Connected");  
});  

db.query('SELECT * FROM books', (err, rows) => {
  //if (err) throw err;

  console.log('Data received from database:');
  console.log(rows);
});

const user = { 
  title: "Bigdata",
  author_id: 4,
  genre: "subject",
  price: 100,
  published_date: "2008-05-23"
};

  db.query('INSERT INTO books SET ?', user, (err, results) => {
   
    if (err) {
      console.error('An error occurred while inserting data');
      throw err;
    }
    console.log('Data inserted:',results.insertId);
  });
  db.end((err)=> {  
    if (err) 
        {throw err;  }
    
    console.log("MySQL connection was closed");  
    });  
