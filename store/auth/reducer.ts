import { createReducer } from "@reduxjs/toolkit";
import { loginSuccess, logoutSuccess } from "./actions";

const initialState = {
  token: null as string | null,
  user: null as any,
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(loginSuccess, (state, action) => {
    state.token = action.payload.token;
    state.user = action.payload.user;
  });
  builder.addCase(logoutSuccess, (state) => {
    state.token = null;
    state.user = null;
  });
});

export default authReducer;
