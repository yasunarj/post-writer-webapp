import { getServerSession } from "next-auth"; 

const getCurrentUser = async () => {
  const session = await getServerSession();
  return session?.user;
}

export { getCurrentUser }