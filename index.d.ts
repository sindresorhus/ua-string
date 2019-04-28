/**
Get the [user agent](https://en.wikipedia.org/wiki/User_agent) of a recent Chrome version to pretend to be a browser in network requests.

@example
```
import got = require('got');
import uaString = require('ua-string');

got('sindresorhus.com', {
	headers: {
		'user-agent': uaString
	}
});
```
*/
declare const uaString: string;

export = uaString;
