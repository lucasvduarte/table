import styled from "styled-components";
import React from 'react';
import TextField from '@material-ui/core/TextField';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import {
    KeyboardDatePicker,
} from '@material-ui/pickers';

export const FormInput = styled(({ ...props }) => (
    <TextField fullWidth inputProps={{ maxLength: 60 }} variant="outlined" {...props} />
))` 
`;

export const FormInputMultiline = styled(({ ...props }) => (
    <TextField fullWidth multiline rows={4} rowsMax={6} inputProps={{ maxLength: 1000 }} variant="outlined" {...props} />
))` 
`;

export const FormInputNumber = styled(({ ...props }) => (
    <TextField fullWidth inputProps={{ maxLength: 6 }} placeholder="00,00" variant="outlined" {...props} />
))` 
`;

export const FormSelect = styled(({ ...props }) => (
    <Select fullWidth displayEmpty variant="outlined" labelId="demo-select-label" id="demo-select" {...props} />
))`
`;

export const FormRadio = styled(({ ...props }) => (
    <RadioGroup row {...props} />
))` 
    margin-top: -7px; 
`;

export const FormControlRadio = styled(({ ...props }) => (
    <FormControlLabel labelPlacement="start" control={<Radio />} {...props} />
))`  
`;

export const DatePicker = styled(({ ...props }) => (
    <KeyboardDatePicker disableToolbar
        autoOk
        fullWidth
        inputVariant="outlined"
        format="dd/MM/yyyy"
        invalidLabel="Data Inválida"
        invalidDateMessage="Data Inválida"
        {...props} />
))`
`;

export const ContainerRadio = styled.div`
    border : 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 4px; 
    margin-bottom: 30px; 
    padding: 2.2px;
`;

export const LabelForm = styled.p`
    margin-top: -11px;
    width: 30px;
    font-size: 12px;
    margin-left: 6px;
    color:rgba(0,0,0,0.5);
    padding-left: 5px;
    background-color: white;
`;