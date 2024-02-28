"use client"
import { signOut } from 'next-auth/react';
import React from 'react';

const SignOutButton = () => {
  return (
    <div>
      <button
        className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
      >
        Sign out
      </button>
    </div>
  );
};

export default SignOutButton;
