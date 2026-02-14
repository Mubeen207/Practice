import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import data from "@/components/data";

export default function Projects() {
  const router = useRouter();
  const { clientid } = router.query;
  const [client, setClient] = useState(null);

  useEffect(() => {
    if (clientid) {
      let foundClient = null;
      for (let office of data) {
        foundClient = office.clients.find((c) => c.id === clientid);
        if (foundClient) break;
      }
      setClient(foundClient);
    }
  }, [clientid]);

  if (!client) return <p>Loading Project...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{client.name}'s Projects</h1>
      <ul className="mt-4">
        {client.projects.map((project, index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold">{project.title}</span> -{" "}
            <span className="text-blue-600">{project.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
