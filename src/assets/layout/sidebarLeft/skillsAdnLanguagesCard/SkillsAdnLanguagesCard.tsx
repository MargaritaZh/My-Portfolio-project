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
                <div>
                    <span>{item.name}</span>
                    <span>{item.percentage}</span>
                    {/*<div key={index} percentage={item.percentage}>*/}
                    {/*    /!*<span></span>*!/*/}
                    {/*</div>*/}
                </div>
    )
)}

</StyledSkillsAdnLanguagesCard>
    );
};

const StyledSkillsAdnLanguagesCard=styled.div``

const Title=styled.h3``


//
// const Before=styled.div`
// (per)=> width:`${per}%`
// ::before`