import test from 'ava';
import uaString from '.';

test('main', t => {
	t.is(typeof uaString, 'string');
	t.true(uaString.includes('Chrome'));
});
