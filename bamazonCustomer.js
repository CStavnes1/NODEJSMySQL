const mysql= require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Senvats1",
  database: "bamazon"
  });

  connection.connect() ;

  // connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  //   if (error) throw error;
  //   console.log('The solution is: ', results[0].solution);
  // });
   
  // connection.end();

function displayAllProducts() {
  connection.query(`SELECT * FROM products`, function (error, results, fields) {

    if (error) throw error;
    console.log(results)
  });
};

displayAllProducts();



  
// function getSongByArtist (artist){
//     connection.query(`SELECT * FROM songs WHERE artist ='${artist}'`, function (error, results, fields) {
   
//         if (error) throw error;
//         console.log(results)
//       });
// }  

// function getRepeats (){
//     connection.query('SELECT artist , COUNT(*) FROM songs GROUP BY artist HAVING COUNT(*) > 2', function (error, results, fields) {
//         if (error) throw error;
//         console.log(results)
//       });
// }  


// // getSongByArtist('Baltimora');

// getRepeats();