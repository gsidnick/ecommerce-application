const DEFAULT_PRICE = 0;
const FRACTION_DIGITS_COUNT_DEFAULT = 2;
const FRACTION_DIGIT_POWER = 10;

export const convertPriceToFractionDigits = (
  price = DEFAULT_PRICE,
  fractionDigits = FRACTION_DIGITS_COUNT_DEFAULT
): number => {
  const reductionFactor = FRACTION_DIGIT_POWER ** fractionDigits;
  const reducedPrice = Number(
    (price / reductionFactor).toFixed(FRACTION_DIGITS_COUNT_DEFAULT)
  );

  return reducedPrice;
};
