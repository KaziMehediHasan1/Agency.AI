import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";
import Title from "./Title";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      desc: "Content marketing is a strategic marketing approach focused on creating and distributing valuable, relevant...",
      icon: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      desc: "Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes.",
      icon: assets.content_icon,
    },
    {
      title: "Social Media Marketing",
      desc: "Social media marketing is the use of social media platforms and websites to promote a product or service.",
      icon: assets.social_icon,
    },
  ];
  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt="bg-image"
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default Services;
