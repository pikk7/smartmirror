var express = require("express");
var router = express.Router();
const https = require("https");

router.get("/", function(req, res, next) {
   
let id="F03804"
const date = new Date().getHours() <7 ? "night" : "day";
if(date==="day"){
   id="F03878"
}
let ApiEndpoint = "https://futar.bkk.hu/api/query/v1/ws/otp/api/where/arrivals-and-departures-for-stop.json?key=apaiary-test&version=3&appVersion=apiary-1.0&includeReferences=true&stopId=BKK_"+id+"&onlyDepartures=false&limit=60&minutesBefore=2&minutesAfter=30";

https.get(ApiEndpoint, res2 => {
  res2.setEncoding("utf8");
  let body = "";
  res2.on("data", data => {
    body += data;
  });
  res2.on("end", () => {
    body = JSON.parse(body);
    res.send(body);

  });
})
});

module.exports = router;