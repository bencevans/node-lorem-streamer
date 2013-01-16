
var util = require('util');
var Stream = require('stream');
var lorem = require('lorem-ipsum');

var LoremStream = function(options) {
  var loremStream = this;

  if(typeof options !== 'object')
    options = {};

  // Inherit Stream
  Stream.call(this);

  this.writable = true;
  this.readable = true;

  // Interval Bounds (in milliseconds)
  var min = options.intervalLowerBound || 10;
  var max = options.intervalUpperBound || 2000;

  function createTimeout() {
    setTimeout(function() {
      loremStream.emit('data', lorem(options));
      createTimeout();
    }, Math.floor(Math.random() * (max - min + 1)) + min);
  }
  
  createTimeout();

  return this;
};

util.inherits(LoremStream, Stream);

module.exports = function(options) {
  return new LoremStream(options);
};
