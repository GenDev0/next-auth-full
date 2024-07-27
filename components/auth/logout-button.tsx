"use client";

import { logout } from "@/actions/logout";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onSignOut = async () => {
    logout();
  };

  return (
    <span onClick={onSignOut} className='cursor-pointer'>
      {children}
    </span>
  );
};
export default LogoutButton;
