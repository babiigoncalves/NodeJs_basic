var fs = require('fs');

fs.appendFile('myNewFile.txt', 'This is an example!', function(err){
    if(err) throw err;
    console.log('The file was Created and Saved! :)');
});