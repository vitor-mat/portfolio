import React, { useState } from 'react';

import { Container, Aside, Main } from './style';

import { Link } from 'react-router-dom'

import linkedinImg from '../../assets/linkedin_icon.png'
import instagramImg from '../../assets/instagram_icon.png'
import emailImg from '../../assets/email_icon.png'
import githubImg from '../../assets/github_icon.png'
import btnAccessgroundImg from '../../assets/dropdown_background.png'


import { motion } from 'framer-motion';

import { projectList } from '../../db/project_list';

const containerVariants = {
    hidden: {
        opacity: 0,
        y: '-100vh',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
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
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1.7,
        }
    },
    hover: {
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
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 2,
        }
    },
    hover: {
        scale: 1.1,
        originX: 0,
        transition: {
            yoyo: Infinity
        }
    }
}

const contactIconsContainerVariants = {
    hidden: {
        y: '-10vh',
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 1.5
        }
    }
}

const contactIconsVariants = {
    hover: {
        y: -10,
        transition: {
            yoyo: Infinity
        }
    }
}

export const Projects = () => {

    let [projectImg, setProjectImg] = useState(projectList[0].image)
    let [projectLink, setProjectLink] = useState(projectList[0].link)

    return(
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
                        <Link to='/'>
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
                <section id="project-list">
                    <ul>
                        {projectList.map((value, index) => {
                            return(
                                <li key={value.indice}>{`${value.indice} ${value.name}`}</li>
                            )
                        })} 
                    </ul>                    
                </section>
                <section id="project-apresentation-container">
                        <div id="image-project-container">
                            <img src={projectImg} alt="Project Iamge" />
                            <div id="access-btn-div">
                                <a  href={projectLink} target="_blank">
                                    <span> Acessar </span>                                    
                                    <img src={btnAccessgroundImg} />
                                </a>
                            </div>
                            <div id="description-container">
                                <p id="description-text">Descrição: {projectList[0].description}</p>
                            </div>
                            <div>
                                <p>{projectList[0].tags}</p>
                            </div>
                        </div>
                </section>
            </Main>
        </Container>
    )
}