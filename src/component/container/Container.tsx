import styled from "styled-components";

export interface Props {
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
}

export const ContainerStyled = styled.div` 
    margin-top: ${(props: Props) => `${props.marginTop ? props.marginTop : 0}px`}; 
    margin-left: ${(props: Props) => `${props.marginLeft ? props.marginLeft : 0}px`};
    margin-bottom: ${(props: Props) => `${props.marginBottom ? props.marginBottom : 0}px`};
    margin-right: ${(props: Props) => `${props.marginRight ? props.marginRight : 0}px`};
`;


export const ContainerResponsive = styled.div`  
    transition: 0.2s ease-in;  
    margin-top: ${(props: Props) => `${props.marginTop ? props.marginTop : 22}px`}; 
    @media (max-width: 600px) {  
        margin-top: ${(props: Props) => `${props.marginTop ? props.marginTop : 18}px`}; 
        transition: 0.2s ease-in;
    }
`;

