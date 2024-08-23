import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Reducers/UserSlice";
import ProjectSlice from "./Reducers/ProjectSlice";

const Store = configureStore({
  reducer: {
    user: UserSlice,
    project: ProjectSlice,
  },
});

export default Store;
