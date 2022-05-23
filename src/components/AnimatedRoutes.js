import { Routes, Route, useLocation } from "react-router-dom";
import Main from "../layout/Main";
import Contact from "../pages/Contact"
import Portfolio from "../pages/Portfolio"
import Skills from "../pages/Skills"
import Studies from "../pages/Studies"
import About from "../layout/About"
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Main />}>
                    <Route index element={<About />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="studies" element={<Studies />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes