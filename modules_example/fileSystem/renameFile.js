var fs = require('fs');

fs.rename('file_example.txt', 'renamedFile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});