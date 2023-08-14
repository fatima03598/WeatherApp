import { Link } from "react-router-dom";
export default function TheNavBar() {
  return (
    <header className="shadow-sm bg-white">
      <nav className="container mx-auto p-4 flex justify-between">
        <Link to="/" className="font-bold">
          Nuxt Dojo
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/"> World </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
