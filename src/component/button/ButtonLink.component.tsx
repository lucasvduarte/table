import React from 'react';
import { LinkButton } from './ButtonStyle';
import { LinkRouter } from '../sidebar/SideBarStyle';

interface Props {
    link: string;
    title: string;
}

export default function ButtonComponent({ link, title }: Props) {
    return (
        <LinkRouter to={link}>
            <LinkButton>
                {title}
            </LinkButton>
        </LinkRouter>
    );
}