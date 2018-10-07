var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello example 3!', function (err) {
  if (err) throw err;
  console.log('The new file was create with Write!');
});