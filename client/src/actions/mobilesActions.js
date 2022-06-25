import _ from "lodash";
import { getAllMobiles } from "../server/mobileRequests/MobileRequests";

export const mobileInit = () => async (dispatch, getState) => {
  const copyState = { ...getState().mobiles };
  const mobiles = await getAllMobiles()
  copyState.allProduct = mobiles[0];
  dispatch({
    type: "INITIAL_MOBILE",
    payload: copyState,
  });
};

export const mobileSortBySell = () => (dispatch, getState) => {
  // const copyState = { ...getState().mobiles };
  // const { allProduct } = copyState;

  // const compare = (a, b) => {
  //   if (b.sell < a.sell) {
  //     return -1;
  //   }
  //   if (b.sell > a.sell) {
  //     return 1;
  //   }
  //   return 0;
  // };
  // const sorted = allProduct.sort(compare);
  // copyState.allProduct = sorted;

  // dispatch({ type: "SORT_BY_SELL", payload: copyState });
};

export const mobileSortByView = () => (dispatch, getState) => {
  // const copyState = { ...getState().mobiles };
  // const { allProduct } = copyState;

  // const compare = (a, b) => {
  //   if (b.view < a.view) {
  //     return -1;
  //   }
  //   if (b.view > a.view) {
  //     return 1;
  //   }
  //   return 0;
  // };

  // const sorted = allProduct.sort(compare);
  // copyState.allProduct = sorted;

  // dispatch({ type: "SORT_BY_VIEW", payload: copyState });
};

export const mobileSortByCheapest = () => (dispatch, getState) => {
  // const copyState = { ...getState().mobiles };
  // const { allProduct } = copyState;

  // const compare = (a, b) => {
  //   if (Number(a.price) < Number(b.price)) {
  //     return -1;
  //   }
  //   if (Number(a.price) > Number(b.price)) {
  //     return 1;
  //   }
  //   return 0;
  // };

  // const sorted = allProduct.sort(compare);
  // copyState.allProduct = sorted;
  // dispatch({ type: "SORT_BY_SELL", payload: copyState });
};
export const mobileSortByExpensive = () => (dispatch, getState) => {
  // const copyState = { ...getState().mobiles };
  // const { allProduct } = copyState;

  // const compare = (a, b) => {
  //   if (Number(b.price) < Number(a.price)) {
  //     return -1;
  //   }
  //   if (Number(b.price) > Number(a.price)) {
  //     return 1;
  //   }
  //   return 0;
  // };
  // const sorted = allProduct.sort(compare);
  // copyState.allProduct = sorted;

  // dispatch({ type: "SORT_BY_SELL", payload: copyState });
};

// --------------------------------------------------------------------------

export const sortMobilesByBrand = (brand) => (dispatch, getState) => {
  // let mobiles = { ...getState().mobiles };
  // const Copybrands = brand;
  // mobiles.brands = Copybrands;
  // dispatch({ type: "SORT_BY_BRANDS", payload: mobiles });

  // const copybrand = brand.map((item) => item.toLowerCase());

  // const filtered = mobile.filter((product) =>
  //   copybrand.includes(product.brand) ? product : null
  // );
  // mobiles.allProduct = filtered;
  // dispatch({ type: "SORT_BY_BRANDS", payload: mobiles });

  // if (_.isEmpty(mobiles.allProduct)) {
  //   mobiles.allProduct = mobile;
  //   dispatch({ type: "SORT_BY_BRANDS", payload: mobiles });
  // }
};

export const sortMobilesByColor = (color) => (dispatch, getState) => {
  // let mobiles = { ...getState().mobiles };
  // const { allProduct } = mobiles;
  // const CopyColors = color;
  // mobiles.colors = CopyColors;
  // dispatch({ type: "SORT_BY_COLORS", payload: mobiles });

  // const copyColors = color.map(
  //   (item) => item.charAt(0).toUpperCase() + item.slice(1)
  // );

  // let res = [];

  // mobile.map((product) => {
  //   product.color.map((c) => {
  //     if (copyColors.includes(c)) {
  //       res.push(product);
  //     }
  //   });
  // });

  // if (!_.isEmpty(res)) {
  //   res.sort((a, b) => allProduct.indexOf(a) - allProduct.indexOf(b));
  //   mobiles.allProduct = _.uniq(res);
  // } else {
  //   mobiles.allProduct = mobile;
  // }

  // dispatch({ type: "SORT_BY_COLORS", payload: mobiles });
};
