import { constants } from './constants';

/**
 * Checks if a number is in range [a, b] (inclusively).
 *
 * @param n - The number to check.
 * @param a - Lower bound.
 * @param b - Upper bound.
 * @returns true if the number is in the given range, false if not.
 */
export function between(n: number, a: number, b: number): boolean {
  return n >= a && n <= b;
}

/**
 * Checks if a value is valid byte value.
 *
 * @param n - The number to check.
 * @returns true if the number is a valid byte value, false if not.
 */
export function validByte(n: number): boolean {
  return between(n, constants.BYTE_MIN, constants.BYTE_MAX_U);
}

/**
 * Checks if a value is valid half value.
 *
 * @param n - The number to check.
 * @returns true if the number is a valid half value, false if not.
 */
export function validHalf(n: number): boolean {
  return between(n, constants.HALF_MIN, constants.HALF_MAX_U);
}

/**
 * Checks if a value is valid word value.
 *
 * @param n - The number to check.
 * @returns true if the number is a valid word value, false if not.
 */
export function validWord(n: number): boolean {
  return between(n, constants.WORD_MIN, constants.WORD_MAX_U);
}

/**
 * Verifies if a value is aligned to a word boundary.
 *
 * @param n - Value to verify.
 * @returns true if the value is word aligned, false otherwise.
 */
export function isWordAlign(n: number): boolean {
  return asUWord(n) % constants.WORD_SIZE === 0;
}

/**
 * Aligns a value to a word boundary if necessary.
 *
 * @param n - Value to align.
 * @returns Value aligned to a word boundary.
 */
export function wordAlign(n: number): number {
  if (isWordAlign(n)) return n;
  return n + (constants.WORD_SIZE - (asUWord(n) % constants.WORD_SIZE));
}

/**
 * Sign-extends a value of N bits.
 *
 * @param n    - Number to sign-extend
 * @param bits - Number of bits the given number has.
 * @returns The sign-extended value.
 */
export function signExtend(n: number, bits: number): number {
  const shamt = constants.WORD_BITS - Math.max(0, Math.min(bits, constants.WORD_BITS));
  const dv = new DataView(new ArrayBuffer(4), 0);
  dv.setUint32(0, (n << shamt) >> shamt);
  return dv.getInt32(0);
}

/**
 * Sign-extends a byte value.
 *
 * @param n - Byte to sign-extend
 * @returns The sign-extended value of the given byte.
 */
export function signExtendByte(n: number): number {
  return signExtend(n, constants.BYTE_BITS);
}

/**
 * Sign-extends a half value.
 *
 * @param n - Half to sign-extend
 * @returns The sign-extended value of the given half.
 */
export function signExtendHalf(n: number): number {
  return signExtend(n, constants.HALF_BITS);
}

/**
 * Converts a number to a signed word value.
 *
 * @param n - Number to convert.
 * @returns Signed word value.
 */
export function asWord(n: number): number {
  const dv = new DataView(new ArrayBuffer(4), 0);
  dv.setUint32(0, n);
  return dv.getInt32(0);
}

/**
 * Converts a number to a unsigned word value.
 *
 * @param n - Number to convert.
 * @returns Unsigned word value.
 */
export function asUWord(n: number): number {
  const dv = new DataView(new ArrayBuffer(4), 0);
  dv.setUint32(0, n);
  return dv.getUint32(0);
}

/**
 * Converts a number to a signed half value.
 *
 * @param n - Number to convert.
 * @returns Signed half value.
 */
export function asHalf(n: number): number {
  const dv = new DataView(new ArrayBuffer(2), 0);
  dv.setUint16(0, n);
  return dv.getInt16(0);
}

/**
 * Converts a number to a unsigned half value.
 *
 * @param n - Number to convert.
 * @returns Unsigned half value.
 */
export function asUHalf(n: number): number {
  const dv = new DataView(new ArrayBuffer(2), 0);
  dv.setUint16(0, n);
  return dv.getUint16(0);
}

/**
 * Converts a number to a signed byte value.
 *
 * @param n - Number to convert.
 * @returns Signed byte value.
 */
export function asByte(n: number): number {
  const dv = new DataView(new ArrayBuffer(1), 0);
  dv.setUint8(0, n);
  return dv.getInt8(0);
}

/**
 * Converts a number to a unsigned byte value.
 *
 * @param n - Number to convert.
 * @returns Unsigned byte value.
 */
export function asUByte(n: number): number {
  const dv = new DataView(new ArrayBuffer(1), 0);
  dv.setUint8(0, n);
  return dv.getUint8(0);
}

/**
 * Converts to a float value the given IEEE-754 bit pattern.
 *
 * @param bits - IEEE-754 bit pattern.
 * @returns Float value corresponding to a given IEEE-754 bit representation.
 */
export function bitsToFloat(bits: number): number {
  const dv = new DataView(new ArrayBuffer(4), 0);
  dv.setUint32(0, bits);
  return dv.getFloat32(0);
}

/**
 * Gets the IEEE-754 bit pattern corresponding to a given floating-point value.
 *
 * @param n - Floating point value to convert.
 * @returns IEEE-754 bit pattern corresponding to a given floating-point value.
 */
export function floatToBits(n: number): number {
  const dv = new DataView(new ArrayBuffer(4), 0);
  dv.setFloat32(0, n);
  return dv.getUint32(0);
}

/**
 * Converts a string to an integer number.
 *
 * @param n - String to convert.
 * @returns Converted string to number.
 * @throws Error if the given string is invalid.
 */
export function atoi(n: string): number {
  if (n.toLowerCase().startsWith('0b') && n.length > 34) throw new Error(`invalid integer constant ${n}, 32 bits only`);
  if (n.toLowerCase().startsWith('0x') && n.length > 10) throw new Error(`invalid integer constant ${n}, 32 bits only`);
  let num = 0;
  if (n.toLowerCase().startsWith('0b')) {
    num = parseInt(n.substring(2), 2);
  } else if (n.toLowerCase().startsWith('0x')) {
    num = parseInt(n, 16);
  } else if (n.startsWith("'")) {
    const ascii = cleanEscapes(n.substring(1, n.length - 1));
    if (ascii.length > 1) throw new Error(`invalid char constant ${n}`);
    num = ascii.charCodeAt(0);
  } else {
    num = parseInt(n);
  }
  if (isNaN(num)) throw new Error(`invalid integer constant ${n}, not a number`);
  if (!validWord(num)) throw new Error(`invalid integer constant ${n}, 32 bits only`);
  return asWord(num);
}

/**
 * Converts a string to a float number.
 *
 * @param n - String to convert.
 * @returns Converted string to number or NaN if the parameter is invalid.
 * @throws Error if the given string is invalid.
 */
export function atof(n: string): number {
  const dv = new DataView(new ArrayBuffer(4), 0);
  let literal = false;
  if (n.toLowerCase().startsWith('0b') && n.length > 34) throw new Error(`invalid IEEE754 constant ${n}, 32 bits only`);
  if (n.toLowerCase().startsWith('0x') && n.length > 10) throw new Error(`invalid IEEE754 constant ${n}, 32 bits only`);
  if (n.toLowerCase().startsWith('0b')) {
    literal = true;
    dv.setUint32(0, parseInt(n.substring(2), 2));
  } else if (n.toLowerCase().startsWith('0x')) {
    literal = true;
    dv.setUint32(0, parseInt(n, 16));
  } else {
    dv.setFloat32(0, parseFloat(n.trim().replace('inf', 'Infinity')));
  }
  const result = dv.getFloat32(0);
  if (isNaN(result) && !(n.toLowerCase() === 'nan' || literal)) throw Error(`invalid float constant ${n}`);
  return result;
}

/**
 * Converts escaped values in the given string to real characters.
 *
 * @param s - String to clean.
 * @returns A string without escaped values.
 */
export function cleanEscapes(s: string): string {
  let result = '';
  let escape = false;
  for (let i = 0; i < s.length; i++) {
    if (!escape && s[i] === '\\') {
      escape = true;
    } else if (!escape) {
      result += s[i];
    } else {
      switch (s[i]) {
        case '0':
          result += '\0';
          break;
        case 'n':
          result += '\n';
          break;
        case 't':
          result += '\t';
          break;
        case 'b':
          result += '\b';
          break;
        case 'r':
          result += '\r';
          break;
        default:
          result += s[i];
          break;
      }
    }
  }
  return result;
}

/**
 * Gets the number that represents a register name.
 *
 * @param name - Register name.
 * @returns The register number that represents the given name.
 * @throws an Error if the given register name is invalid.
 */
export function getRegisterNumber(name: string): number {
  switch (name.toLowerCase()) {
    case 'x0':
    case 'zero':
    case 'f0':
    case 'ft0':
      return 0;
    case 'x1':
    case 'ra':
    case 'f1':
    case 'ft1':
      return 1;
    case 'x2':
    case 'sp':
    case 'f2':
    case 'ft2':
      return 2;
    case 'x3':
    case 'gp':
    case 'f3':
    case 'ft3':
      return 3;
    case 'x4':
    case 'tp':
    case 'f4':
    case 'ft4':
      return 4;
    case 'x5':
    case 't0':
    case 'f5':
    case 'ft5':
      return 5;
    case 'x6':
    case 't1':
    case 'f6':
    case 'ft6':
      return 6;
    case 'x7':
    case 't2':
    case 'f7':
    case 'ft7':
      return 7;
    case 'x8':
    case 's0':
    case 'fp':
    case 'f8':
    case 'fs0':
      return 8;
    case 'x9':
    case 's1':
    case 'f9':
    case 'fs1':
      return 9;
    case 'x10':
    case 'a0':
    case 'f10':
    case 'fa0':
      return 10;
    case 'x11':
    case 'a1':
    case 'f11':
    case 'fa1':
      return 11;
    case 'x12':
    case 'a2':
    case 'f12':
    case 'fa2':
      return 12;
    case 'x13':
    case 'a3':
    case 'f13':
    case 'fa3':
      return 13;
    case 'x14':
    case 'a4':
    case 'f14':
    case 'fa4':
      return 14;
    case 'x15':
    case 'a5':
    case 'f15':
    case 'fa5':
      return 15;
    case 'x16':
    case 'a6':
    case 'f16':
    case 'fa6':
      return 16;
    case 'x17':
    case 'a7':
    case 'f17':
    case 'fa7':
      return 17;
    case 'x18':
    case 's2':
    case 'f18':
    case 'fs2':
      return 18;
    case 'x19':
    case 's3':
    case 'f19':
    case 'fs3':
      return 19;
    case 'x20':
    case 's4':
    case 'f20':
    case 'fs4':
      return 20;
    case 'x21':
    case 's5':
    case 'f21':
    case 'fs5':
      return 21;
    case 'x22':
    case 's6':
    case 'f22':
    case 'fs6':
      return 22;
    case 'x23':
    case 's7':
    case 'f23':
    case 'fs7':
      return 23;
    case 'x24':
    case 's8':
    case 'f24':
    case 'fs8':
      return 24;
    case 'x25':
    case 's9':
    case 'f25':
    case 'fs9':
      return 25;
    case 'x26':
    case 's10':
    case 'f26':
    case 'fs10':
      return 26;
    case 'x27':
    case 's11':
    case 'f27':
    case 'fs11':
      return 27;
    case 'x28':
    case 't3':
    case 'f28':
    case 'ft8':
      return 28;
    case 'x29':
    case 't4':
    case 'f29':
    case 'ft9':
      return 29;
    case 'x30':
    case 't5':
    case 'f30':
    case 'ft10':
      return 30;
    case 'x31':
    case 't6':
    case 'f31':
    case 'ft11':
      return 31;
    default:
      throw new Error(`invalid register name: '${name}'`);
  }
}
