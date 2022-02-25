import styled from '@emotion/styled';

const colors = {
    'blue': ['blue','rgb(0, 0, 255, 0.5)'],
    'orange':['rgb(242, 107, 5)', 'rgb(242, 107, 5, 0.5)']
}

const InputLine =  styled.input`
    width: ${props => props.width};
    border-width: 0px 0px 2px 0px;
    border-bottom-color: ${props => colors[props.color] ? colors[props.color][0] : 'black'};
    border-style: solid;
    background:inherit;
    text-align: center;
    
    &:focus {
        outline: none;
        border-bottom-color: ${props => colors[props.color] ? colors[props.color][1] : 'rgb(0, 0, 0, 0.5)'};
    }
`
export default InputLine;