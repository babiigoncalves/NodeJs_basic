var events = require('events');

var evEmitter = new events.EventEmitter();


var eventHandler = function(){
    console.log('Hello! I hear you! :D');
};

evEmitter.on('sayHello', eventHandler);

evEmitter.emit('sayHello');