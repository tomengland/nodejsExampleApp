var fortune = require('../lib/fortune.js');
var expect = require('chai').expect;

suite('Fortune cookie tests', function() {

  test('Fortune Cookie Tests', function() {
    expect(typeof fortune.getFortune() === 'string');
  });
});


