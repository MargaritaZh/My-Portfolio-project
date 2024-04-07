import React from 'react';
import styled from "styled-components";

// type HeaderMenuPropsType={
//     menuItems: Array<string>
// }

export const HeaderMenu = (props: { menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item,index)=> {
                   return <li key={index}>
                        <a href="">{item}</a>
                    </li>
                })}

            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        
        justify-content: center;
    }


`

