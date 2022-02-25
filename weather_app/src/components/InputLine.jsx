import styled from '@emotion/styled';
import colors from './colors';

const InputLine =  styled.input`
    width: ${props => props.width};
    color:${props => props.textColor};
    font-weight: bold;
    border-width: 0px 0px 2px 0px;
    border-bottom-color: ${props => colors[props.color] ? colors[props.color][0] : colors.default[0]};
    border-bottom-color: ${undefined};
    border-style: solid;
    background:inherit;
    text-align: center;
    
    &:focus {
        outline: none;
        border-bottom-color: ${props => colors[props.color] ? colors[props.color][1] : colors.default[1]};
    }
`
export default InputLine;