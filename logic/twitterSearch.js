//includes
var util = require('util'),
    twitter = require('twitter'),
    sentimentAnalysis = require('./sentimentAnalysis');
    // db = require('diskdb');

// db = db.connect('db', ['sentiments']);
//config
var config = {
  consumer_key: 'J5C9vn6jygD5Y0QRay8L4sIg3',
  consumer_secret: 'LeiJFKUKd43ISMJ4GxfeA0b5f1i5P24XCY0Awnuwq5WQ2xXYbv',
  access_token_key: '1081331835030945793-AA1c4QGKzgWlUil5PmLlzrWyIYxO2f',
  access_token_secret: 'iZX9zmS5etAFskPdBCFfgDLfDfe5th1SOZbcsEyhSd9d3'
};

module.exports = function(text, callback) {
  var twitterClient = new twitter(config);  
  var response = [], dbData = []; // to store the tweets and sentiment

  twitterClient.get('search/tweets', {q: text}, function(error, tweets, response) {
    console.log(tweets);
    // db.sentiments.save(dbData);
    // callback(response);
  });
}