import React from 'react'
import Me from '../img/me.jpg'
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div className="lg:px-16 px-6 mb-7"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: window.innerWidth, transition: { duration: 0.2, delay: 0.1 } }}
    >
      <div className="lg:text-xl bg-gray-300 shadow-md rounded-lg sm:py-8 py-5 mt-10 sm:grid sm:grid-cols-2 grid-rows-2">

        <motion.div className="sm:ml-6 mt-5 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
          <img src={Me} className="h-56 w-44 rounded-3xl " />
        </motion.div>

        <div className="ml-5 mt-5">
          <motion.div
            whileHover={{ scale: 1.2, originX: 0, color: '#003785' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <p className="font-bold uppercase ">Nombre completo: </p>
            <span>Wilmer Alesandro López Céspedes</span>
          </motion.div>

          <motion.div className="mt-5"
            whileHover={{ scale: 1.1, originX: 0, color: '#003785' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <p className="font-bold uppercase ">Fecha de nacimiento: </p>
            <span>29 de septiembre del 2000 </span>
          </motion.div>

          <motion.div className="mt-5"
            whileHover={{ scale: 1.1, originX: 0, color: '#003785' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <p className="font-bold uppercase ">Edad: </p>
            <span>21 años</span>
          </motion.div>

          <motion.div className="mt-5"
            whileHover={{ scale: 1.1, originX: 0, color: '#003785' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <p className="font-bold uppercase ">Residencia: </p>
            <span>Costa Rica</span>
          </motion.div>
        </div>

        <div className=" text-center mt-5 col-span-2 px-7">
          <motion.p className="font-bold uppercase "
            whileHover={{ scale: 1.2, color: '#003785' }}
          >Sobre mi</motion.p>
          <div className="text-justify mt-5">
            <p>Bienvenidos a todos aquellos que visiten mi página web. Como pueden observar, he querido dejar constancia no sólo de
              mi persona, sino también de mi experiencia profesional. Desde que empecé a prácticar desarrollo web, me llamó mucho la atención
              y es un ámbito en el que me quiero desarrollar. Mi afán es tener la posibilidad de seguir desarrollando mi experiencia en este sector. Y seguir creciendo exponencialmente en
              esta profesión.
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default About