import SectionTitle from "./SectionTitle";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-primary-gray-light py-16">
      <SectionTitle title={"Contact"} />
      <div className="mx-auto flex flex-col items-center max-w-[800px] px-4 sm:px-10 mt-16">
        <p data-aos="fade-up" data-aos-delay="200" className="text-center text-sm md:text-base text-gray font-light">
          Feel free to reach out to me for inquiries, collaborations, or just to say hello! I am always eager to connect
          and discuss exciting opportunities. You can reach me via email at ahmed.sinanovic.20@size.ba or with any of
          the social apps below.
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-center text-sm md:text-base text-gray font-light pt-6"
        >
          Looking forward to hearing from you!
        </p>
        <div data-aos="fade-up" data-aos-delay="200">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Contact;
