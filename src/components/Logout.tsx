"use client";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-200"
    >
      Sign Out
    </button>
  );
}
