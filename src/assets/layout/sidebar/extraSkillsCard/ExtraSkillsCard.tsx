import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";

type ExtraSkillsCardPropsType = {
    title: string
    items: Array<string>
}

export const ExtraSkillsCard:React.FC<ExtraSkillsCardPropsType> = (props: ExtraSkillsCardPropsType) => {
    return (
        <StyledExtraSkillsCard>
            <Title>{props.title}</Title>

            {props.items.map((item, index) => {
                return (
                    <Wrapper key={index}>
                        <Icon iconId={"skills"} width={"15"} height={"15"} viewBox={"0 0 15 15"}/>
                        <Text>{item}</Text>
                    </Wrapper>
                )
            })}

        </StyledExtraSkillsCard>
    );
};

const StyledExtraSkillsCard = styled.div`
    min-width: 220px;
    padding: 25px 0;
    border-bottom: 2px solid ${theme.colors.primaryBg};

`

const Title = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
`

const Wrapper=styled.div`
    display: flex;
    gap: 15px;

    &-div {
        margin-top: 5px;
    }

`

const Text=styled.span`
    color: ${theme.colors.fontDescription};
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    `