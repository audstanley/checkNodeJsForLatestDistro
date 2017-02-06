let schedule = require('node-schedule');
let fetch = require('node-fetch');
let push = require('pushover-notifications');

let regex = /<a href="latest-v(\d{1,})/;
let version = "";
let p = new push({
	user: "AAAAAAAAAAAAAAAAAAAAAAAAAA",	//user API key
	token: "BBBBBBBBBBBBBBBBBBBBBBBBBB",	//token API key
})

let job = schedule.scheduleJob('0 */10 * * * *', function() {
	console.log("this should be every ten minutes");
	fetch('https://nodejs.org/dist').then(function(res) {
		return res.text();
	}).then(function(body) {
		let a = body.split("\n").filter(getLatest).reverse()[0].match(regex)[1];
		let msg = {
			message: 'NodeJs has been updated to version: ' + a,
			title: 'NodeJs Update'
		}
		if(version === "")  {
			console.log("version check: " + a);
			version = a;
		}
		else if(a !== version) {
			p.send(msg, function(err, result) {if(err) throw err; console.log(result);})
		}
	})


})


let getLatest = (str) => {
	return str.match(regex);
}
