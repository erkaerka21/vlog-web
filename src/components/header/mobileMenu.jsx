import { IoMenu } from "react-icons/io5";

export default function MobileMenuButton() {
  return (
    <div className="md:hidden">
      <button>
        <IoMenu className="text-2xl" />
      </button>
    </div>
  );
}
