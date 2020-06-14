import chai from 'chai';
import { signExtend, signExtendByte, signExtendHalf } from '../src';

describe('signExtend', () => {
  it('signExtend(1, 1) should be -1', () => {
    chai.expect(signExtend(1, 1)).to.eq(-1);
  });
  it('signExtend(1, 2) should be 1', () => {
    chai.expect(signExtend(1, 2)).to.eq(1);
  });
});

describe('signExtendByte', () => {
  it('signExtendByte(0xf) should be 0xf', () => {
    chai.expect(signExtendByte(0xf)).to.eq(0xf);
  });
  it('signExtendByte(0x8f) should be -113', () => {
    chai.expect(signExtendByte(0x8f)).to.eq(-113);
  });
});

describe('signExtendHalf', () => {
  it('signExtendHalf(0xfff) should be 0xfff', () => {
    chai.expect(signExtendHalf(0xfff)).to.eq(0xfff);
  });
  it('signExtendHalf(32767) should be 32767', () => {
    chai.expect(signExtendHalf(32767)).to.eq(32767);
  });
  it('signExtendHalf(0xffff) should be -1', () => {
    chai.expect(signExtendHalf(0xffff)).to.eq(-1);
  });
});
