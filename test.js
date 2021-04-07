import test from 'ava';
import userAgentString from './index.js';

test('main', t => {
	t.is(typeof userAgentString, 'string');
	t.true(userAgentString.includes('Chrome'));
});
