import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../../components/icon/Icon";
import {Button} from "../../../../../components/button/Button";
import {theme} from "../../../../../styles/Theme";

type PriceCardPropsType = {

    showMostPopular?: boolean
    title:string
    price: string
    iconTypeBoundary: number
};

export const PriceCard = (props: PriceCardPropsType) => {
    const featuresData = [
        {
            iconId: "check",
            text: "UI Design"
        },
        {
            iconId: "check",
            text: "Web Development"
        },
        {
            iconId: "check",
            text: "Logo Design"
        },
        {
            iconId: "check",
            text: "SEO Optimization"
        },
        {
            iconId: "check",
            text: "WordPress Integration"
        },
        {
            iconId: "check",
            text: "5 Websites"
        },
        {
            iconId: "check",
            text: "Unlimited Users"
        },
        {
            iconId: "check",
            text: "20 GB Bandwidth"
        }
    ];

    return (
        <StyledPriceCard>
            {props.showMostPopular && <PopularText>Most Popular</PopularText>}
            <CardTitle>{props.title}</CardTitle>
            <Wrapper>
                <CostOfWork>{props.price}</CostOfWork>
                <Time>/Hour</Time>
            </Wrapper>
            <TextDescription>For most businesses that want to optimize web queries</TextDescription>
            <ListItem>
                {featuresData.map((feature, index) => (
                    <Item key={index}>
                        <Icon width={"24"} height={"25"} viewBox={"0 0 25 24"}
                              iconId={index >= props.iconTypeBoundary ? "close" : feature.iconId}/>
                        <ItemText>{feature.text}</ItemText>
                    </Item>
                ))}

            </ListItem>
            <Button btnType={"priceBtn"} text={"ORDER NOW"}/>
        </StyledPriceCard>
    );
};


const StyledPriceCard = styled.div`
    background-color: ${theme.colors.secondaryBg};
    min-width: 310px;
    padding: 54px 32px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    position: relative;
    z-index: 0;
`

const PopularText=styled.span`
    background-color: ${theme.colors.accent};
    text-align: center;
    padding: 3px 0;
    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
`
const CardTitle=styled.h3`
    color: ${theme.colors.font};
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 19px;
`
const CostOfWork=styled.h2``

const Time=styled.span``

const Wrapper=styled.div`
display: flex;
    justify-content: center;
    align-items: flex-end;
    gap:10px;
    margin-bottom: 8px;
`
const TextDescription=styled.p`
    text-align: center;
    margin-bottom: 21px;
`
const ListItem=styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 21px;
`
const Item=styled.li`
    display: flex;
    align-items: center;
    gap: 15px;
`
const ItemText=styled.span``

