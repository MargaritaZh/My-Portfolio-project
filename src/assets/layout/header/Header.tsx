import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo";
import {Menu} from "../../../components/menu/Menu/Menu";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";


const items = ["Home", "Services", "Education", "Portfolio", "Blog", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <Logo iconId={"coding"} height={"68"} width={"68"} viewBox={"0 0 68 68"}/>
                <Menu menuItems={items}/>
            </FlexWrapper>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.secondaryBg};
    padding: 20px 0;
    position: fixed;
    top:0;
    left:330px;
    right: 133px;
    z-index: 99999;

`
