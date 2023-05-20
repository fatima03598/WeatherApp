import { Navbar } from "flowbite-react";

export default function NavBar() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand>
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="/"
          active={window.location.pathname === "/"}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="/world"
          active={window.location.pathname === "/world"}
        >
          World
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
