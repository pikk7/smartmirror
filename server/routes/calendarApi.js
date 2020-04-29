var express = require("express");
var router = express.Router();
const ical = require("ical");
router.get("/", function(req, res, next) {
  const CALNDAR_ENDPOINT = process.env.CALNDAR_LINK;

  let dataToSend = [];
  ical.fromURL(CALNDAR_ENDPOINT, {}, function(err, data) {
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        var ev = data[k];
        if (data[k].type == "VEVENT") {
          //console.log(`${ev.summary} is in ${ev.location} on the ${ev.start.getDate()} of ${ev.start.getFullYear()} ${months[ev.start.getMonth()]} at ${ev.start.toLocaleTimeString('hu-HU')}`);
          dataToSend.push(ev);
        }
      }
    }
    if (err) {
      console.log("calndar api error");
      next(err); // Pass errors to Express.
    } else {
      res.send(dataToSend);
    }
  });
});

module.exports = router;
