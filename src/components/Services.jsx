import { services } from "../constants/services";
import SectionTitle from "./SectionTitle";

const Services = () => {
  return (
    <section id="services" className="w-full bg-primary-gray-light pb-28">
      <SectionTitle title={"Services"} />
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-3 max-w-[1200px] px-4 sm:px-10 pt-16">
        {services.map((service) => (
          <div key={service.header} className="flex flex-col bg-gray bg-opacity-5 w-[300px] h-[300px]">
            <div>
              <img className="mx-auto py-4" width={50} height={50} src={service.icon} />
            </div>
            <div className="grow text-center p-4">
              <h2 className="text-white pb-2">{service.header}</h2>
              <p className="text-gray text-sm font-light">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
