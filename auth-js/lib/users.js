import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data/users.json");

export function getUsers() {
  const users = fs.readFileSync(filePath);
  return JSON.parse(users);
}

export function getByEmail(email) {
  const data = getUsers();
  return data.find((user) => user.email === email);
}

export async function save(name, email, password) {
  const data = getUsers();
  const found = getByEmail(email);
 if (found) {
  return { message: "User already exists" };
}
  const hashedPassword = await bcrypt.hash(password, 12);
  data.push({ name, email, password: hashedPassword, id: generateID(8) });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return {message : "User Created"};
}

function generateID(length = 8) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
