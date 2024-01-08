const ItemReducers = (state = null, action) => {
  switch (action.type) {
    case "ITEM":
      const { data } = action.payload;
      console.log("data 2 : ", data);
      return { ...data };
    default:
      return state; // Return the current state by default
  }
};

export default ItemReducers;
