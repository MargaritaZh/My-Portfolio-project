import React from 'react';
import { Icon } from "../../../../../../components/icon/Icon";
import styled from "styled-components";

type ContactInfoCardPropsType = {
    iconId: string;
    height: string;
    width: string;
    viewBox: string;
    items: Array<{ label: string; value: string }>;
};

export const ContactInfoCard = (props: ContactInfoCardPropsType) => {
    return (
        <StyledContactInfoCard>
            <Icon iconId={props.iconId} height={props.height} width={props.width} viewBox={props.viewBox} />
            {props.items.map((info, index) => (
                <div key={index}>
                    <span>{info.label}</span>
                    <span>{info.value}</span>
                </div>
            ))}
        </StyledContactInfoCard>
    );
};

const StyledContactInfoCard = styled.div`
    background-color: chartreuse;
    min-height: 210px;
    display: flex;
    flex-direction: column;
    margin: 20px;

`;

