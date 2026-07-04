import instance from "../../service/axios";

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
