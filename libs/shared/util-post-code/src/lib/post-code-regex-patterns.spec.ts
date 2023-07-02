import { UK_POST_CODE_REGEX } from './post-code-regex-patterns';

describe('PostCodeRegexPatterns', () => {
  it('should match valid UK post codes', () => {
    const validPostCodes = [
      'SW1W 0NY',
      'PO16 7GZ',
      'GU16 7HF',
      'L1 8JQ',
      'B33 8TH',
      'DN55 1PT',
    ];

    validPostCodes.forEach((postCode) => {
      expect(postCode).toMatch(UK_POST_CODE_REGEX);
    });
  });

  it('should not match invalid UK post codes', () => {
    const invalidPostCodes = [
      '12345',
      'ABCD',
      'EC1A 1BBBB',
      'B33 8T',
      'DN551 PT',
    ];

    invalidPostCodes.forEach((postCode) => {
      expect(postCode).not.toMatch(UK_POST_CODE_REGEX);
    });
  });
});
