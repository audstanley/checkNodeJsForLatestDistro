# checkNodeJsForLatestDistro
This will query nodeJs's Distribution page and check for integer updates from this URL: https://nodejs.org/dist/

if a new integer update exists, then a pushOver notification will be sent to the added API account.
To install:

```sh
git clone https://github.com/audstanley/checkNodeJsForLatestDistro;
cd checkNodeJsForLatestDistro;
npm install;
```

Edit app.js and change the pushover API user tokens and app tokens to your own.
These variables:
```js
let p = new push({
	user: "AAAAAAAAAAAAAAAAAAAAAAAAAA",	//change the user API key
	token: "BBBBBBBBBBBBBBBBBBBBBBBBBB",	//and the token API key
})
```

Then 

```sh
node app.js
```
