import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io"
import { motion } from "framer-motion"

const Studies = () => {
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
      >Educación
      </motion.h1>
      <div className="lg:px-16 px-6">
        <motion.div className="mt-10 grid grid-cols-3 bg-gray-300 shadow-md rounded-lg sm:py-8 text-center hover:bg-blue-500"
          whileHover={{ scale: 1.1 }}
        >
          <div className="text-6xl mx-auto my-auto text-lime-600"><FaIcons.FaSchool /></div>
          <div >
            <p className="font-bold sm:text-xl uppercase">Educación Primaria</p>
            <p className="">2007-2012</p>
          </div>
          <div>
            <p className="font-bold sm:text-xl uppercase">Escuela Central de Río Claro</p>
            <p>Costa Rica</p>
          </div>
        </motion.div>

        <motion.div className="mt-10 grid grid-cols-3 bg-gray-300 shadow-md rounded-lg sm:py-8 text-center hover:bg-blue-500"
          whileHover={{ scale: 1.1 }}
        >
          <div className="text-6xl mx-auto my-auto text-lime-600"><IoIcons.IoIosSchool /></div>
          <div className="">
            <p className="font-bold sm:text-xl uppercase">Educación Secundaria</p>
            <p>2013-2018</p>
          </div>
          <div>
            <p className="font-bold sm:text-xl uppercase">Colegio Técnico Profesional Guaycara</p>
            <p>Costa Rica</p>
          </div>
        </motion.div>

        <motion.div className="mt-10 grid grid-cols-3 bg-gray-300 shadow-md rounded-lg sm:py-8 text-center hover:bg-blue-500 mb-5"
          whileHover={{ scale: 1.1 }}
        >
          <div className="text-6xl mx-auto my-auto text-lime-600"><FaIcons.FaUniversity /></div>
          <div className="">
            <p className="font-bold sm:text-xl uppercase">Bachillerato en Informática Empresarial</p>
            <p>2019-2022</p>
          </div>
          <div>
            <p className="font-bold sm:text-xl uppercase">Universidad de Costa Rica</p>
            <p>Costa Rica</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Studies