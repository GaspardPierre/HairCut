import React from 'react';
import Salon from "/salon.png";

const Contact = () => {
  return (
    <div className="bg-custom-cream container mx-auto my-2 lg:w-4/5 xl:w-4/5 p-8 shadow-sm rounded-sm">
      <img
        className="h-64 w-full object-cover"
        src={Salon}
        alt="Salon de coiffure"
      />
      <div className="flex flex-wrap items-center mt-4">
        <div className="w-full flex justify-center">
          <div className="text-hair-hover font-open font-semibold text-4xl my-8">
            Get in touch with us!
         
        </div>
        </div>
        <div className="w-full ">
          <p className="text-custom-dark font-open text-justify text-sm md:text-base mb-10">
            We'd love to hear from you. Whether you need to book an appointment or have a question, our team is here to help. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        
          {/* Form Starts Here */}
       
          <form className="space-y-6 w-100">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-custom-dark text-xs font-bold mb-2" htmlFor="first-name">
                  First Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first-name" type="text" placeholder="Jane"/>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-custom-dark text-xs font-bold mb-2" htmlFor="last-name">
                  Last Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="last-name" type="text" placeholder="Doe"/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-custom-dark text-xs font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="jane.doe@example.com"/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-custom-dark text-xs font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="tel" placeholder="123-456-7890"/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-custom-dark text-xs font-bold mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none" id="message" placeholder="Your message..."></textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3 text-right">
                <button className="shadow bg-hair-hover hover:bg-custom-dark focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                  Send Message
                </button>
              </div>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
