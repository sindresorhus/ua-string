import test from 'ava';
import m from './';

test(t => {
	t.is(typeof m, 'string');
	t.true(m.includes('Chrome'));
});
