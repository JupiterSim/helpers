import chai from 'chai';
import { asWord, asUWord, asHalf, asUHalf, asByte, asUByte } from '../src';

describe('asWord', () => {
  it('asWord(10) should be 10', () => {
    chai.expect(asWord(10)).to.eq(10);
  });
  it('asWord(-2147483648) should be -2147483648', () => {
    chai.expect(asWord(-2147483648)).to.eq(-2147483648);
  });
  it('asWord(2147483647) should be 2147483647', () => {
    chai.expect(asWord(2147483647)).to.eq(2147483647);
  });
  it('asWord(2147483647 + 1) should be -2147483648', () => {
    chai.expect(asWord(2147483647 + 1)).to.eq(-2147483648);
  });
  it('asWord(-2147483648 - 1) should be 2147483647', () => {
    chai.expect(asWord(-2147483648 - 1)).to.eq(2147483647);
  });
});

describe('asUWord', () => {
  it('asUWord(10) should be 10', () => {
    chai.expect(asUWord(10)).to.eq(10);
  });
  it('asUWord(-2) should be 4294967294', () => {
    chai.expect(asUWord(-2)).to.eq(4294967294);
  });
  it('asUWord(2147483647) should be 2147483647', () => {
    chai.expect(asUWord(2147483647)).to.eq(2147483647);
  });
  it('asUWord(-2147483648) should be 2147483648', () => {
    chai.expect(asUWord(-2147483648)).to.eq(2147483648);
  });
});

describe('asHalf', () => {
  it('asHalf(10) should be 10', () => {
    chai.expect(asHalf(10)).to.eq(10);
  });
  it('asHalf(-32768) should be -32768', () => {
    chai.expect(asHalf(-32768)).to.eq(-32768);
  });
  it('asHalf(32767) should be 32767', () => {
    chai.expect(asHalf(32767)).to.eq(32767);
  });
  it('asHalf(32767 + 1) should be -32768', () => {
    chai.expect(asHalf(32767 + 1)).to.eq(-32768);
  });
  it('asHalf(-32768 - 1) should be 32767', () => {
    chai.expect(asHalf(-32768 - 1)).to.eq(32767);
  });
});

describe('asUHalf', () => {
  it('asUHalf(10) should be 10', () => {
    chai.expect(asUHalf(10)).to.eq(10);
  });
  it('asUHalf(-2) should be 65534', () => {
    chai.expect(asUHalf(-2)).to.eq(65534);
  });
  it('asUHalf(32767) should be 32767', () => {
    chai.expect(asUHalf(32767)).to.eq(32767);
  });
  it('asUHalf(-32768) should be 32768', () => {
    chai.expect(asUHalf(32768)).to.eq(32768);
  });
});

describe('asByte', () => {
  it('asByte(10) should be 10', () => {
    chai.expect(asByte(10)).to.eq(10);
  });
  it('asByte(-128) should be -128', () => {
    chai.expect(asByte(-128)).to.eq(-128);
  });
  it('asByte(127) should be 127', () => {
    chai.expect(asByte(127)).to.eq(127);
  });
  it('asByte(127 + 1) should be -128', () => {
    chai.expect(asByte(127 + 1)).to.eq(-128);
  });
  it('asByte(-128 - 1) should be 127', () => {
    chai.expect(asByte(-128 - 1)).to.eq(127);
  });
});

describe('asUByte', () => {
  it('asUByte(10) should be 10', () => {
    chai.expect(asUByte(10)).to.eq(10);
  });
  it('asUByte(-2) should be 254', () => {
    chai.expect(asUByte(-2)).to.eq(254);
  });
  it('asUByte(127) should be 127', () => {
    chai.expect(asUByte(127)).to.eq(127);
  });
  it('asUByte(-128) should be 128', () => {
    chai.expect(asUByte(128)).to.eq(128);
  });
});
