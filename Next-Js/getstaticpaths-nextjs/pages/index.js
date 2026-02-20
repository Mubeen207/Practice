import Link from "next/link";
import Image from "next/image";
import React from "react";
export default function Home(props) {
  const { userData } = props;
  if (!userData) return <p>Loading...</p>;

  let usersList = userData.map((data) => (
    <Link key={data.id} href={`/posts/${data.id}`}>
      {" "}
      <div
        key={data.id}
        className="border w-112.5 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 "
      >
        <div className="flex items-center gap-3 p-3">
          <Image
            src="/post-image.png"
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col">
            <p className="font-semibold text-gray-900 text-sm">Profile Name</p>
            <p className="text-gray-500 text-xs">30m ago</p>
          </div>
        </div>

        <div className="px-3 py-2 border-t border-b">
          <p className="font-semibold text-sm">Title: {data.title}</p>
        </div>

        <div className="p-3 text-gray-800 text-sm">
          <p>{data.body}</p>
        </div>

        <div className="px-3 py-2 border-t flex gap-4 text-gray-500 text-xs">
          <button className="hover:text-blue-500">Like</button>
          <button className="hover:text-blue-500">Comment</button>
          <button className="hover:text-blue-500">Share</button>
        </div>
      </div>
    </Link>
  ));

  return (
    <>
      <div className="grid grid-cols-3 items-center gap-4 m-2">{usersList}</div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      userData: data,
    },
  };
}
