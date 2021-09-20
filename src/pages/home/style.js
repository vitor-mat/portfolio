import styled from 'styled-components';

import { gray } from '../../style/colors'

export const Container = styled.div`
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
`

export const Main = styled.main`
    width: 100%;
    height: 100%;
    border: 5px solid ${gray};
    border-radius: 30px;
`