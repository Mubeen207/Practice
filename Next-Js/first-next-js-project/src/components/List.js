import Link from "next/link";

export default function List({ btnName, route }) {
  return (
    <>
      <div>
        <Link href={route}>
          <li>{btnName}</li>
        </Link>
      </div>
    </>
  );
}
