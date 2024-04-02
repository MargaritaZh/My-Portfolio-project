import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../icon/Icon";

export const RatingStar = () => {
    return (
        <StyledRatingStar>
            <Icon iconId={"star"} height={"18"} width={"18"} viewBox={"0 0 18 18"}/>
        </StyledRatingStar>
    );
};

const StyledRatingStar=styled.li``
