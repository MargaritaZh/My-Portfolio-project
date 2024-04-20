import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../../styles/Theme";


// type TabMenuPropsType={
//     menuItems: Array<string>
// }

export const TabMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ListItem>

                {props.menuItems.map((item, index) => {
                    return <Item key={index}>
                        <Link href="">{item}</Link>
                    </Item>
                })}

            </ListItem>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav``

const ListItem = styled.ul`
    display: flex;
    gap: 30px;
    justify-content: center;
    margin-bottom: 50px;

    @media ${theme.media.navMenu} {
        justify-content: flex-start;
        max-width: 630px;
        white-space: nowrap;
        overflow-x: auto;
    }
`

const Item = styled.li``

const Link = styled.a`
    font-size: 18px;
    font-weight: 500;
    color: ${theme.colors.font};

    &:hover {
        color: ${theme.colors.accent};
    }
`