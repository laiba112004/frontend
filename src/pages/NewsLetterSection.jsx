


import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="max-w-full flex justify-center px-4 sm:px-6 lg:px-20 py-10">
     <section className="bg-black text-white w-full max-w-full py-10 px-2 sm:px-4 md:px-6 lg:px-8 text-center shadow-lg">

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase mb-4">
          Be the First
        </h2>
        <p className="text-sm sm:text-base mb-6">
          New arrivals. Exclusive previews. First access to sales. Sign up to stay in the know.
        </p>
        <form className="flex  flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full  sm:w-[220px]  px-4 py-2 bg-white text-black "
          />
          <button
            type="submit"
            className="border border-white text-white px-6 py-2 hover:bg-white hover:text-black transition duration-300"
          >
            SIGN UP
          </button>
        </form>
      </section>
    </div>
  );
};

export default NewsletterSection;
