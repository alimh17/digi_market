export const brandConvertToPersian = (brand) => {
  switch (brand) {
    case "Samsung":
      return "سامسونگ";
    case "Xiaomi":
      return "شیائومی";
    case "Apple":
      return "اپل";
    case "Nokia":
      return "نوکیا";
    case "Huawei":
      return "هوآوی";
    case "GPlus":
      return "جی پلاس";
    case "Sony":
      return "سونی";
    case "HTC":
      return "اچ تی سی";
    default:
      return "";
  }
};
