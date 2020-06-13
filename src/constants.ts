export default {
  /** Stack pointer memory address */
  STACK_POINTER: 0xbffffff0,
  /** Global pointer memory address */
  GLOBAL_POINTER: 0x10008000,
  /** Program counter memory address */
  PROGRAM_COUNTER: 0x00010000,

  /** Represents the start address of the high reserved memory */
  RESERVED_HI_START: 0xbffffff4,
  /** Represents the end address of the high reserved memory */
  RESERVED_HI_STOP: 0xffffffff,
  /** Represents the start address of the low reserved memory */
  RESERVED_LO_START: 0x00000000,
  /** Represents the end address of the low reserved memory */
  RESERVED_LO_STOP: 0x0000ffff,

  /** Byte int mask */
  BYTE_MASK: 0xff,
  /** Half int mask */
  HALF_MASK: 0xffff,

  /** Floating point fraction/mantissa integer mask */
  FRACTION_MASK: 0x007fffff,
  /** Floating point exponent integer mask */
  EXPONENT_MASK: 0x7f800000,
  /** Floating point sign integer mask */
  SIGN_MASK: 0x80000000,

  /** Byte size */
  BYTE_SIZE: 1,
  /** Half size in bytes */
  HALF_SIZE: 2,
  /** Word size in bytes */
  WORD_SIZE: 4,

  /** Byte size in bits */
  BYTE_BITS: 8,
  /** Half size in bits */
  HALF_BITS: 16,
  /** Word size in bits */
  WORD_BITS: 32,

  /** Byte min unsigned value */
  BYTE_MIN_U: 0,
  /** Byte min signed value */
  BYTE_MIN: -128,
  /** Byte max unsigned value */
  BYTE_MAX_U: 255,
  /** Byte max signed value */
  BYTE_MAX: 127,

  /** Half min unsigned value */
  HALF_MIN_U: 0,
  /** Half min signed value */
  HALF_MIN: -32768,
  /** Half max unsigned value */
  HALF_MAX_U: 0xffff,
  /** Half max signed value */
  HALF_MAX: 32767,

  /** Word min unsigned value */
  WORD_MIN_U: 0,
  /** Word min signed value */
  WORD_MIN: -2147483648,
  /** Word max unsigned value */
  WORD_MAX_U: 4294967295,
  /** Word max signed value */
  WORD_MAX: 2147483647
};
