import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id: "",
    firstname: "",
    lastname: "",
    email: "",
    role: "",
    avatar: "",
    loggedIn: false,
};

const UserSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state._id = action.payload._id || state._id;
            state.firstname = action.payload.firstname || state.firstname;
            state.lastname = action.payload.lastname || state.lastname;
            state.email = action.payload.email || state.email;
            state.role = action.payload.role || state.role;
            state.avatar = action.payload.avatar || state.avatar;
            state.loggedIn = true;            

            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        removeUser: (state) => {
            state._id = "";
            state.firstname = "";
            state.lastname = "";
            state.email = "";
            state.role = "";
            state.avatar = "";
            state.loggedIn = false;

            localStorage.removeItem('user');
            localStorage.removeItem('subdomain');
        }
    },
});

export const { setUser, removeUser } = UserSlice.actions;

export default UserSlice.reducer;