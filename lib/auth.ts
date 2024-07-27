import { auth } from "@/utils/auth";

export const currentUser = async () => {
  const session = await auth();
  return session?.user;
};
