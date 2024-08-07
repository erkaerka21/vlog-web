export default function ContactPageInput() {
  return (
    <div className="bg-slate-100 p-9 rounded-lg flex flex-col gap-y-6 mt-10 mb-10">
      <h1 className="text-lg font-semibold">Leave a Message</h1>
      <div className="flex flex-col gap-y-7">
        <div className="flex flex-row justify-between">
          <input
            placeholder="Your Name"
            className="w-[45%] rounded-md px-3 py-1 border-solid border-2 border-gray-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 hover:border-sky-500"
          ></input>
          <input
            placeholder="Your Email"
            className="w-[45%] rounded-md px-3 py-1 border-solid border-2 border-gray-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 hover:border-sky-500"
          ></input>
        </div>
        <input
          placeholder="Subject"
          className="w-full rounded-md px-3 py-1 border-solid border-2 border-gray-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 hover:border-sky-500"
        ></input>
        <textarea
          placeholder="Write a message"
          className="w-full rounded-md px-3 py-1 min-h-32 border-solid border-2 border-gray-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 hover:border-sky-500"
        ></textarea>
      </div>
      <div className="flex items-start">
        <button className="py-2 px-4 bg-violet-500 text-white font-semibold text-sm rounded-xl">
          Send Message
        </button>
      </div>
    </div>
  );
}
