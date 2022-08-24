import React from "react";
import '../components/body.css'
import logo from './logo.png'

const Body = () => {
    return (
        <section>
            <nav>
                <div className="nav__container">
                    <img className="logo" src={logo} alt="" />
                    <ul className="nav__links">
                        <li>
                            <a href="#" className="nav__link">HOME</a>
                        </li>
                        <li>
                            <a href="#" className="nav__link">FILMS</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}

export default Body;