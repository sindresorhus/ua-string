import test from 'ava';
import usString from '.';

test('main', t => {
	t.is(typeof usString, 'string');
	t.true(usString.includes('Chrome'));
});
