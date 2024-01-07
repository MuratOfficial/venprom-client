import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppWidget: React.FC = () => {
  const phoneNumber = "77773433718"; // Replace with your WhatsApp phone number

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="fixed xxs:bottom-4 xs:bottom-8 lg:bottom-8 lg:right-14 lg:left-auto xxs:right-2 xs:left-10 w-fit ">
      <button
        onClick={openWhatsApp}
        className=" text-green-400 relative hover:text-blue-500 transition delay-100 duration-500 hover:scale-125 hover:-translate-x-4 hover:-translate-y-4"
      >
        <div className="rounded-full w-10 h-10 left-3 bottom-3  animate-ping-slow  -z-10 bg-neutral-50 absolute"></div>
        <div className="rounded-full w-10 h-10 left-2 bottom-2   -z-10 bg-neutral-50 absolute"></div>
        <IoLogoWhatsapp size={60} />
      </button>
    </div>
  );
};

export default WhatsAppWidget;
