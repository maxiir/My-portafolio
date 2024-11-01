import { FaWhatsapp } from "react-icons/fa";

export const WhatsappButton = () => {
  return (
    <div className="flex justify-end w-full">
        <div className="fixed bottom-40 right-5 flex justify-center items-center cursor-pointer bg-green-500 rounded-full w-14 h-14 lg:w-20 lg:h-20 border-4 border-white z-50 hover:scale-105">
            <a href="https://wa.me/+542804658107"><FaWhatsapp className="text-white text-3xl lg:text-5xl "/></a>
        </div>
    </div>
  )
}

