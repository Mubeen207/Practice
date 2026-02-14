import { useRouter } from "next/router";
import data from "@/components/data";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Client() {
  const router = useRouter();
  const { officeid } = router.query;

  const [office, setOffice] = useState(null);

  useEffect(() => {
    if (officeid) {
      const foundOffice = data.find((u) => u.id === officeid);
      setOffice(foundOffice);
    }
  }, [officeid]);

  if (!office) return <p>Loading Client...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{office.name}</h1>
      <p>City: {office.city}</p>

      <h2 className="mt-4 font-semibold">Clients:</h2>
      <ul>
        {office.clients.map((client) => (
          <Link
            href={{
              pathname: `${officeid}/${client.id}`,
              query: { clientid: client.id },
            }}
          >
            {" "}
            <li key={client.id}>{client.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
