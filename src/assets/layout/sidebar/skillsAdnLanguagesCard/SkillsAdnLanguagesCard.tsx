import React from 'react';
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type SkillsAdnLanguagesCardPropsType = {
    title: string;
    items: Array<{ name: string; percentage: string }>;
};

type LineProps = {
    percentage: string;
};

export const SkillsAdnLanguagesCard = (props: SkillsAdnLanguagesCardPropsType) => {
    return (
        <StyledSkillsAdnLanguagesCard>
            <Title>{props.title}</Title>

            {props.items.map((item, index) => (
                <div key={index}>
                    <span>{item.name}</span>
                    <span>{item.percentage}</span>

                    <Line key={index} percentage={item.percentage}>
                        <span></span>
                    </Line>
                </div>
            ))}
        </StyledSkillsAdnLanguagesCard>
    );
};

const StyledSkillsAdnLanguagesCard = styled.div``;

const Title = styled.h3``;

const Line = styled.div<LineProps>`
    position: relative;
    border: 1px solid rgb(255, 180, 0);
    border-radius: 30px;
    height: 5px;
    width: 159px;

    span {
        &::before {
            content: "";
            display: inline-block;
            height: 2px;
            width: ${(props) => props.percentage};
            background-color: ${theme.colors.accent};
            position: absolute;
            top: 1px;
            bottom: 1px;
            z-index: 1;
        }
    }
`