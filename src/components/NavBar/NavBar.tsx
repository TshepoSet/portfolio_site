import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router"
import HomePage from "../../pages/Home/HomePage"
import AboutMe from "../../pages/AboutMe/AboutMe"
import Services from "../../pages/Services/Services"
import Portfolio from "../../pages/Portfolio/Portfolio"
import { useEffect, useState } from "react"


function NavBar() {
    const [state, setState] = useState(false)
    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target as HTMLElement;
            if (!target.closest('.menu-btn')) {
                setState(false)
            }
        }
    })

    return (
        <Router>
            <div className="px-8">
                <nav className="flex items-center justify-between lg:px8">
                    <a className="logo" href="">
                        Sets Designs
                    </a>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <NavLink to='/' end>Home</NavLink>
                        <NavLink to='/about_me'>About me</NavLink>
                        <NavLink to='/services'>Services</NavLink>
                        <NavLink to='/portfolio'>Portfolio</NavLink>
                    </div>
                    <button>Contact</button>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about_me" element={<AboutMe />} />
                <Route path="services" element={<Services />} />
                <Route path="portfolio" element={<Portfolio />} />
            </Routes>

        </Router>


    )
}


export default NavBar