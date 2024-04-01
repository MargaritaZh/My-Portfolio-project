import React from 'react';
import {Icon} from "../../../../../../components/icon/Icon";
import styled from "styled-components";

export const ServicLink = () => {
    return (
        <StyledServicLink href="">
            <Text>ORDER NOW</Text>
            <Icon iconId="arrow" height="20" width="20" viewBox="0 0 20 20"/>
        </StyledServicLink>
    );
};


const StyledServicLink = styled.a``

const Text = styled.span``

