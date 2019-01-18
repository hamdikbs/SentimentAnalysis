//includes
var util = require('util'),
    twitter = require('twitter'),
    sentimentAnalysis = require('./sentimentAnalysis');
   // db = require('diskdb');

//db = db.connect('db', ['sentiments']);
//config
var config = {
  consumer_key: 'xxxx',
  consumer_secret: 'xx',
  access_token_key: 'xx-xx',
  access_token_secret: 'xx'
};  

module.exports = function(text, callback) {
  var twitterClient = new twitter(config);
  var response = [], dbData = []; // to store the tweets and sentiment

  twitterClient.get('search/tweets',{q:text}, function(error, tweets, response) {
    // for (var i = 0; i < data.statuses.length; i++) {
    //   var resp = {};

    //   resp.tweet = data.statuses[i];
    //   resp.sentiment = sentimentAnalysis(data.statuses[i].text);
    //   dbData.push({
    //     tweet: resp.tweet.text,
    //     score: resp.sentiment.score
    //   });
    //   response.push(resp);
    // // };
    // db.sentiments.save(dbData);
    // callback(response);
    console.log(tweets);
  });
}