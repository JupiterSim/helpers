import chai from 'chai';
import { wordAlign } from '../src';

describe('wordAlign', () => {
  it('wordAlign(0x100) should be 0x100', () => {
    chai.expect(wordAlign(0x100)).to.be.equal(0x100);
  });
  it('wordAlign(0x101) should be 0x104', () => {
    chai.expect(wordAlign(0x101)).to.be.equal(0x104);
  });
  it('wordAlign(0x102) should be 0x104', () => {
    chai.expect(wordAlign(0x102)).to.be.equal(0x104);
  });
  it('wordAlign(0x103) should be 0x104', () => {
    chai.expect(wordAlign(0x103)).to.be.equal(0x104);
  });
  it('wordAlign(0x104) should be 0x104', () => {
    chai.expect(wordAlign(0x104)).to.be.equal(0x104);
  });
});
