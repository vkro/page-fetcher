const fs = require('fs');
const args = process.argv.splice(2);
const request = require('request');


// Takes a URL and local file path as command line args
// Downloads the resource to the specified path

const fetcher = function (args) {
  const url = args[0];
  const path = args[1]

  request(url, path, (error, response, body) => {
    fs.writeFile(path, body, () => {
      fs.stat(path, (error, stat) => {
      process.stdout.write(`Downloaded and saved ${stat.size} bytes to ${path}\n`)
      })
    })
  })
};

// request(args[0], (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

fetcher(args);