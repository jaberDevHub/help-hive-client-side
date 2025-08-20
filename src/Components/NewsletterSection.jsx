import React from "react";

const NewsletterSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#dbe0ef] via-[#94a3df] to-[#e7edff] py-20 px-4 shadow-inner mx-auto w-[97%] rounded-lg my-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Stay Connected with Us
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Subscribe to get the latest updates on events, volunteering, and
          impact stories. We promise not to spam you!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:max-w-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button className="btn btn-primary w-full sm:w-auto px-8">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
