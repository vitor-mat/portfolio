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
    flex-direction: column;
    gap: 5px;

    padding: 5px 0;

    #section-1{
        width: 100%;
        height: 40%;

        padding: 30px;

        display: flex;
        gap: 20px;

        border: 5px solid ${gray};
        border-radius: 30px;

        img{
            min-width: 171px;
            max-height: 250px;
            border-radius: 10px;
        }

        ul{
            li{
                color: ${white};
                text-align: justify;
                width: 100%;
                margin-bottom: 10px;
            }
        }
    }

    #section-2{
        width: 100%;
        height: 60%;

        padding: 30px;

        display: flex;
        flex-direction: column;
        gap: 20px;

        border: 5px solid ${gray};
        border-radius: 30px;

        #dropdown-container{
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: flex-end;

            #dropdown-background-img{
                height: 60px;
                cursor: pointer;
            }

            #dropdown-text{
                color: white;
                font-size: 1.7em;

                position: relative;
                top: 15px;
                right: 210px;
                cursor: pointer;
            }

            #dropdown-arrow-img{
                width: 20px;
                height: 24px;

                position: relative;
                top: 20px;
                right: 45px;
                cursor: pointer;
            }
        }

        #table-container{

            table{
                width: 50%;
                min-width: 400px;
                text-align: center;
                margin: 0 auto;

                thead{
                    height: 70px;

                    th{
                        font-size: 2em;
                    }
                }

                tbody{
                    tr{
                        td{
                            font-size: 1.1em;
                        }
                    }
                }
            }
        }
    }
`