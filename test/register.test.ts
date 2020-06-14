import chai from 'chai';
import { getRegisterNumber } from '../src';

describe('getRegisterNumber', () => {
  const names = [
    {
      names: ['x0', 'zero', 'f0', 'ft0'],
      toBe: 0
    },
    {
      names: ['x1', 'ra', 'f1', 'ft1'],
      toBe: 1
    },
    {
      names: ['x2', 'sp', 'f2', 'ft2'],
      toBe: 2
    },
    {
      names: ['x3', 'gp', 'f3', 'ft3'],
      toBe: 3
    },
    {
      names: ['x4', 'tp', 'f4', 'ft4'],
      toBe: 4
    },
    {
      names: ['x5', 't0', 'f5', 'ft5'],
      toBe: 5
    },
    {
      names: ['x6', 't1', 'f6', 'ft6'],
      toBe: 6
    },
    {
      names: ['x7', 't2', 'f7', 'ft7'],
      toBe: 7
    },
    {
      names: ['x8', 's0', 'fp', 'f8', 'fs0'],
      toBe: 8
    },
    {
      names: ['x9', 's1', 'f9', 'fs1'],
      toBe: 9
    },
    {
      names: ['x10', 'a0', 'f10', 'fa0'],
      toBe: 10
    },
    {
      names: ['x11', 'a1', 'f11', 'fa1'],
      toBe: 11
    },
    {
      names: ['x12', 'a2', 'f12', 'fa2'],
      toBe: 12
    },
    {
      names: ['x13', 'a3', 'f13', 'fa3'],
      toBe: 13
    },
    {
      names: ['x14', 'a4', 'f14', 'fa4'],
      toBe: 14
    },
    {
      names: ['x15', 'a5', 'f15', 'fa5'],
      toBe: 15
    },
    {
      names: ['x16', 'a6', 'f16', 'fa6'],
      toBe: 16
    },
    {
      names: ['x17', 'a7', 'f17', 'fa7'],
      toBe: 17
    },
    {
      names: ['x18', 's2', 'f18', 'fs2'],
      toBe: 18
    },
    {
      names: ['x19', 's3', 'f19', 'fs3'],
      toBe: 19
    },
    {
      names: ['x20', 's4', 'f20', 'fs4'],
      toBe: 20
    },
    {
      names: ['x21', 's5', 'f21', 'fs5'],
      toBe: 21
    },
    {
      names: ['x22', 's6', 'f22', 'fs6'],
      toBe: 22
    },
    {
      names: ['x23', 's7', 'f23', 'fs7'],
      toBe: 23
    },
    {
      names: ['x24', 's8', 'f24', 'fs8'],
      toBe: 24
    },
    {
      names: ['x25', 's9', 'f25', 'fs9'],
      toBe: 25
    },
    {
      names: ['x26', 's10', 'f26', 'fs10'],
      toBe: 26
    },
    {
      names: ['x27', 's11', 'f27', 'fs11'],
      toBe: 27
    },
    {
      names: ['x28', 't3', 'f28', 'ft8'],
      toBe: 28
    },
    {
      names: ['x29', 't4', 'f29', 'ft9'],
      toBe: 29
    },
    {
      names: ['x30', 't5', 'f30', 'ft10'],
      toBe: 30
    },
    {
      names: ['x31', 't6', 'f31', 'ft11'],
      toBe: 31
    }
  ];
  names.forEach((e) => {
    const { names, toBe } = e;
    names.forEach((name) => {
      it(`getRegisterNumber('${name}') should be ${toBe}`, () => {
        chai.expect(getRegisterNumber(name)).to.eq(toBe);
      });
    });
  });
  it(`registerNumber('x32') should throw Error`, () => {
    chai.expect(() => getRegisterNumber('x32')).to.throw(Error);
  });
});
