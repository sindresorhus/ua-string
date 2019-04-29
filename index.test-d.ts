import {expectType} from 'tsd';
import userAgentString = require('.');

expectType<string>(userAgentString);
