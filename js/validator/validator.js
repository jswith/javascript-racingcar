import { NUMBER, ERROR_MSG } from '../utils/constants.js';

export const validator = {
  isCarNameBlank(carNames) {
    const filtered = carNames.filter((name) => name === '');
    if (filtered.length > NUMBER.ZERO) {
      alert(ERROR_MSG.BLANK_NAME);
      return true;
    }
  },

  isInvalidCarNameLength(carNames) {
    const filtered = carNames.filter((name) => name.length > NUMBER.MAX_LENGTH);
    if (filtered.length > NUMBER.ZERO) {
      alert(ERROR_MSG.INVALID_NAME_LENGTH);
      return true;
    }
  },

  isInvalidCarNamesInput(carNames) {
    return ['isCarNameBlank', 'isInvalidCarNameLength'].some((method) => this[method](carNames));
  },

  isNotNaturalNumber(number) {
    if (number <= NUMBER.ZERO) {
      alert(ERROR_MSG.INVALID_RACING_COUNT);
      return true;
    }
  },

  isInvalidRacingCountInput(number) {
    return this.isNotNaturalNumber(number);
  },
};
