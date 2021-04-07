# ua-string

> Get the [user agent](https://en.wikipedia.org/wiki/User_agent) of a recent Chrome version to pretend to be a browser in network requests

Some sites and services block non-browser requests or respond differently.

*I will update this module once in a while with the latest user agent.*

## Install

```
$ npm install ua-string
```

## Usage

```js
import got from 'got';
import userAgentString from 'ua-string';

await got('https://sindresorhus.com', {
	headers: {
		'user-agent': userAgentString
	}
});
```
