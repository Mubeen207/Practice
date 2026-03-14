import Form from "@/components/auth/form";
import { getAll } from "@/services/user";
import React, { useState } from "react";

export default function Home(props) {
  const { users } = props;
  return (
    <>
      <div>
        <Form users={users} />
      </div>
    </>
  );
}
export async function getServerSideProps() {
  const data = getAll();

  return {
    props: {
      users: data,
    },
  };
}
