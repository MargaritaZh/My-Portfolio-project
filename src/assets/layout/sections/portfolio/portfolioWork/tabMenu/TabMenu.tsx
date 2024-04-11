import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../../styles/Theme";


// type TabMenuPropsType={
//     menuItems: Array<string>
// }

export const TabMenu = (props: { menuItems: Array<string> }) => {
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

const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`
const ListItem=styled.ul`
    margin-bottom: 50px;
`

const Item = styled.li`

`

const Link = styled.a`
    font-size: 18px;
    font-weight: 500;
    color: ${theme.colors.font};
    
    &:hover {
        color: ${theme.colors.accent};
        
`