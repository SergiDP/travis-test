

var expect = require('chai').expect;
var hello = require('../src/hello');
var sinon = require('sinon');
var holaSergi = sinon.mock(hello).expects('holaSergi').once();

hello.holaSergi();
describe('byee', function () {
    it('should return adios mundo', function () {
        expect(hello.bye()).to.equal("Adios mundo");
    });
});

describe('holaSergi', function () {
    holaSergi.verify();
});

