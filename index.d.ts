/**
Get the [user agent](https://en.wikipedia.org/wiki/User_agent) of a recent Chrome version to pretend to be a browser in network requests.

@example
```
import got from 'got';
import userAgentString from 'ua-string';

await got('https://sindresorhus.com', {
	headers: {
		'user-agent': userAgentString
	}
});
```
*/
declare const userAgentString: string;

export default userAgentString;
