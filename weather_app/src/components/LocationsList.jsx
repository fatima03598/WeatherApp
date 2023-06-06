export default function LocationsLists({ options, onSelectedLocation }) {
  if (options.length === 0) {
    return null;
  }

  const listItems = options.map((option) => (
    <li
      key={option.id}
      onClick={() => onSelectedLocation(option)}
    >
      <button>
        {option.name}, {option.country}
      </button>
    </li>
  ));
  return (
    <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
      {listItems}
    </ul>
  );
}
