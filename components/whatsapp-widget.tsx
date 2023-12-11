import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppWidget: React.FC = () => {
  const phoneNumber = "77773433718"; // Replace with your WhatsApp phone number

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 left-10">
      <button
        onClick={openWhatsApp}
        className=" text-green-500 hover:text-blue-500 transition delay-100 duration-500 hover:scale-125 hover:translate-x-4 hover:-translate-y-4"
      >
        <IoLogoWhatsapp size={60} />
      </button>
    </div>
  );
};

export default WhatsAppWidget;
