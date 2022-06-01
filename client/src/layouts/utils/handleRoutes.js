export const handleRouts = (path) => {
  switch (path) {
    case "/":
      return true;
    case "/mobiles":
      return true;
    case `/mobiles/${path.split("/")[2]}`:
      return true;
    case "/card":
      return true;
    default:
      return false;
  }
};
