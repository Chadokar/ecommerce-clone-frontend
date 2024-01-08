import axios from "axios";
import { setProduct } from "../redux/Action";

const fetchproduct = async (productId, dispatch, navigate) => {
  await axios
    .get(`/product/${productId}`)
    .then((res) => {
      //   console.log(res.data.product);
      //   const products = [...res?.data?.product];
      dispatch(res.data.product);
      navigate(`/product/${productId}`);
    })
    .catch((err) => console.log(err));
};

export default fetchproduct;
