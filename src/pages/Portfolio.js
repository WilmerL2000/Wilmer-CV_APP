import React from 'react'
import { motion } from "framer-motion"
import py_1 from '../img/Proy-1.png'
import py_2 from '../img/Proy-2.png'
import py_3 from '../img/Proy-3.png'
import py_4 from '../img/Proy-4.png'


const Portfolio = () => {
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
      >Portafolio
      </motion.h1>
      <div className="lg:px-16 px-6">
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-5 bg-gray-300 shadow-md rounded-lg sm:py-8 p-4">
          <motion.div className="flex items-center justify-center sm:ml-4 p-5 mb-5"
            whileHover={{ scale: 1.2 }}
          >
            <img src={py_1} className="lg:h-auto lg:w-auto sm:h-44 h-40 w-80 rounded-lg" />
          </motion.div>
          <div className="lg:mx-auto lg:ml-10">
            <div className="ml-7 mb-5 px-4">
              <motion.div className="mb-7"
                whileHover={{ scale: 1.1, originX: 0, color: '#003785' }}
              >
                <p className="font-bold uppercase">Nombre:</p>
                <span>Distribuciones Nacionales</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, originX: 0, color: '#003785' }}
              >
                <p className="font-bold uppercase">Descripción:</p>
                <span>Proyecto con React, Bootstrap y Strapi API desplegado con Heroku</span>
              </motion.div>
            </div>
            <div className="ml-7 mb-5 px-4">
              <motion.div className="mb-7"
                whileHover={{ scale: 1.1, originX: 0, color: '#003785' }}
              >
                <p className="font-bold uppercase">Usuario:</p>
                <span>test</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, originX: 0, color: '#003785' }}
              >
                <p className="font-bold uppercase">Contraseña:</p>
                <span>test1234</span>
              </motion.div>
            </div>
            <div className="text-center">
              <motion.a target="_blank" type="button" className="bg-blue-500 hover:bg-blue-700 text-white 
              font-bold py-2 px-10 border border-blue-700 rounded uppercase" href="https://distribuciones-nacionales.netlify.app"
                whileHover={{ scale: 1.3 }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              >Ver</motion.a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-5 bg-gray-300 shadow-md rounded-lg sm:py-8 p-4 mb-6">
          <motion.div className="flex items-center justify-center sm:ml-4 p-5 mb-5"
            whileHover={{ scale: 1.2 }}
          >
            <img src={py_2} className="lg:h-auto lg:w-auto sm:h-44 h-40 w-80 rounded-lg" />
          </motion.div>
          <div className="lg:mx-auto lg:ml-10">
            <div className="ml-7 mb-5 px-4">
              <motion.div className="mb-7"
                whileHover={{ scale: 1.1, originX: 0, color: '#003785' }}
              >
                <p className="font-bold uppercase">Nombre:</p>
                <span>Seguimientos de Pacientes Veterinaria</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, originX: 0, color: '#003785' }}
              >
                <p className="font-bold uppercase">Descripción:</p>
                <span>Proyecto con React, Tailwind y LocalStogare</span>
              </motion.div>
            </div>

            <div className="text-center">
              <motion.a target="_blank" type="button" className="bg-blue-500 hover:bg-blue-700 text-white 
              font-bold py-2 px-10 border border-blue-700 rounded uppercase" href="https://citas-react-vive.netlify.app"
                whileHover={{ scale: 1.3 }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              >Ver</motion.a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-5 bg-gray-300 shadow-md rounded-lg sm:py-8 p-4 mb-6">
          <motion.div className="flex items-center justify-center sm:ml-4 p-5 mb-5"
            whileHover={{ scale: 1.2 }}
          >
            <img src={py_3} className="lg:h-auto lg:w-auto sm:h-44 h-40 w-80 rounded-lg" />
          </motion.div>
          <div className="lg:mx-auto lg:ml-10">
            <div className="ml-7 mb-5 px-4">
              <motion.div className="mb-7"
                whileHover={{ scale: 1.1, originX: 0, color: '#003785' }}
              >
                <p className="font-bold uppercase">Nombre:</p>
                <span>Buscador de Clima</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, originX: 0, color: '#003785' }}
              >
                <p className="font-bold uppercase">Descripción:</p>
                <span>Proyecto con React y Context API</span>
              </motion.div>
            </div>

            <div className="text-center">
              <motion.a target="_blank" type="button" className="bg-blue-500 hover:bg-blue-700 text-white 
              font-bold py-2 px-10 border border-blue-700 rounded uppercase" href="https://clima-apps.netlify.app"
                whileHover={{ scale: 1.3 }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              >Ver</motion.a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-5 bg-gray-300 shadow-md rounded-lg sm:py-8 p-4 mb-6">
          <motion.div className="flex items-center justify-center sm:ml-4 p-5 mb-5"
            whileHover={{ scale: 1.2 }}
          >
            <img src={py_4} className="lg:h-auto lg:w-auto sm:h-44 h-40 w-80 rounded-lg" />
          </motion.div>
          <div className="lg:mx-auto lg:ml-10">
            <div className="ml-7 mb-5 px-4">
              <motion.div className="mb-7"
                whileHover={{ scale: 1.1, originX: 0, color: '#003785' }}
              >
                <p className="font-bold uppercase">Nombre:</p>
                <span>Buscador de bebidas por categorías</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, originX: 0, color: '#003785' }}
              >
                <p className="font-bold uppercase">Descripción:</p>
                <span>Proyecto con React, React-Bootstrap y Context API</span>
              </motion.div>
            </div>

            <div className="text-center">
              <motion.a target="_blank" type="button" className="bg-blue-500 hover:bg-blue-700 text-white 
              font-bold py-2 px-10 border border-blue-700 rounded uppercase" href="https://bebidasappi.netlify.app"
                whileHover={{ scale: 1.3 }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              >Ver</motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Portfolio