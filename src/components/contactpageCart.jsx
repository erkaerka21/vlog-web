const ContactPageCart = ({ title, text1, text2 }) => {
  return (
    <div className="border-solid border-2 border-gray-300 rounded-xl p-2 w-1/2 gap-y-2">
      <h1 className="text-lg font-bold">{title}</h1>
      <div className="text-gray-600 w-4/5">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
};
export default ContactPageCart;
