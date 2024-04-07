import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

// type MenuPropsType={
//     menuItems: Array<string>
// }

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}

            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

`

const ListItem = styled.li`

`

const Link = styled.a`
    font-family: "Inter",sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0%;
    text-align: center;
    color: rgb(43, 43, 43);

    &:hover {
        color: ${theme.colors.accent};
        
`