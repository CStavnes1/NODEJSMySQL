const mysql= require('mysql');
const cTable = require('console.table');
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Senvats1",
  database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    
  });
  


function displayAllProducts() {
  connection.query(`SELECT * FROM products`, function (error, results, fields) {

    if (error) throw error;
    //console.log(results)
    const table = cTable.getTable(results);
    
    console.log(table)
    
  });
};

displayAllProducts();

function purchase() {
  inquirer
    .prompt([
      {
      name: "buy",
      type: "checkbox",
      message: "What woud you like to purchase?",
      choices: ["sunglasses", "nike shoes", "tent", "iPhone", "watch", "xbox", "latern", "bike", "golf clubs", "inline skates"]
     },
     {
     name: "units",
     type: "checkbox",
     message: "How many units would you like to purchase?",
     choices: ["1", "5", "100"]
     }
    ]
    )
    .then(function (response) {
      //console.log(response.buy + response.units)

      let product = response.buy
      let quantity = response.units

      //let queryStr = `SELECT * FROM products WHERE;`

      connection.query(`SELECT * FROM products WHERE product_name ='${product}'`, function(err, data) {
        if (err) throw err;
        // console.log(data)
        // console.log(data[0].stock_quantity)
        
        if (quantity >= data[0].stock_quantity) {
          console.log("There is not enough inventory to complete your order!")
          purchase()
        } else {
          console.log("Order Placed!\n")

          console.log('Order Total: $'+data[0].price * quantity+"\n")
          purchase()
        }
      })

    })
  }

purchase();



