import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as GoIcons from "react-icons/go"
import * as MdIcons from "react-icons/md"
import * as GiIcons from "react-icons/gi"
import { motion } from "framer-motion"
import logo from '../img/logo.png'

const Navbar = () => {

     const location = useLocation()
     const actualURL = location.pathname

     return (
          <div >
               <nav className="md:mt-10 lg:text-xl uppercase">
                    <motion.div className="mb-3 flex items-center justify-center"
                         whileHover={{ scale: 1.2, rotate: 360 }}
                         transition={{ duration: 0.5 }}
                    >
                         <img src={logo} className="h-24 w-24" />
                    </motion.div>
                    <Link to="/" className={`${actualURL === '/' ? 'bg-cyan-700' : 'text-white'}  
                     flex mt-2 hover:bg-cyan-700 rounded-md sm:py-4 `}
                    ><AiIcons.AiFillHome /><span className="ml-3">Inicio</span></Link>

                    <Link to="/skills" className={`${actualURL === '/skills' ? 'bg-cyan-700' : 'text-white'}  
                     flex mt-5 hover:bg-cyan-700 rounded-md sm:py-4`}
                    ><GiIcons.GiSkills /> <span className="ml-3">Habilidades</span></Link>

                    <Link to="/studies" className={`${actualURL === '/studies' ? 'bg-cyan-700' : 'text-white'}  
                     flex mt-5 hover:bg-cyan-700 rounded-md sm:py-4`}
                    ><IoIcons.IoMdSchool /><span className="ml-2">Educación</span></Link>

                    <Link to="/portfolio" className={`${actualURL === '/portfolio' ? 'bg-cyan-700' : 'text-white'}  
                     flex mt-5 hover:bg-cyan-700 rounded-md sm:py-4`}
                    ><GoIcons.GoBriefcase /><span className="ml-2">Portafolio</span></Link>

                    <Link to="/contact" className={`${actualURL === '/contact' ? 'bg-cyan-700' : 'text-white'}  
                     flex mt-5 hover:bg-cyan-700 rounded-md sm:py-4`}
                    ><MdIcons.MdContactPage /> <span className="ml-3">Contacto</span></Link>
               </nav>

          </div>
     )
}

export default Navbar