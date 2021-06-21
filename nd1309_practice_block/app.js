/**
 * Importing the Block class
 */
//
const BlockClass = require('./block.js');

/**
 * Creating a block object
 */
const block = new BlockClass.Block("Test Block 2");

var blockPromise = new Promise(function(resolve,reject) {
	block.generateHash();
	resolve('hash generated')
})

blockPromise.then(function(result) {
	console.log(block)
}, function(err) {
	console.log(err);
})




/**
 * Step 3: Run the application in node.js
 * 
 */

// From the terminal: cd into Project folder
// From the terminal: Run node app.js to run the code