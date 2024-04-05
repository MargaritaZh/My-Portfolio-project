import React from 'react';
import styled from "styled-components";


type SkillsAdnLanguagesCardPropsType = {
    title: string
    items: Array<{ name: string; percentage: string }>
}

export const SkillsAdnLanguagesCard = (props:SkillsAdnLanguagesCardPropsType) => {
    return (
        <StyledSkillsAdnLanguagesCard>
            <Title>{props.title}</Title>

            {props.items.map((item, index) => (
                <div key={index}>
                    <span>{item.name}</span>
                    <span>{item.percentage}</span>
                </div>
            ))}

        </StyledSkillsAdnLanguagesCard>
    );
};

const StyledSkillsAdnLanguagesCard=styled.div``

const Title=styled.h3``