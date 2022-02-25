import styled from '@emotion/styled';
import colors from './colors';

const RoundButton =  styled.button`
    background-color: ${props => colors[props.color] ? colors[props.color][0] : colors.default[0]};
    color: white;
    font-weight: bold;
    padding: 8px;
    border: 0em;
    border-radius: 1em;
    
    &:focus {
        background: ${props => colors[props.color] ? colors[props.color][1] : colors.default[1]};
    }
    &:hover {
        background: ${props => colors[props.color] ? colors[props.color][1] : colors.default[1]};
    }
`
export default RoundButton;