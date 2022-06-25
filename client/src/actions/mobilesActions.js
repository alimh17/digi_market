import _, { fill, filter } from "lodash";
import { getAllMobiles } from "../server/mobileRequests/MobileRequests";
import { brandConvert, brandConvertToPersian } from "../utils/brnadConverToPersian";
import { switchColor } from "../utils/switchColor";

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
  const copyState = { ...getState().mobiles };
  const { allProduct } = copyState;

  const compare = (a, b) => {
    if (b.sell < a.sell) {
      return -1;
    }
    if (b.sell > a.sell) {
      return 1;
    }
    return 0;
  };
  const sorted = allProduct.sort(compare);
  copyState.allProduct = sorted;

  dispatch({ type: "SORT_BY_SELL", payload: copyState });
};

export const mobileSortByView = () => (dispatch, getState) => {
  const copyState = { ...getState().mobiles };
  const { allProduct } = copyState;

  const compare = (a, b) => {
    if (b.view < a.view) {
      return -1;
    }
    if (b.view > a.view) {
      return 1;
    }
    return 0;
  };

  const sorted = allProduct.sort(compare);
  copyState.allProduct = sorted;

  dispatch({ type: "SORT_BY_VIEW", payload: copyState });
};

export const mobileSortByCheapest = () => (dispatch, getState) => {
  const copyState = { ...getState().mobiles };
  const { allProduct } = copyState;

  const compare = (a, b) => {
    if (Number(a.price) < Number(b.price)) {
      return -1;
    }
    if (Number(a.price) > Number(b.price)) {
      return 1;
    }
    return 0;
  };

  const sorted = allProduct.sort(compare);
  copyState.allProduct = sorted;
  dispatch({ type: "SORT_BY_SELL", payload: copyState });
};
export const mobileSortByExpensive = () => (dispatch, getState) => {
  const copyState = { ...getState().mobiles };
  const { allProduct } = copyState;

  const compare = (a, b) => {
    if (Number(b.price) < Number(a.price)) {
      return -1;
    }
    if (Number(b.price) > Number(a.price)) {
      return 1;
    }
    return 0;
  };
  const sorted = allProduct.sort(compare);
  copyState.allProduct = sorted;

  dispatch({ type: "SORT_BY_SELL", payload: copyState });
};

// --------------------------------------------------------------------------

export const sortMobilesByBrand = (brand) => async (dispatch, getState) => {
  let mobiles = { ...getState().mobiles };
  mobiles.brands = brand

  const convert = mobiles.brands.map(b => brandConvertToPersian(b))

  const allMobiles = await getAllMobiles()

  let filtered = allMobiles[0].map((m, i) => {
    return convert.includes(m.brand) && m
  })
  filtered = filtered.filter(f => f !== false)
  const copyFiltered = [...filtered]
  mobiles.allProduct = copyFiltered


  dispatch({ type: "SORT_BY_BRANDS", payload: mobiles });


  if (mobiles.brands.length === 0 && mobiles.colors.length === 0) {
    const copyState = { ...getState().mobiles };
    const mobiles = await getAllMobiles()
    copyState.allProduct = mobiles[0];
    dispatch({
      type: "INITIAL_MOBILE",
      payload: copyState,
    });
  } else if (mobiles.brands.length === 0 && mobiles.colors.length > 0) {
    dispatch(sortMobilesByColor(mobiles.colors))
  }

};

export const sortMobilesByColor = (color) => async (dispatch, getState) => {
  let mobiles = { ...getState().mobiles };
  const { allProduct } = mobiles;
  const CopyColors = color;
  mobiles.colors = CopyColors;
  const convert = mobiles.colors.map(b => switchColor(b))

  const allMobiles = await getAllMobiles()

  if (_.isEmpty(mobiles.brands)) {
    let filtered = allMobiles[0].map((m, i) => {
      const result = m.color.map(c => {
        return convert.includes(c) && m
      })
      return result.filter(f => f !== false)
    })
    filtered = _.flattenDeep(filtered)
    filtered = _.uniq(filtered)
    const copyFiltered = [...filtered]
    mobiles.allProduct = copyFiltered

    dispatch({ type: "SORT_BY_COLORS", payload: mobiles });

  } else {
    let filtered = allProduct.map((m, i) => {
      const result = m.color.map(c => {
        return convert.includes(c) && m
      })
      return result.filter(f => f !== false)
    })
    filtered = _.flattenDeep(filtered)
    filtered = _.uniq(filtered)
    const copyFiltered = [...filtered]
    mobiles.allProduct = copyFiltered

    dispatch({ type: "SORT_BY_COLORS", payload: mobiles });
  }

  if (mobiles.brands.length === 0 && mobiles.colors.length === 0) {
    const copyState = { ...getState().mobiles };
    const mobiles = await getAllMobiles()
    copyState.allProduct = mobiles[0];
    dispatch({
      type: "INITIAL_MOBILE",
      payload: copyState,
    });
  } else if (mobiles.colors.length === 0 && mobiles.brands.length > 0) {
    dispatch(sortMobilesByBrand(mobiles.brands))
  }

};
