import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

type ExtraSkillsCardPropsType={
    title:string
    items: Array<string>
}

export const ExtraSkillsCard = (props:ExtraSkillsCardPropsType) => {
    return (
        <StyledExtraSkillsCard>
            <Title>{props.title}</Title>

            {props.items.map((item,index)=>{
                return (
                    <div key={index}>
                        <Icon iconId={"skills"} width={"15"} height={"15"} viewBox={"0 0 15 15"}/>
                        <span>{item}</span>
                    </div>
                )
            })}

        </StyledExtraSkillsCard>
    );
};

const StyledExtraSkillsCard=styled.div``

const Title=styled.h3``