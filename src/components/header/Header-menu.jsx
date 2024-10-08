const menuList = [
  { text: "Home", link: "/" },
  { text: "Blog", link: "/viewallblogpost" },
  { text: "Contact", link: "/contact" },
];
const MenuHeader = () => {
  return (
    <div className="hidden md:flex">
      <ul className="flex flex-row text-base text-gray-600 gap-x-6">
        {menuList.map((menu) => (
          <li>
            <a href={menu.link}>{menu.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MenuHeader;
