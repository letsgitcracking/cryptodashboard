import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../App/AppProvider';

const ConfirmedButonStyled = styled.div`
    margin: 20px;
    color: green;
    cursor: pointer;
`
export const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`

export default function() {
    return <AppContext.Consumer>
        {({confirmFavorites}) =>
        <CenterDiv>
            <ConfirmedButonStyled onClick={confirmFavorites}>
                Confirm Favorites    
            </ConfirmedButonStyled>
        </CenterDiv>
        }
    </AppContext.Consumer>;
}