import assign from 'lodash.assign';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import System from 'jspm';
import { beforeEach, afterEach } from 'mocha';

chai.use(sinonChai);

assign((global || window), {
  chai, System,
  expect: chai.expect,
});

beforeEach(() => {
  (global || window).sandbox = sinon.sandbox.create();
});

afterEach(() => {
  (global || window).sandbox.restore();
});
