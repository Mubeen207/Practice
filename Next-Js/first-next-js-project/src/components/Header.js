import List from "./List";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-40 py-10 text-white bg-linear-to-r from-blue-600 to-blue-800">
        <h1 className="font-bold text-2xl">Mubeen</h1>
        <ul className="flex gap-6 ">
          <List btnName="Home" route="/" />
          <List btnName="About Us" route="/about" />
          <List btnName="Contact" route="/contact" />
          <List btnName="Services" route="/services" />
          <List btnName="Blog" route="/blog" />
          <List btnName="Gallery" route="/gallery" />
        </ul>
        <div className="flex gap-3">
          <button>Sign in</button>
          <button className="border px-4 py-1">Sign Up</button>
        </div>
      </div>
    </>
  );
};
export default Header;
