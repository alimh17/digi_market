export const replacePrice = (price) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  const convertedPrice = price
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

  return convertedPrice.toString().replace(/\d/g, (x) => farsiDigits[x]);
};

export const replaceNumberToPersian = (n) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
};
