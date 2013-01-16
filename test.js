
var streamer = require('./');
var assert = require('assert');

describe('lorem-streamer', function() {

  it('should emit lorem ipsum text', function(done) {

    var stream = streamer({intervalUpperBound:10});
    stream.on('data', function(data) {
      assert.ok(data);
      done();
    });

  });

});