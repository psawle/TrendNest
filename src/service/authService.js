import instance from "./axios";

export const registerUser = async (user) => {
    try {
        const res = await instance.post("/users",user);
        console.log("response : ",res)
        return res;
     } catch (error) {
      console.log("error",error)
     }
} 
