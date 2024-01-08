export const setData = (data) => {
  return {
    type: "DATA",
    payload: { data: data },
  };
};

export const setShop = (data) => {
  return {
    type: "SHOP",
    payload: { data },
  };
};

export const setItem = (data) => {
  return {
    type: "ITEM",
    payload: { data },
  };
};
