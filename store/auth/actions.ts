import { User } from "@prisma/client";
import { createAction } from "@reduxjs/toolkit";

export const loginSuccess = createAction<{ token: string; user: User }>(
  "auth/loginSuccess"
);
export const logoutSuccess = createAction("auth/logoutSuccess");
