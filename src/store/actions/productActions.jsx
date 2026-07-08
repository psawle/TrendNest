import instance from "../../service/axios";
import { loadProduct } from "../reducers/productsSlice";

export const asyncGetProducts = (params = {}) => async (dispatch) => {
  const res = await instance.get("/products", { params });
  dispatch(loadProduct(res.data));
  return res.data;
};

export const asyncGetProductById = (id) => async () => {
  const res = await instance.get(`/products/${id}`);
  return res.data;
};

export const asyncCreateProduct = (product) => async () => {
  const res = await instance.post("/products", product);
  return res.data;
};

export const asyncUpdateProduct = (id, product) => async () => {
  const res = await instance.put(`/products/${id}`, product);
  return res.data;
};
