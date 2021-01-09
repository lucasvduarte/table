import React from 'react';
import { Button } from '../../Table';
import { ActionButtonInterface } from '../interface/ActionButton';
import Tooltip from '@material-ui/core/Tooltip';

function ActionButton({ view, title, children, left }: ActionButtonInterface) {

    if (!view) {
        return <></>
    }

    return (
        <Tooltip title={title || ''}>
            <Button marginLeft={left ?? 5}>
                {children}
            </Button>
        </Tooltip>
    );
}

export default ActionButton;