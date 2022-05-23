import * as MdIcons from "react-icons/md"
import * as BsIcons from "react-icons/bs"
import * as SiIcons from "react-icons/si"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: window.innerWidth, transition: { duration: 0.2, delay: 0.1 } }}
    >
      <motion.h1 className=" text-blue-700 font-bold text-3xl text-center mt-5 uppercase"
        initial={{ y: -200 }}
        animate={{ y: -2 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
      >Contacto
      </motion.h1>
      <div className="lg:px-16 px-6">
        <motion.div className="mt-10 grid grid-cols-1 bg-gray-300 shadow-md rounded-lg sm:py-8 text-center hover:bg-blue-500"
          whileHover={{ scale: 1.1 }}
        >
          <div className="text-5xl mx-auto my-auto text-cyan-500"><MdIcons.MdEmail /></div>
          <div >
            <p className="font-bold lg:text-xl uppercase ">Email:</p>
            <p className="">wilmerlopezcespedes@gmail.com</p>
          </div>
        </motion.div>

        <motion.div className="mt-10 grid grid-cols-1 bg-gray-300 shadow-md rounded-lg sm:py-8 text-center hover:bg-blue-500"
          whileHover={{ scale: 1.1 }}
        >
          <div className="text-5xl mx-auto my-auto text-cyan-500"><BsIcons.BsFillTelephonePlusFill /></div>
          <div className="">
            <p className="font-bold sm:text-xl uppercase">Teléfono</p>
            <p>CR: (506+) 85370172</p>
          </div>
        </motion.div>

        <motion.div className="mt-10 grid grid-cols-1 bg-gray-300 shadow-md rounded-lg sm:py-8 text-center hover:bg-blue-500 mb-5"
          whileHover={{ scale: 1.1 }}
        >
          <div className="text-5xl mx-auto my-auto text-cyan-500"><SiIcons.SiGooglemaps /></div>
          <div className="">
            <p className="font-bold sm:text-xl uppercase">Dirección</p>
            <p>Costa Rica, Puntarenas, Golfito, Río Claro, 75 metros norte de la Supervisión Escolar</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact