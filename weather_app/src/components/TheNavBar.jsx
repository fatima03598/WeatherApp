export default function TheNavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="dropdown md:hidden">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/world">World</a>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl"
          href="/"
        >
          daisyUI
        </a>
      </div>
      <div className="hidden md:flex flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/world">World</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
