import { save } from "@/services/user";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(404).send();
  }
  const { name, email, password } = req.body;
  try {
    save(name, email, password);
    res.status(201).json({ message: "User Added Succesfully", status: true });
  } catch (err) {
    res
      .status(400)
      .json({
        message: typeof err === "string" ? err : err.message,
        status: false,
      });
  }
  return res.status(200).json();
}
