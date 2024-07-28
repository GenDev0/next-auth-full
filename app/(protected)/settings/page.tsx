"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

interface SettingsPageProps {}

const SettingsPage = (props: SettingsPageProps) => {
  const user = useCurrentUser();

  const onSignOut = async () => {
    logout();
  };
  return (
    <div className='bg-white p-10 rounded-xl'>
      <button onClick={onSignOut}>Sign Out</button>
    </div>
  );
};
export default SettingsPage;
