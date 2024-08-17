import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const menuListFooter = [
  { text: "Home", link: "/" },
  { text: "Blog", link: "#Blog" },
  { text: "Contact", link: "/contact" },
];
const listFooter = [
  { text: "Term of Use", link: "/#Term of Use" },
  { text: "|", link: "" },
  { text: "Privacy Policy", link: "#Privacy Policy" },
  { text: "|", link: "" },
  { text: "Cookie Policy", link: "#Cookie policy" },
];
const Footer = () => {
  return (
    <div className="bg-slate-100 px-10 py-4 md:px-40 md:py-10">
      <div>
        <div className="flex flex-row justify-between">
          <div className="w-[320px]">
            <h1 className="font-extrabold text-xl mb-3">About</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div>
            <ul className="text-gray-600 flex flex-col gap-y-3">
              {menuListFooter.map((menu) => (
                <li>
                  <a href={menu.link}>{menu.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row gap-x-5">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
        <div className="my-5 text-gray-600">
          <p>
            <strong>Email</strong> : info@jstemplate.net
          </p>
          <p>
            <strong>Phone</strong> : 880 123 456 789
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-9 pt-8 border-solid border-2 border-gray-400 border-r-0 border-l-0 border-b-0 items-center ">
        <div className="flex flex-row items-center gap-x-1">
          <img src="Union.png" alt="logoFooter" className="w-8 h-8" />
          <div className="text-sm">
            <p>
              Meta<strong>Blog</strong>
            </p>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <ul className="flex flex-row text-sm text-gray-500 gap-x-4 items-center">
          {listFooter.map((list) => (
            <li>
              <a href="{list.link}">{list.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Footer;
