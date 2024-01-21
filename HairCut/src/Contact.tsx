import  Salon from "/salon.png"

const Contact = () => {
  return (
    <div className="bg-custom-cream container mx-auto my-8 lg:w-4/5 xl:w-4/5 p-8 shadow-sm rounded-sm flex-column items-center justify-center ">
    <img
      className="h-64 w-full object-cover"
      src={Salon}
      alt="Salon de coiffure haut de gamme avec deux bacs à shampooing en céramique blanche et robinets chromés sur chaises noires, rangée de bouteilles de shampoing sur étagère noire, ambiance luxueuse et moderne."
    />
   <div className="flex flex-wrap items-center mt-4">
        <div className="w-full md:w-1/2">
          <div className="text-custom-brown font-open font-semibold text-4xl my-8">
            Get in touch with us!
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-custom-dark font-open text-justify text-sm md:text-base">
            We'd love to hear from you. Whether you need to book an appointment or have a question, our team is here to help. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>
  </div>
);
};



export default Contact