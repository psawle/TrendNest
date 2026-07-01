import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData : []
}

const userSlice = createSlice({
    name : "users",
    initialState,
    reducers : {
        loadusers : (state,action) => {
              state.userData = action.payload
        }
    }
    // extraReducers : (builder) => {
    //     builder.addCase("user/register/fulfilled",(state,action) => {
    //         state.userData = action.payload
    //     })
    // }
})

export default userSlice.reducer;
export const {loadusers} = userSlice.actions;





















// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   userData: null,   // null = nobody logged in yet (was [], wrong shape)
// };

// const userSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.userData = action.payload;   // store the logged-in user
//     },
//     clearUser: (state) => {
//       state.userData = null;             // for logout later
//     },
//   },
// });

// export default userSlice.reducer;
// export const { setUser, clearUser } = userSlice.actions;