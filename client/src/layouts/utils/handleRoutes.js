export const handleRouts = (path) => {
  switch (path) {
    case "/":
      return true;
    case "/mobiles":
      return true;
    case `/mobiles/${path.split("/")[2]}`:
      return true;
    case '/laptops':
      return true;
    case `/laptops/${path.split("/")[2]}`:
      return true;
    case "/tablets":
      return true;
    case `/tablets/${path.split("/")[2]}`:
      return true;
    case "/card":
      return true;
    default:
      return false;
  }
};
