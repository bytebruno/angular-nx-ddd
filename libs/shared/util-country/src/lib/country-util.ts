import { Country } from './entities/country';

export enum CountryCode {
  'Ireland' = 'IE',
  'UnitedKingdom' = 'UK',
}

export class CountryUtil {
  static countries: Country[] = [
    { name: 'Ireland', code: CountryCode.Ireland },
    { name: 'United Kingdom', code: CountryCode.UnitedKingdom },
  ];
}
