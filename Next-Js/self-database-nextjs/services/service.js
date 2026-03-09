import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "products.json");

export function getAll() {
  const data = fs.readFileSync(filePath);

  return JSON.parse(data);
}

export function getById(id) {
  const data = getAll();
  console.log(data);

  return data.find((product) => product.id === Number(id));
}
export function save(title, description, price) {
  const data = getAll();

  data.push({
    id: data.length + 1,
    title,
    description,
    price,
  });

  fs.writeFileSync(filePath, JSON.stringify(data));
}
export function deleteProduct(id) {
  const data = getAll();

  const filteredData = data.filter((product) => product.id !== Number(id));

  fs.writeFileSync(filePath, JSON.stringify(filteredData));

  return filteredData;
}

export function editProduct(id, title, description, price) {
  const data = getAll();
  const Index = data.findIndex((p) => p.id === Number(id));
  if (Index === -1) return null;

  data[Index] = {
    ...data[Index],
    title,
    description,
    price,
  };

  fs.writeFileSync(filePath, JSON.stringify(data));

  return data[Index];
}
