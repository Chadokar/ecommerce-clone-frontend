const ShopReducers = (state = null, action) => {
  switch (action.type) {
    case "SHOP":
      const { data } = action.payload;
      return { ...data };
    default:
      return state; // Return the current state by default
  }
};

export default ShopReducers;
