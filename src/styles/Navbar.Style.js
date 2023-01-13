
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 600;
    color: #fff;
    transition: 0.3s ease-in-out;

   &:hover,
   &:active {
        color: #17cf97;
    };
    
    &:active::after,
    &:hover::after{
        content: "";
        width: 30%;
        height: 2px;
        background: #17cf97;
        position: absolute;
        bottom: -4px;
        left: 20px;
    }
`;