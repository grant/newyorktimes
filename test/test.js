
var assert = require("assert");
var env = require('node-env-file');
var nyt = require('..');

// Setup env
env(__dirname + '/../.env');

function objEqual (obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

describe('NewYorkTimes', function(){
  describe('keys', function(){
    it('should store keys', function(){
      var newnyt = nyt({
        Article_Search: '',
        Best_Sellers: '',
        Campaign_Finance: '',
        Community: '',
        Congress: '',
        Districts: '',
        Event_Listings: '',
        Geo: '',
        Most_Popular: '',
        Movie_Reviews: '',
        Real_Estate: '',
        Semantic: '',
        Times_Newswire: '',
        TimesTags: ''
      });
      assert(true);
    });
  });
});