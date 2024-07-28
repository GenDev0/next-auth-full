"use server";

import { signOut } from "@/utils/auth";

export const logout = async () => {
  //some server stuff :clreaning...whatever
  await signOut();
};
