import ContactPageCart from "@/components/contactpageCart";
import ContactPageInput from "@/components/contactpageInput";

const contactpagecartdata = [
  {
    title: "Address",
    text1: "1328 Oak Ridge Drive, Saint Louis, Missouri",
    text2: "",
  },
  {
    title: "Contact",
    text1: "313-332-8662",
    text2: "info@email.com",
  },
];
export default function Contact() {
  return (
    <div className="px-64 py-24">
      <div className="flex flex-col gap-y-5">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p className="text-gray-600 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <div className="flex flex-row justify-between w-full gap-x-10">
          {contactpagecartdata.map(({ title, text1, text2 }) => (
            <ContactPageCart title={title} text1={text1} text2={text2} />
          ))}
        </div>
        <ContactPageInput />
      </div>
    </div>
  );
}
