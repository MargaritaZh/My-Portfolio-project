import React from 'react';
import styled from "styled-components";

type DescriptionCardPropsType={
    items: Array<{name:string; description:string}>
}

export const DescriptionCard = (props:DescriptionCardPropsType) => {
    return (
        <StyledDescriptionCard>

            {props.items.map((item,index)=>{
                return (
                    <div key={index}>
                        <span>{item.name}</span>
                        <span>{item.description}</span>
                    </div>
                )
            })}

        </StyledDescriptionCard>
    );
};

const StyledDescriptionCard=styled.div``

