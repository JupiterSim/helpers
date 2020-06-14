import chai from 'chai';
import { atof, atoi, bitsToFloat, floatToBits } from '../src';

describe('atof', () => {
  // hex
  it(`atof('0x4047e7a0') should be close to 3.12351226806640625`, () => {
    chai.expect(atof('0x4047e7a0')).to.be.closeTo(3.12351226806640625, 1e-30);
  });
  it(`atof('0X41aa0287') should be close to 21.2512340545654296875`, () => {
    chai.expect(atof('0X41aa0287')).to.be.closeTo(21.2512340545654296875, 1e-30);
  });
  it(`atof('0xff800000') should be -Infinity`, () => {
    chai.expect(atof('0xff800000')).to.eq(-Infinity);
  });
  it(`atof('0x7f800000') should be Infinity`, () => {
    chai.expect(atof('0x7f800000')).to.eq(Infinity);
  });
  it(`atof('0x7fffffff') should be NaN`, () => {
    chai.expect(atof('0x7fffffff')).to.NaN;
  });
  it(`atof('0x7fc00000') should be NaN`, () => {
    chai.expect(atof('0x7fc00000')).to.NaN;
  });
  it(`atof('0xfffffffff') should throw Error`, () => {
    chai.expect(() => atof('0xfffffffff')).to.throw(Error);
  });
  // binary
  it(`atof('0b01000000010001111110011110100000') should be close to 3.12351226806640625`, () => {
    chai.expect(atof('0b01000000010001111110011110100000')).to.be.closeTo(3.12351226806640625, 1e-30);
  });
  it(`atof('0B01000001101010100000001010000111') should be close to 21.2512340545654296875`, () => {
    chai.expect(atof('0B01000001101010100000001010000111')).to.be.closeTo(21.2512340545654296875, 1e-30);
  });
  it(`atof('0b11111111100000000000000000000000') should be -Infinity`, () => {
    chai.expect(atof('0b11111111100000000000000000000000')).to.eq(-Infinity);
  });
  it(`atof('0b01111111100000000000000000000000') should be Infinity`, () => {
    chai.expect(atof('0b01111111100000000000000000000000')).to.eq(Infinity);
  });
  it(`atof('0b01111111110000000000000000000000') should be NaN`, () => {
    chai.expect(atof('0b01111111110000000000000000000000')).to.NaN;
  });
  it(`atof('0b01111111111111111111111111111111') should be NaN`, () => {
    chai.expect(atof('0b01111111111111111111111111111111')).to.NaN;
  });
  it(`atof('0b011111111111111111111111111111111') should throw Error`, () => {
    chai.expect(() => atof('0b011111111111111111111111111111111')).to.throw(Error);
  });
  // float
  it(`atof('3.12351226806640625') should be close to 3.12351226806640625`, () => {
    chai.expect(atof('3.12351226806640625')).to.be.closeTo(3.12351226806640625, 1e-30);
  });
  it(`atof('21.2512340545654296875') should be close to 21.2512340545654296875`, () => {
    chai.expect(atof('21.2512340545654296875')).to.be.closeTo(21.2512340545654296875, 1e-30);
  });
  it(`atof('2E-19') should be close to 1.9999999365310450E-19`, () => {
    chai.expect(atof('2E-19')).to.be.closeTo(21.999999936531045e-19, 1e-17);
  });
  it(`atof('-11.2345E19') should be close to -112345001901407862784`, () => {
    chai.expect(atof('-11.2345E19')).to.be.closeTo(-112345001901407862784, 1e-30);
  });
  it(`atof('0.0') should be 0.0`, () => {
    chai.expect(atof('0')).to.eq(0.0);
  });
  it(`atof('-0.0') should be -0.0`, () => {
    chai.expect(atof('0')).to.eq(-0.0);
  });
  it(`atof('inf') should be Infinity`, () => {
    chai.expect(atof('inf')).to.eq(Infinity);
  });
  it(`atof('-inf') should be -Infinity`, () => {
    chai.expect(atof('-inf')).to.eq(-Infinity);
  });
  it(`atof('Infinity') should be Infinity`, () => {
    chai.expect(atof('Infinity')).to.eq(Infinity);
  });
  it(`atof('-Infinity') should be -Infinity`, () => {
    chai.expect(atof('-Infinity')).to.eq(-Infinity);
  });
  it(`atof('nan') should be NaN`, () => {
    chai.expect(atof('nan')).to.be.NaN;
  });
  it(`atof('NaN') should be NaN`, () => {
    chai.expect(atof('NaN')).to.be.NaN;
  });
  it(`atof('hi') should throw Error`, () => {
    chai.expect(() => atof('hi')).to.throw(Error);
  });
});

describe('atoi', () => {
  // hex
  it(`atoi('0x80000000') should be -2147483648`, () => {
    chai.expect(atoi('0x80000000')).to.eq(-2147483648);
  });
  it(`atoi('0X3') should be 3`, () => {
    chai.expect(atoi('0X3')).to.eq(3);
  });
  it(`atoi('0xdead') should be 57005`, () => {
    chai.expect(atoi('0xdead')).to.eq(57005);
  });
  it(`atoi('0x100000000') should throw Error`, () => {
    chai.expect(() => atoi('0x100000000')).to.throw(Error);
  });
  // binary
  it(`atoi('0b10000000000000000000000000000000') should be -2147483648`, () => {
    chai.expect(atoi('0b10000000000000000000000000000000')).to.eq(-2147483648);
  });
  it(`atoi('0B1111') should be 15`, () => {
    chai.expect(atoi('0B1111')).to.eq(15);
  });
  it(`atoi('0b0') should be 0`, () => {
    chai.expect(atoi('0b0')).to.eq(0);
  });
  it(`atoi('0b100000000000000000000000000000001') should throw Error`, () => {
    chai.expect(() => atoi('0b100000000000000000000000000000001')).to.throw(Error);
  });
  // decimal
  it(`atoi('-2147483648') should be -2147483648`, () => {
    chai.expect(atoi('-2147483648')).to.eq(-2147483648);
  });
  it(`atoi('123512') should be 123512`, () => {
    chai.expect(atoi('123512')).to.eq(123512);
  });
  it(`atoi('12') should be 12`, () => {
    chai.expect(atoi('12')).to.eq(12);
  });
  it(`atoi('-12') should be -12`, () => {
    chai.expect(atoi('-12')).to.eq(-12);
  });
  it(`atoi('-2147483649') should throw Error`, () => {
    chai.expect(() => atoi('-2147483649')).to.throw(Error);
  });
  it(`atoi('hi') should throw Error`, () => {
    chai.expect(() => atoi('hi')).to.throw(Error);
  });
  it(`atoi('4294967296') should throw Error`, () => {
    chai.expect(() => atoi('4294967296')).to.throw(Error);
  });
  it(`atoi('-2147412383649') should throw Error`, () => {
    chai.expect(() => atoi('-2147412383649')).to.throw(Error);
  });
  it(`atoi('4294912367296') should throw Error`, () => {
    chai.expect(() => atoi('4294912367296')).to.throw(Error);
  });
  it(`atoi('NaN') should throw Error`, () => {
    chai.expect(() => atoi('NaN')).to.throw(Error);
  });
  // ascii
  it(`atoi("'a'") should be 97`, () => {
    chai.expect(atoi("'a'")).to.eq(97);
  });
  it(`atoi("'\\n'") should be 10`, () => {
    chai.expect(atoi("'\\n'")).to.eq(10);
  });
  it(`atoi("'\n'") should be 10`, () => {
    chai.expect(atoi("'\n'")).to.eq(10);
  });
  it(`atoi("'ab'") should throw Error`, () => {
    chai.expect(() => atoi("'ab'")).to.throw(Error);
  });
});

describe('bitsToFloat', () => {
  it(`bitsToFloat(0x3f9df3b6) should be close to 1.2339999675750732421875`, () => {
    chai.expect(bitsToFloat(0x3f9df3b6)).to.be.closeTo(1.2339999675750732421875, 1e-30);
  });
  it(`bitsToFloat(0x339df1b6) should be close to 7.35484917413486982695758342742919921875E-8`, () => {
    chai.expect(bitsToFloat(0x339df1b6)).to.be.closeTo(7.35484917413486982695758342742919921875e-8, 1e-30);
  });
  it(`bitsToFloat(0xc3fdf1b6) should be close to -507.88836669921875`, () => {
    chai.expect(bitsToFloat(0xc3fdf1b6)).to.be.closeTo(-507.88836669921875, 1e-18);
  });
  it(`bitsToFloat(0x7fa00000) should be NaN`, () => {
    chai.expect(bitsToFloat(0x7fa00000)).to.be.NaN;
  });
  it(`bitsToFloat(0x7f800000) should be Infinity`, () => {
    chai.expect(bitsToFloat(0x7f800000)).to.eq(Infinity);
  });
  it(`bitsToFloat(0xff800000) should be -Infinity`, () => {
    chai.expect(bitsToFloat(0xff800000)).to.eq(-Infinity);
  });
});

describe('#floatToBits', () => {
  it('floatToBits(1.2339999675750732421875) should be 0x3f9df3b6', () => {
    chai.expect(floatToBits(1.2339999675750732421875)).to.eq(0x3f9df3b6);
  });
  it('floatToBits(7.35484917413486982695758342742919921875E-8) should be 0x339df1b6', () => {
    chai.expect(floatToBits(7.35484917413486982695758342742919921875e-8)).to.eq(0x339df1b6);
  });
  it('floatToBits(-507.88836669921875) should be 0xc3fdf1b6', () => {
    chai.expect(floatToBits(-507.88836669921875)).to.eq(0xc3fdf1b6);
  });
  it('floatToBits(NaN) should be 0x7fc00000', () => {
    chai.expect(floatToBits(NaN)).to.eq(0x7fc00000);
  });
  it('floatToBits(Infinity) should be 0x7f800000', () => {
    chai.expect(floatToBits(Infinity)).to.eq(0x7f800000);
  });
  it('floatToBits(-Infinity) should be 0xff800000', () => {
    chai.expect(floatToBits(-Infinity)).to.eq(0xff800000);
  });
});
