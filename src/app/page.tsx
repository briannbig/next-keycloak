import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Logout from "@/components/Logout";
import Login from "@/components/Login";

export default async function Home() {
  const session = await getServerSession(authOptions);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        {session ? (
          <>
            <div className="text-lg font-semibold mb-4 text-emerald-600">Your are logged in as {session.user?.name}</div>
            <Logout />
          </>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}