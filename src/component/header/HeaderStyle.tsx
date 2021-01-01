import styled from "styled-components";

export const NamePage = styled.div`
    font-size: 22px;
    font-weight: 600; 
    margin-bottom: 14px;
    color: #009C4E;
    transition: 0.2s ease-in;
    @media (max-width: 600px) {
        font-size: 18px;
        transition: 0.2s ease-in;
    }
`;

export const Header = styled.div`
    font-size: 1.7em;  
    font-weight: 500;
    transition: 0.2s ease-in;
    @media (max-width: 600px) {
        font-size: 1.4em; 
        margin-left: 10px; 
        transition: 0.2s ease-in;
    }
`;

export const HeaderForm = styled.div`
    margin-left: 30px; 
    margin-right: 30px;
    transition: 0.2s ease-in;
    @media (max-width: 600px) {
        margin-left: 15px; 
        margin-right: 15px;
        transition: 0.2s ease-in;
    }
`;