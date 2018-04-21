import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled, { keyframes } from 'styled-components'
import ListVisual from './ListVisual'


const MainDiv = styled.div` 
    color: white;
    height: 120px;
    margin-top: 0;
    line-height: 100px;
    padding: 0
`;

const Header = styled.div` 
    background-color: black;
    font-size: 1.5em;
    font-weight: 700;
    text-align: center;
    padding: 0;
`;

export default class ListBody extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
        }
    }

    render () {
        return (
            <MainDiv>
                <Header>
                    Data structure: Linked List
                </Header>
                <ListVisual />
            </MainDiv>
        )
    }
}