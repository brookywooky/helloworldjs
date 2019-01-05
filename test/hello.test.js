const expect = require('chai').expect;

const hello = require('../src/hello');

describe('Test the function sayHello', () => {
  it(`should return 'Hello, World!'`, done => {
    expect(hello.sayHello()).to.eql('Hello, World!');
    done();
  });
});
