import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../../../../components/icon/Icon";

export const RatingStar: React.FC = () => {
    return (
        <StyledRatingStar>
            <Icon iconId={"star"} height={"18"} width={"18"} viewBox={"0 0 18 18"}/>
        </StyledRatingStar>
    );
};

const StyledRatingStar = styled.li`

    & + li {
        margin-left: 10px;
    }
`
