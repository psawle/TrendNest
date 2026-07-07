
import instance from "../../service/axios";
import { setUser, logout } from "../reducers/userSlice";

export const asyncUserRegister = (user) => async () => {
   const res = await instance.post("/users",user);
   return res;
}

export const asyncGetUserById = (id) => async () => {
   const res = await instance.get(`/users/${id}`);
   return res.data;
}

export const asyncUpdateUser = (id, user) => async () => {
   const res = await instance.put(`/users/${id}`, user);
   return res.data;
}

export const loginUser = (credentials) => async (dispatch) => {
   const res = await instance.get("/users", {
      params: {
         email: credentials.email.trim(),
         password: credentials.password.trim(),
      },
   });

   const user = res.data[0];
   if (!user) {
      throw new Error("Invalid email or password");
   }

   const safeUser = { ...user };
   delete safeUser.password;
   const token = btoa(`${user.id}:${Date.now()}`);

   localStorage.setItem("token", token);
   localStorage.setItem("user", JSON.stringify(safeUser));
   dispatch(setUser(safeUser));

   return safeUser;
}

export const logoutUser = () => (dispatch) => {
   localStorage.removeItem("token");
   localStorage.removeItem("user");
   dispatch(logout());
}