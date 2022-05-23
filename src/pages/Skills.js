import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from "framer-motion"

const Skills = () => {

  const percentage = 66;

  return (
    <motion.div className="lg:px-16 px-6"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: window.innerWidth, transition: { duration: 0.2, delay: 0.1 } }}
    >
      <motion.h1
        className=" text-blue-700 font-bold text-3xl text-center mt-5 uppercase"
        initial={{ y: -200 }}
        animate={{ y: -2 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
      >
        Habilidades
      </motion.h1>
      <div className=" text-center mt-10 bg-gray-300 shadow-md rounded-lg sm:py-8 py-5 lg:px-16 px-6">
        <p className=" uppercase font-bold ">Habilidades personales</p>

        <div className=" grid grid-rows-5	mt-5 lg:px-5 ">
          <motion.div
            whileHover={{ scale: 1.1, color: '#003785' }}
          >
            <p className="text-left font-bold">Liderazgo </p>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-5">
              <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: '80%' }}> 80%</div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, color: '#003785' }}
          >
            <p className="text-left font-bold">Comunicación </p>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-5">
              <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: '85%' }}> 85%</div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, color: '#003785' }}
          >
            <p className="text-left font-bold">Motivación personal </p>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: '80%' }}> 80%</div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, color: '#003785' }}
          >
            <p className="text-left font-bold">Tomar decisiones </p>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: '75%' }}> 75%</div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, color: '#003785' }}
          >
            <p className="text-left font-bold">Adaptabilidad </p>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: '75%' }}> 75%</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className=" text-center mt-10 bg-gray-300 shadow-md rounded-lg sm:py-8 py-5 ">
        <p className=" uppercase font-bold ">Habilidades profesionales</p>
        <div className=" grid sm:grid-cols-3 grid-cols-2 mt-10">
          <motion.div className="flex items-center	justify-center flex-col mb-5"
            whileHover={{ scale: 1.2, color: '#003785' }}
          >
            <div className="h-20 w-20	mb-1  ">
              {<CircularProgressbar value={70} text="70%" />}
            </div>
            <p className=" font-bold">HTML/CSS </p>
          </motion.div>

          <motion.div className="flex items-center	justify-center flex-col mb-5"
            whileHover={{ scale: 1.2, color: '#003785' }}
          >
            <div className="h-20 w-20	mb-1  ">
              {<CircularProgressbar value={55} text="55%" />}
            </div>
            <p className=" font-bold">Javascript </p>
          </motion.div>

          <motion.div className="flex items-center	justify-center flex-col mb-5"
            whileHover={{ scale: 1.2, color: '#003785' }}
          >
            <div className="h-20 w-20	mb-1  ">
              {<CircularProgressbar value={30} text="30%" />}
            </div>
            <p className=" font-bold">React </p>
          </motion.div>

          <motion.div className="flex items-center	justify-center flex-col mb-5"
            whileHover={{ scale: 1.2, color: '#003785' }}
          >
            <div className="h-20 w-20	mb-1  ">
              {<CircularProgressbar value={60} text="60%" />}
            </div>
            <p className=" font-bold">Java </p>
          </motion.div>

          <motion.div className="flex items-center	justify-center flex-col mb-5"
            whileHover={{ scale: 1.2, color: '#003785' }}
          >
            <div className="h-20 w-20	mb-1  ">
              {<CircularProgressbar value={30} text="30%" />}
            </div>
            <p className=" font-bold">C# .Net </p>
          </motion.div>

          <motion.div className="flex items-center	justify-center flex-col mb-5"
            whileHover={{ scale: 1.2, color: '#003785' }}
          >
            <div className="h-20 w-20	mb-1  ">
              {<CircularProgressbar value={55} text="55%" />}
            </div>
            <p className=" font-bold">MySQL </p>
          </motion.div>
        </div>
      </div>

      <div className=" text-center mt-10 bg-gray-300 shadow-md rounded-lg sm:py-8 py-5 mb-7 lg:px-16 px-6 ">
        <p className=" uppercase font-bold ">Lenguaje</p>

        <motion.div className="mb-5 mt-5"
          whileHover={{ scale: 1.1 }}
        >
          <div className="flex justify-between mb-3 ">
            <span className="text-base font-bold dark ">Español (Nativo)</span>
            <span className="text-sm font-medium ">100%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full hover:bg-lime-600" style={{ width: '100%' }}></div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
        >
          <div className="flex justify-between mb-3">
            <span className="text-base font-bold dark">Inglés</span>
            <span className="text-sm font-medium ">60%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full hover:bg-lime-600" style={{ width: '60%' }}></div>
          </div>
        </motion.div>
      </div>
    </motion.div >
  )
}

export default Skills