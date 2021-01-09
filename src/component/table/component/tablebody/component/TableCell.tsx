import React from 'react';
import styled from "styled-components";
import TableCell from '@material-ui/core/TableCell';

type Values = {
    index?: number;
}

export const TableCellComponent = styled(({ ...props }) => (
    <TableCell component="th" scope="row"  {...props} />
))`
    && {
        background-color: ${(values: Values) => `${(values.index && values.index % 2 === 1) ? 'rgba(0, 0, 0, 0.04)' : 'white'}`};
    }
`;