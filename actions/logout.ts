"use server";

import { signOut } from "@/utils/auth";

export const logout = async () => {
  //some server stuff :cleaning...whatever
  await signOut();
};
