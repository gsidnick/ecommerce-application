const MAX_YEARS = 13;
const DAYS_IN_YEARS = 365;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;
const MILLISECONDS_IN_SECOND = 1000;
export const MIN_PASSWORD_LENGTH = 8;
export const MAX_DATE = new Date(
  Date.now() -
    MAX_YEARS *
      DAYS_IN_YEARS *
      HOURS_IN_DAY *
      MINUTES_IN_HOUR *
      SECONDS_IN_MINUTE *
      MILLISECONDS_IN_SECOND
);
