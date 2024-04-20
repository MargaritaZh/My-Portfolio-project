import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

type SkillsAdnLanguagesCardPropsType = {
    title: string;
    items: Array<{ name: string; percentage: string }>;
};

type LineProps = {
    percentage: string;
};

export const SkillsAdnLanguagesCard:React.FC<SkillsAdnLanguagesCardPropsType> = (props: SkillsAdnLanguagesCardPropsType) => {
    return (
        <StyledSkillsAdnLanguagesCard>
            <Title>{props.title}</Title>

            {props.items.map((item, index) => (
                <Wrapper key={index}>
                    <WrapperText>
                        <Name>{item.name}</Name>
                        <Percentage>{item.percentage}</Percentage>
                    </WrapperText>
                    <Line key={index} percentage={item.percentage}>
                        <span></span>
                    </Line>
                </Wrapper>
            ))}
        </StyledSkillsAdnLanguagesCard>
    );
};

const StyledSkillsAdnLanguagesCard = styled.div`
    padding: 25px 0;
    border-bottom: 2px solid ${theme.colors.primaryBg};
    min-width: 220px;
`

const Title = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
`

const Wrapper = styled.div`
    &+div {
        margin-top: 10px;
    }
`

const WrapperText = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

`

const Name = styled.span`
    color: ${theme.colors.fontDescription};
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
`
const Percentage = styled.span`
    color: ${theme.colors.fontDescription};
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
`


const Line = styled.div<LineProps>`
    position: relative;
    outline: 1px solid ${theme.colors.accent};
    border-radius: 30px;
    height: 4px;
    width: 100%;
    padding: 0 1px;

    span {
        &::before {
            content: "";
            display: inline-block;
            height: 2px;
            width: ${(props) => props.percentage};
            background-color: ${theme.colors.accent};
            position: absolute;
            
            top: 1px;
            z-index: 1;
        }
    }
`