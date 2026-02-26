import React, { useEffect, useState } from "react";

export default function Home(props) {
  const [commintsList, setCommintsList] = useState([]);
  const { commints } = props;
  useEffect(() => {
    if (!commints) return;
    let size = 5;
    let temp = [];
    const users = [];
    for (let value of commints) {
      temp.push(value);
      if (temp.length === size) {
        users.push(temp);
        temp = [];
      }
    }
    if (temp.length > 0) users.push(temp);
    setCommintsList(users);
  }, [commints]);
  console.log(commintsList);

  if (!commints) return <p>Loading...</p>;
  return (
    <>
      <div className="w-150 mx-auto p-4">
  {commintsList.map((post) => {
    return (
      <div
        key={post.postId}
        className="p-4 flex flex-col gap-3 m-3 bg-green-800 rounded-2xl"
      >
        <h1 className="text-2xl font-bold text-white mb-2">Commint</h1>
        {post.map((commint) => {
          return (
            <div
              key={commint.id}
              className="p-3 bg-blue-600 rounded-lg"
            >
              <p className="text-white font-semibold">Name: {commint.name}</p>
              <p className="text-gray-200 text-sm">Email: {commint.email}</p>
              <p className="text-gray-100 mt-1">{commint.body}</p>
            </div>
          );
        })}
      </div>
    );
  })}
</div>
    </>
  );
}
export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  return {
    props: {
      commints: data,
    },
  };
}
