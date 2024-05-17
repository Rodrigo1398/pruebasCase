'use client'

import { useSession } from "next-auth/react";

export const TopBar = () => {
  const { data: session } = useSession();
  return (
    <nav className="">
      <p>{JSON.stringify(session)}</p>
    </nav>
  );
};
