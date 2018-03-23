var os = require('os');

function getTime () {
var uptime = os.uptime();
    hours,
    min,
    sec;
	
var hours = (uptime / 36000).toFixed(0),
    min = ((uptime % 3600) / 600).toFixed(0),
    sec = ((uptime % 3600) % 60).toFixed(0);

console.log('Uptime: ', hours, 'hours', min, 'min', sec, 'sec')
}

//getTime();

exports.print = getTime;
