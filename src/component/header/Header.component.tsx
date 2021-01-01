import React, { ReactNode, Children } from 'react';
import { NamePage } from './HeaderStyle';
import ButtonLink from '../button/ButtonLink.component';
import { ContainerResponsive } from '../container/Container';
import Grid from '../grid/GridComponent.component'
type Props = {
    namePage?: string;
    link?: string;
    title?: string;
    children?: ReactNode;
}

export default function Hearder({ namePage, link, title, children }: Props) {

    const childrenList: Array<ReactNode> = Children.toArray(children);
    const childrenOne: ReactNode = childrenList[0] || <></>;
    childrenList.shift();

    return (
        <ContainerResponsive marginTop={namePage ? 80 : -1}>
            {namePage && <NamePage>{namePage}</NamePage>}
            {childrenOne}
            <Grid>
                {(link && title) && <ButtonLink link={link} title={title} />}
            </Grid>
            {childrenList.map((child: ReactNode) => { return child }) || <></>}
        </ContainerResponsive>
    );
}
