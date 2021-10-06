import styled from 'styled-components';

import { white, gray } from '../../style/colors'

import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    width: 100%;
    height: 100vh;
    background: rgb(38,38,73);
    background: radial-gradient(circle, rgba(38,38,73,1) 0%, rgba(39,39,73,1) 0%, rgba(25,25,50,1) 53%);
    padding: 5px;

    display: flex;
    gap: 5px;
`

export const Aside = styled.aside`
    min-width: 200px;
    height: 100%;
    border: 5px solid ${gray};
    border-radius: 30px;

    padding: 50px 0;

    position: relative;

    ul{
        width: 100%;
        margin-left: 20px;
        li{
            width: 100%;
            margin-bottom: 20px;
            cursor: pointer;
            font-size: 1.1em;
            font-weight: 700;

            a{
                color: ${gray};
                text-decoration: none;
            }
        }

        li:hover{
            a{
                color: ${white}
            }
        }
    }

    #icons-container-nav{
        width: 100%;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        overflow: visible;

        position: absolute;
        bottom: 40px;

        .social-media-icons{
            width: 35px;
            height: 35px;
            cursor: pointer;
        }
    }
`

export const Main = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    gap: 5px;

    padding: 5px 0;

    #project-list{
        width: 40%;
        ul{

            margin: 10px auto;
            max-width: 400px;
            text-align: center;
            list-style: none;

            li{
                font-size: 1.3em;
                cursor: pointer;
                color: ${gray}
            }

            li:hover{
                color: ${white}
            }
        }
    }

    #project-apresentation-container{
        width: 60%;
        height: 60%;
        border: 5px solid ${gray};
        border-radius: 30px;

        padding: 30px;

        background: rgba(255, 255, 255, .1);

        #image-project-container{
            width: 100%;
            height: 70%;

            img{
                width: 100%;
                border-radius: 10px;
                margin-bottom: 20px;
            }

            a{
                cursor: pointer;
            }
        }
    }
`