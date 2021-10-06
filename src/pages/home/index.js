import React, { useState } from 'react';

import { Container, Aside, Main } from './style';

import { Link } from 'react-router-dom'

import linkedinImg from '../../assets/linkedin_icon.png'
import instagramImg from '../../assets/instagram_icon.png'
import emailImg from '../../assets/email_icon.png'
import githubImg from '../../assets/github_icon.png'
import fotoImg from '../../assets/foto.jpg'
import dropdownBackgroundImg from '../../assets/dropdown_background.png'
import dropdownArrowImg from '../../assets/dropdown_arrow.png'

import { motion } from 'framer-motion';

const containerVariants = {
    hidden:{
        opacity: 0,
        y: '-100vh',
    },
    visible:{
        opacity: 1,
        y: 0,
        transition:{
            type: "tween",
            delay: 0.5,
            duration: 0.5,
            when: "beforeChildren"
        }
    }
}

const navigationItemApresentationVariants = {
    hidden: {
        opacity: 0,
        x: '-100vh',
    },
    visible:{
        opacity: 1,
        x: 0,
        transition:{
            delay: 1.7,
        }
    },
    hover:{
        scale: 1.1,
        originX: 0,
        transition: {
            yoyo: Infinity
        }
    }
}

const navigationItemProjectsVariants = {
    hidden: {
        opacity: 0,
        x: '-100vh',
    },
    visible:{
        opacity: 1,
        x: 0,
        transition:{
            delay: 2,
        }
    },
    hover:{
        scale: 1.1,
        originX: 0,
        transition: {
            yoyo: Infinity
        }
    }
}

const section1ContentVariants = {
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1,
        transition: {
            delay: 2.5,
            duration: 1
        }
    }
}

const section2ContentVariants = {
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1,
        transition: {
            delay: 3,
            duration: 1
        }
    }
}

const contactIconsContainerVariants = {
    hidden:{
        y: '-10vh',
        opacity: 0,
    },
    visible:{
        y: 0,
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 1.5
        }
    }
}

const contactIconsVariants = {
    hover:{
        y: -10,
        transition:{
            yoyo: Infinity
        }
    }
}

const dropDownActiveVariant = {
    disable:{
        rotateZ: 0,
        transition:{
            type: "tween"
        }
    },
    active:{
        rotateZ: -90,
        transition:{
            type: "tween"
        }
    }
}

export const Home = () => {

    let [dropdownAnimate, setDropDownAnimate] = useState(false)

    return (
        <Container
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Aside>
                <ul>
                    <motion.li
                        variants={navigationItemApresentationVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"                        
                    >
                        <Link to='#'>
                            APRESENTAÇÃO
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={navigationItemProjectsVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"   
                    >
                        <Link to='#'>PROJETOS</Link>
                    </motion.li>
                </ul>
                <motion.div id="icons-container-nav"
                    variants={contactIconsContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.img className="social-media-icons" src={linkedinImg} alt="LikedIn Icon"
                        variants={contactIconsVariants}
                        whileHover="hover"
                    />
                    <motion.img className="social-media-icons" src={instagramImg} alt="LikedIn Icon"
                        variants={contactIconsVariants}
                        whileHover="hover"                    
                    />
                    <motion.img className="social-media-icons" src={emailImg} alt="LikedIn Icon"
                        variants={contactIconsVariants}
                        whileHover="hover"
                    />
                    <motion.img className="social-media-icons" src={githubImg} alt="LikedIn Icon"
                        variants={contactIconsVariants}
                        whileHover="hover"                    
                    />
                </motion.div>
            </Aside>
            <Main>
                <section id="section-1">
                    <motion.img src={fotoImg} alt="Uma imagem impressionante"
                        variants={section1ContentVariants}
                        initial="hidden"
                        animate="visible"
                    />
                    <motion.ul
                        variants={section1ContentVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <li>Nome: Vitor Mateus Alves da Silva</li>
                        <li>Idade: 24 anos</li>
                        <li>
                            Descrição: Sou um desenvolvedor web, apesar de me focar 
                            no fron-end, também desenvolvo aplicações full stack, e 
                            atualmente foco na stack do javascript com react js e node 
                            js. Me candidato a essa vaga com o intuito de adentrar no 
                            mercado de trabalho e espero poder crescer junto com vocês 
                            enquanto contribuo com o meu melhor.
                        </li>
                    </motion.ul>
                </section>
                <section id="section-2">
                    <motion.div id ="dropdown-container"
                        variants={section2ContentVariants}
                        initial="hidden"
                        animate="visible"                    
                    >
                        <img id="dropdown-background-img" src={dropdownBackgroundImg} alt="dropdown background image" />
                        <motion.img id="dropdown-arrow-img" src={dropdownArrowImg} alt="dropdown arrow image"
                            variants={dropDownActiveVariant}
                            animate={dropdownAnimate ? "active" : "disable"}

                            onClick={() => {
                                setDropDownAnimate(!dropdownAnimate)
                            }}
                        />
                        <span id="dropdown-text">Hard Skills</span>
                    </motion.div>
                    <motion.div id="table-container"
                        variants={section2ContentVariants}
                        initial="hidden"
                        animate="visible"                    
                    >
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Hard Skill
                                    </th>
                                    <th>
                                        Nível
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Javascript
                                    </td>
                                    <td>
                                        Muita confiança
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>
                </section>
            </Main>
        </Container>
    )
}