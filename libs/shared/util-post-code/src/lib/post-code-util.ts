import { CountryCode } from '@angular-nx-ddd/shared/util-country';
import { ValidatorFn, Validators } from '@angular/forms';
import { UK_POST_CODE_REGEX } from './post-code-regex-patterns';

export class PostCodeUtil {
  static postCodeValidators = new Map<CountryCode, ValidatorFn | ValidatorFn[]>(
    [
      [
        CountryCode['Ireland'],
        [Validators.minLength(6), Validators.maxLength(10)],
      ],
      [
        CountryCode['UnitedKingdom'],
        [Validators.required, Validators.pattern(UK_POST_CODE_REGEX)],
      ],
    ]
  );

  static getPostCodeValidators(
    countryCode: CountryCode
  ): ValidatorFn | ValidatorFn[] {
    return this.postCodeValidators.get(countryCode) || [];
  }
}
