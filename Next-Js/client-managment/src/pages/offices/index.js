import Link from "next/link";
import data from "@/components/data";

export default function Offices() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Select Office / City</h1>
      <ul className="space-y-2">
        {data.map((office) => (
          <li key={office.id}>
            <Link
              href={{
                pathname: `/offices/${office.id}`,

                query: { officeid: office.id },
              }}
              className="text-blue-600 hover:underline"
            >
              {office.name} ({office.city})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
