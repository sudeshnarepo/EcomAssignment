export const addItem = (id) => {
  return {
    type: "ADDITEM",
    payload: id,
  };
};

export const increaseQt = (id) => {
  return {
    type: "increaseQt",
    payload: id,
  };
};
export const decreaseQt = (id) => {
  return {
    type: "decreaseQt",
    payload: id,
  };
};
export const delItem = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
export const setAllitem = (product) => {
  return {
    type: "setAllitem",
    payload: product,
  };
};

export const setLoading = (product) => {
  return {
    type: "setLoading",
    payload: product,
  };
};
export const remove = (id) => {
  return {
    type: "remove",
    payload: id,
  };
};
export const filterCategory = (cat) => {
  return {
    type: "filterCategory",
    payload: cat,
  };
};