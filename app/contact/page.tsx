import React from "react";
import "./contact.css";
function Contact() {
  return (
    <section className="my-5 md:my-8 w-full relative flex justify-start items-center ">
      <article className="w-[95%] md:w-[90%] lg:w-[80%]  mx-auto p-4 glass">
        <h1 className="text-xl md:text-2xl lg:text-4xl mb-4 font-black text-white text-shadow">
          Contact Us
        </h1>
        <form action="" className="my-5 w-full flex flex-col  gap-5 md:gap-8">
          <div className="flex flex-col lg:flex-row gap-5 md:gap-10 w-full text-xs md:text-lg  lg:w-[80%] mx-auto justify-between lg:items-center font-semibold text-slate-950">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1  focus:shadow-xl px-2 md:px-4 py-2 outline-none border-b-4 border-violet-600 bg-blue-100 rounded-tr-md rounded-tl-md   placeholder:text-slate-950/25  "
            />

            <input
              type="text"
              placeholder="Second Name"
              className="flex-1 focus:shadow-xl px-2 md:px-4 py-2 outline-none border-b-4 border-blue-500 bg-blue-100 rounded-tr-md rounded-tl-md   placeholder:text-slate-950/25  "
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-5 md:gap-10 w-full text-xs md:text-lg  lg:w-[80%] mx-auto justify-between lg:items-center font-semibold text-slate-950">
            <input
              type="mail"
              placeholder="exemple@exemple.com"
              className="flex-1 focus:shadow-xl px-2 md:px-4 py-2 outline-none border-b-4 border-indigo-400 bg-blue-100 rounded-tr-md rounded-tl-md   placeholder:text-slate-950/25  "
            />

            <input
              type="tel"
              placeholder="77-77-77-7-77"
              className="flex-1 focus:shadow-xl px-2 md:px-4 py-2 outline-none border-b-4 border-sky-500 bg-blue-100 rounded-tr-md rounded-tl-md   placeholder:text-slate-950/25  "
            />
          </div>
          <div className="flex  gap-10 w-full lg:w-[80%] mx-auto justify-between items-center text-sm md:text-lg font-semibold text-slate-950">
            <textarea
              placeholder="Your Message"
              className="flex-1 h-[100px] md:h-[200px]  resize-none focus:shadow-xl px-2 md:px-4 py-2 outline-none border-b-4 border-indigo-800 bg-blue-100 rounded-tr-md rounded-tl-md  placeholder:text-slate-950/25  "
            />
          </div>
          <div className="flex  w-full  lg:w-[80%] lg:mx-auto ">
            <button
              type="submit"
              className="rounded-xl  text-shadow text-white text-sm md:text-lg lg:text-xl font-black px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-blue-400 to-violet-500"
            >
              Send
            </button>
          </div>
        </form>
      </article>
      <div className="h-[150px] md:h-[250px] lg:h-[290px] w-[150px] md:w-[250px] lg:w-[290px] -z-20  bg-gradient-to-br rounded-full from-cyan-300 via-sky-500 to-blue-700 absolute top-4 left-4"></div>
      <div className="h-[150px] md:h-[250px] lg:h-[290px] w-[150px] md:w-[250px] lg:w-[290px] -z-20  bg-gradient-to-br rounded-full from-fuchsia-600 to-indigo-800 via-purple-600 absolute bottom-4 right-4"></div>
    </section>
  );
}

export default Contact;
