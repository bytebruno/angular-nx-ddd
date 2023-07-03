import { CountryCode, CountryUtil } from './country-util';

describe('CountryUtil', () => {
  it('should contain Ireland and UK', () => {
    const countries = CountryUtil.countries;

    expect(countries).toEqual(
      expect.arrayContaining([
        {
          code: CountryCode.Ireland,
          name: 'Ireland',
        },
        {
          code: CountryCode.UnitedKingdom,
          name: 'United Kingdom',
        },
      ])
    );
  });
});
