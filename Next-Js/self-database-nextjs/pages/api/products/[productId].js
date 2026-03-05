import { getById } from "@/services/service";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { productId } = req.query;
    const data = getById(productId);
    console.log(data);
    
    res.status(200).json(data);
  }
  return res.status(404).json({ message: "This method is not allowed" }).send();
}
