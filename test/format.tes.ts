import chai from 'chai';
import { cleanEscapes } from '../src';

describe('cleanEscapes', () => {
  it(`cleanEscapes('') should be ''`, () => {
    chai.expect(cleanEscapes('')).to.eq('');
  });
  it(`cleanEscapes('h\\i') should be 'hi'`, () => {
    chai.expect(cleanEscapes('h\\i')).to.eq('hi');
  });
  it(`cleanEscapes('\\n') should be '\n'`, () => {
    chai.expect(cleanEscapes('\\n')).to.eq('\n');
  });
  it(`cleanEscapes('\\\\') should be '\\'`, () => {
    chai.expect(cleanEscapes('\\\\')).to.eq('\\');
  });
  it(`cleanEscapes('\\t') should be '\t'`, () => {
    chai.expect(cleanEscapes('\\t')).to.eq('\t');
  });
  it(`cleanEscapes('\\b') should be '\b'`, () => {
    chai.expect(cleanEscapes('\\b')).to.eq('\b');
  });
  it(`cleanEscapes('\\r') should be '\r'`, () => {
    chai.expect(cleanEscapes('\\r')).to.eq('\r');
  });
  it(`cleanEscapes('\\0') should be '\0'`, () => {
    chai.expect(cleanEscapes('\\0')).to.eq('\0');
  });
});
