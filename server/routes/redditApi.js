var express = require('express');
var router = express.Router();
const Snoocore = require("snoocore");


const POST_LIMIT = 6;

/* GET users listing. */
router.get('/', function(req, res, next) {
    const redditConfig= {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36', // unique string identifying the app
            oauth: {
                type: 'script',
                key: process.env.REDDIT_KEY, // OAuth client key (provided at reddit app)
                secret: process.env.REDDIT_SECRET, // OAuth secret (provided at reddit app)
                username: process.env.REDDIT_USR, // Reddit username used to make the reddit app
                password: process.env.REDDIT_PSW, // Reddit password for the username
                // The OAuth scopes that we need to make the calls that we
                // want. The reddit documentation will specify which scope
                // is needed for evey call
                scope: [ 'identity', 'read', 'vote' ]
            }
        };
    subReddit = "worldnews";
    let reddit = new Snoocore(redditConfig);
    // get information from the requested subreddit
    reddit(`/r/${subReddit}/hot`)
      .get({ limit: POST_LIMIT })
      .then(results => res.send(results) )
      .catch(error => {
          console.log("reddit api error")
        next(error) // Pass errors to Express.

      });
  
});

module.exports = router;
