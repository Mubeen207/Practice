import React from "react";
import Image from "next/image";
export default function Home(props) {
  const { userData } = props;
  console.log(userData);
  if (!userData) return <p>Loading...</p>;

  return (
    <>
      <div className="flex items-center justify-center h-screen w-full">
        <div
          key={userData.id}
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
              <p className="font-semibold text-gray-900 text-sm">
                Profile Name
              </p>
              <p className="text-gray-500 text-xs">30m ago</p>
            </div>
          </div>

          <div className="px-3 py-2 border-t border-b">
            <p className="font-semibold text-sm">Title: {userData.title}</p>
          </div>

          <div className="p-3 text-gray-800 text-sm">
            <p>{userData.body}</p>
          </div>

          <div className="px-3 py-2 border-t flex gap-4 text-gray-500 text-xs">
            <button className="hover:text-blue-500">Like</button>
            <button className="hover:text-blue-500">Comment</button>
            <button className="hover:text-blue-500">Share</button>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { postId } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );
  const data = await response.json();

  return {
    props: {
      userData: data,
    },
    revalidate: 10,
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          postId: "1",
        },
      },
    ],
    fallback: "blocking",
  };
}
