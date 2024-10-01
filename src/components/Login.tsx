"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <button
      onClick={() => signIn("keycloak")}
      className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
    >
      Sign In with Keycloak
    </button>
  );
}