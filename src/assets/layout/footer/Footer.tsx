import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Footer:React.FC = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={"center"} align={"center"}>
                    <Icon iconId={"copyright"} height={"24"} width={"24"} viewBox={"0 0 24 24"}/>
                    <Copyright>2021 All Rights Reserved.Ojjomedia</Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.secondaryBg};
    padding: 18px 0;
    
    @media ${theme.media.navMenu} {
        padding: 18px 0 100px;
    }
`

const Copyright = styled.small`
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    margin-left: 20px;
`

