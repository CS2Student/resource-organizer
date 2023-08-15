import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav>
                <a href="#" class="left">Aiden Hu</a>
                <ul class="menu">
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#">Resume</a></li>
                    <li>
                        <div class="media">
                            <a href="mailto: aidenyhu@gmail.com"><i class='bx bx-envelope' id='media-item'></i></a>
                            <a href="https://www.linkedin.com/in/aidenhu"><i class='bx bxl-linkedin-square' id='media-item'></i></a>
                            <a href="https://www.github.com/CS2Student"><i class='bx bxl-github' id='media-item'></i></a>
                        </div>
                    </li>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </>
    )
}

export default Navbar;