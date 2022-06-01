import _ from "lodash";

export const colorSort = (color, item) => {
  if (_.isEmpty(color)) {
    const b = [...color];
    b.push(item);
    return b;
  } else if (color.includes(item)) {
    const filter = color.filter((f) => f !== item);
    return filter;
  } else {
    const b = [...color];
    b.push(item);
    return b;
  }
};

export const changeCheckbox = (colorRef, item) => {
  if (colorRef) {
    colorRef.current.map((el, i) => {
      if (el.current.classList.contains(item)) {
        el.current.checked
          ? (el.current.checked = false)
          : (el.current.checked = true);
      }
    });
  }
};
