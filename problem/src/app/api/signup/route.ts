import generateRandomId from "@/components/idGen";
import { getUsers, saveUsers } from "@/lib/auth";
import bcrypt from "bcryptjs";

export default async function POST(req: Request) {
  const { email, password, name } = await req.json();

  const users = getUsers();
  const exists = users.find((u: any) => u.email === email);

  if (exists) return Response.json({ error: "User Already exits" });
  const hashed = await bcrypt.hash(password, 12);

  const newUser = {
    id: generateRandomId,
    name: name,
    email,
    password : hashed,
  };
  users.push(newUser);
  saveUsers(users);

  return Response.json({ message: "User Created" });
}
