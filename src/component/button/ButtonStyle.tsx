import React from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';

export const ClearFilter = styled.div` 
  text-align: right;
  margin-bottom: 20px;
`;

export const LinkButton = styled(({ ...props }) => (
  <Button variant="contained" size='small' color="primary" {...props} />
))`
  && {
    margin: 10px 1px 20px 0px; 
  }
`;

export const Input = styled.input` 
  display: none;
`;

export const Span = styled.span` 
  color: #009C4E;
  font-weight: 600;
`;

export const ButtonStyle = styled.span`
    cursor: pointer;
    margin-left: 15px;
`;


export const Container = styled.div` 
    margin-right: 10px;
    @media (max-width: 300px) {
        margin-right: 0px;
        margin-bottom: 10px;
    }
`;
