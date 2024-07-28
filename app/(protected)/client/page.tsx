"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

interface ClientPageProps {}

const ClientPage = (props: ClientPageProps) => {
  const user = useCurrentUser();

  return <UserInfo user={user} label={"🪪 Client Component"} />;
};
export default ClientPage;
