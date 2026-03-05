import { deleteProduct, getAll, save } from "@/services/service";

export default function handler(req, res) {
  if (req.method === "GET") {
    const data = getAll();
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const { title, description, price } = req.body;
    save(title, description, price);
    res.status(201).json({ message: "Data Added SuccesFully" }).send();
  } else if (req.method === "DELETE") {
    const { productId } = req.query;
    const data = deleteProduct(productId);
    res.status(201).json(data).send();
  }
  return res.status(404).json({ message: "This method is not allowed" }).send();
}
