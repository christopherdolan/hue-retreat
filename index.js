var Hue = require('philips-hue');
var hue = new Hue();
var diz = 0;

var configFile = process.env.HOME + '/.philips-hue.json';

setInterval(function(){
  diz = (diz + 1000)%65535;
  hue.login(configFile).then(function(conf) {
    var state = {
      on: true,
      bri: 240,
      hue: diz,
      sat: 200
    };
      console.log(state);
      hue.light(1).setState(state).then(console.log);
  }).catch(function(err){
    console.error(err.stack || err);
  });
},200);
