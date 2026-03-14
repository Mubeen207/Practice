import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");
export function getAll() {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}
export function getByEmail(email) {
  const data = getAll();
  return data.find((user) => user.email === email);
}
export function save(name, email, password) {
  const data = getAll();
  const found = getByEmail(email);
  if (found) {
    throw new Error("user Already Exits");
  }
  data.push({
    id: IdGenerator(),
    name,
    email,
    password,
  });
  fs.writeFileSync(filePath, JSON.stringify(data));
}
export function IdGenerator() {
  let id = "";
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
  }

  return id;
}