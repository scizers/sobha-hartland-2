import ContactForm from "./ContactForm";

const Payments = () => {
  return (
    <section className=" mx-auto">
      <div className=" relative mx-auto w-full bg-[#f8f4ee] lg:bg-white">
        <div className="lg:w-[40%] mx-auto bg-[#f8f4ee] lg:bg-[#ededed] py-10">
          <div className="hidden lg:block">
            <ContactForm bgColor="#ededed" />
          </div>

          <div className="lg:hidden">
            <ContactForm bgColor="#f8f4ee" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payments;
