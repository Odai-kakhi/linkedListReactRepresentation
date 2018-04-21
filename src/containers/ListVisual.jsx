import React from "react";
import styled, { keyframes } from 'styled-components'
// import newList from '../actions/linkedList'
import newList from '../WriteHere'

const Node = styled.div` 
    width: 174px;
    height: 60px;
    // background-color: red;
    margin: 15px;
    float:left;
    overflow: hidden;
    vertical-align: middle;
    line-height: 60px;    
`;

const Element = styled.div` 
    width: 110px;
    background-color: #009933;
    float:left;
    text-align: center;
    vertical-align: middle;
    line-height: 60px;
    font-size: 1em;
    white-space: pre;
`;

const Next = styled.div` 
    width: 40px;
    background-color: #595959;
    float:left;
    text-align: center;
    vertical-align: middle;
    line-height: 60px;
    font-size: 1em;
`;

const Container = styled.div` 
    background-color: #d9d9d9;
    overflow: hidden;
    padding: 30px;
    text-align: center;
`;

const Arrow = styled.div` 
    font-size: 1.4em;
    color: red;
`;

class ListVisual extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: 'London'
        };
    }

    render() {
        const listSize = newList.size()
        const list = newList.getList()
        return (
            <Container>
                {list.map(item => (
                    (item.next != 'null') ? 
                        <div key={item}>
                            <Node>
                                <Element>
                                    {item.element}
                                </Element>
                                <Next>
                                    {item.next}
                                </Next>
                                <Arrow>&#x25B6;</Arrow>
                            </Node>
                        </div>
                    : 
                    <div key={item}>
                        <Node>
                            <Element>
                                {item.element}
                            </Element>
                            <Next>
                                {item.next}
                            </Next>
                            <Arrow>&#x25FE;</Arrow>
                        </Node>
                    </div>
                ))}
            </Container>
        )
    }
}

export default ListVisual