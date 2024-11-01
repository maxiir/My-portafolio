import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { FaCode } from "react-icons/fa";




export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className="pt-10  lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <FaCode className="text-xl"/>
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  VisionWeb
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Trelew - Chubut
              </p>
              <p className="my-5 text-white text-center lg:text-left">Seguime en las redes sociales:</p>
              <div className="w-36 mx-auto text-center lg:text-left lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] outlined-button"
                  href="https://www.facebook.com/profile.php?id=61567433843468"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="https://www.instagram.com/vision_web_innovations/"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
            <p className="text-slate-400 text-center text-sm mx-5 pb-5 lg:text-lg lg:mt-10">Desarrollado por VisionWeb © 2024 - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};
