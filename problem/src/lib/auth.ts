import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
import path from "path";
import fs from "fs";
const pathName = path.join(process.cwd(), "src/data/users.json");
export function getUsers() {
  const data = fs.readFileSync(pathName);
  const users = JSON.parse(data.toString());
  return users;
}
export function saveUsers(users: any) {
  fs.writeFileSync(pathName, JSON.stringify(users));
}
