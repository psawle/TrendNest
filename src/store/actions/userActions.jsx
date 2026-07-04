
import instance from "../../service/axios";

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

export const loginUser = (user) => async (dispatch,getState) => {
   try {
      //  const res = await instance.get(`/users?email=${user?.email}&password=${user?.password}`)
      const res = await instance.get(`/users?email=${user.email}`, {
         params: {
           email: user.email.trim(),
           password: user.password.trim(),
         },
       });
       console.log("ressss",res)
       return res;
   } catch (error) {
       console.log("error in login",error)
   }
}