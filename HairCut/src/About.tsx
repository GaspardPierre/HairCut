
import 'tailwindcss/tailwind.css';
import Customer from "/customer.png"
import Product from "/product.png" // Assurez-vous d'importer Tailwind CSS

const About = () => {
  return (
    <div className="mx-auto my-8 lg:w-4/5 xl:w-4/5 bg-[#F8F7F6] font-murecho min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-[#986C4A] font-open">
            We are a full-service salon.
          </h1>
          <p className="text-[#000000]">
            What’s special about your product, service, or company? Use this space to highlight the things that set you apart from your competition, whether it’s a special feature, a unique philosophy, or awards and recognition that you have received. Think of this as your elevator pitch to get the reader’s attention.
          </p>
        </div>
        <div className="flex -space-x-4 justify-center md:justify-start">
          <img
            src={Customer}
            alt="Woman adjusting her hair in a salon setting, showcasing the personal and attentive service customers can expect."
            className="rounded shadow-lg transform translate-x-2/4 "
          />
          <img
            src={Product}
            alt="Premium salon product bottle with a minimalist design, signifying the quality of products used."
            className="rounded shadow-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
