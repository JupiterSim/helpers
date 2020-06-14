import chai from 'chai';

import { between, validByte, validHalf, validWord, isWordAlign, constants } from '../src';

describe('between', () => {
  const nums = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
  nums.forEach((e) => {
    it(`between(${e}, -4, 4) should be true`, () => {
      chai.expect(between(e, -4, 4)).to.be.true;
    });
  });
  it('between(-5, -4, 4) should be false', () => {
    chai.expect(between(-5, -4, 4)).to.be.false;
  });
  it('between(5, -4, 4) should be false', () => {
    chai.expect(between(5, -4, 4)).to.be.false;
  });
});

describe('validByte', () => {
  it('validByte(0) should be true', () => {
    chai.expect(validByte(0)).to.be.true;
  });
  it('validByte(255) should be true', () => {
    chai.expect(validByte(255)).to.be.true;
  });
  it('validByte(-128) should be true', () => {
    chai.expect(validByte(-128)).to.be.true;
  });
  it('validByte(25) should be true', () => {
    chai.expect(validByte(25)).to.be.true;
  });
  it('validByte(-129) should be false', () => {
    chai.expect(validByte(-129)).to.be.false;
  });
  it('validByte(256) should be false', () => {
    chai.expect(validByte(256)).to.be.false;
  });
});

describe('validHalf', () => {
  it('validHalf(0) should be true', () => {
    chai.expect(validHalf(0)).to.be.true;
  });
  it('validHalf(65535) should be true', () => {
    chai.expect(validHalf(65535)).to.be.true;
  });
  it('validHalf(-32768) should be true', () => {
    chai.expect(validHalf(-32768)).to.be.true;
  });
  it('validHalf(23512) should be true', () => {
    chai.expect(validHalf(23512)).to.be.true;
  });
  it('validHalf(-32769) should be false', () => {
    chai.expect(validHalf(-32769)).to.be.false;
  });
  it('validHalf(65536) should be false', () => {
    chai.expect(validHalf(65536)).to.be.false;
  });
});

describe('validWord', () => {
  it('validWord(0) should be true', () => {
    chai.expect(validWord(0)).to.be.true;
  });
  it('validWord(4294967295) should be true', () => {
    chai.expect(validWord(4294967295)).to.be.true;
  });
  it('validWord(-2147483648) should be true', () => {
    chai.expect(validWord(-2147483648)).to.be.true;
  });
  it('validWord(12351254) should be true', () => {
    chai.expect(validWord(12351254)).to.be.true;
  });
  it('validWord(-2147483649) should be false', () => {
    chai.expect(validWord(-2147483649)).to.be.false;
  });
  it('validWord(4294967296) should be false', () => {
    chai.expect(validWord(4294967296)).to.be.false;
  });
});

describe('isWordAlign', () => {
  it('isWordAlign(0x100) should be true', () => {
    chai.expect(isWordAlign(0x100)).to.be.true;
  });
  it('isWordAlign(0x101) should be false', () => {
    chai.expect(isWordAlign(0x101)).to.be.false;
  });
  it('isWordAlign(WORD_SIZE * 512) should be true', () => {
    chai.expect(isWordAlign(constants.WORD_SIZE * 512)).to.be.true;
  });
});
