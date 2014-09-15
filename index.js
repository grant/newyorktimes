// The New York Times API

function NewYorkTimes (k) {
  var keys = k;

  function validateKeys (keys) {
    var goodKeys = ['Article_Search', 'Best_Sellers', 'Campaign_Finance', 'Community', 'Congress', 'Districts', 'Event_Listings', 'Geo', 'Most_Popular', 'Movie_Reviews', 'Real_Estate', 'Semantic', 'Times_Newswire', 'TimesTags'];
    for (var name in keys) {
      if (goodKeys.indexOf(name) === -1) {
        console.error(name + " isn't a valid key");
      }
    }
  }

  validateKeys(k);
}

module.exports = NewYorkTimes;