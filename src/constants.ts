const MAX_YEARS = 13;
const DAYS_IN_YEARS = 365;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;
const MILLISECONDS_IN_SECOND = 1000;
export const MIN_PASSWORD_LENGTH = 8;
export const EMPTY_PASSWORD_LENGTH = 0;
export const MAX_DATE = new Date(
  Date.now() -
    MAX_YEARS *
      DAYS_IN_YEARS *
      HOURS_IN_DAY *
      MINUTES_IN_HOUR *
      SECONDS_IN_MINUTE *
      MILLISECONDS_IN_SECOND
);

export const EMPTY_DATA = 0;
export const SECONDS_TO_REDIRECT = 5;
export const SECONDS_STEP_TO_REDIRECT = 1;
export const MILLISECONDS_STEP_TO_REDIRECT = 1000;
export const SECONDS_EDGE_TO_REDIRECT = 0;

export const PRODUCT_DESCRIPTION_SLICE_FROM = 0;
export const PRODUCT_DESCRIPTION_SLICE_TO = 80;

export const IMMEDIATE_INVOKE = 100;
export const MASTER_VARIANT_ID = 1;
export const POSITION_DIGIT_COEFFICIENT = 10;
export const EMPTY_PRICE = 0;
export const INITIAL_PRICE = 0;
export const TWO_FRACTION_DIGIT = 2;
