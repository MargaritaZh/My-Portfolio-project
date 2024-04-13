// type DescriptionCardPropsType = {
//     items: Array<{ name: string; description: string }>
// }
//
// export const DescriptionCard = (props: DescriptionCardPropsType) => {
//     return (
//         <StyledDescriptionCard>
//
//             {props.items.map((item, index) => {
//                 return (
//                     <Wrapper key={index}>
//                         <LeftText>{item.name}</LeftText>
//                         <RightText>{item.description}</RightText>
//                     </Wrapper>
//                 )
//             })}
//
//         </StyledDescriptionCard>
//     );
// };
import React from 'react';
import styled from 'styled-components';
import {theme} from '../../../../styles/Theme';


type DescriptionCardPropsType = {
    items: Array<{ name: string; description: string }>;
};

export const DescriptionCard: React.FC<DescriptionCardPropsType> = ({items}) => {
    return (
        <StyledDescriptionCard>
            {items.map((item, index) => {
                const isThirdElement = (index + 1) % 3 === 0;
                return (
                    <Wrapper key={index}>
                        <LeftText>{item.name}</LeftText>
                        <RightText isThirdElement={isThirdElement}>{item.description}</RightText>
                    </Wrapper>
                );
            })}
        </StyledDescriptionCard>
    );
};

const StyledDescriptionCard = styled.div`
    padding: 24px 0;
    border-bottom: 2px solid ${theme.colors.primaryBg};
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

    & + div {
        margin-top: 10px;
    }
`
const LeftText = styled.span`
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    background-color: ${theme.colors.accent};
    padding: 0 6px 0 5px;
    
    
`


type RightTextProps = {
    isThirdElement: boolean;
}

const RightText = styled.span<RightTextProps>`
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    color: ${(props) => (props.isThirdElement ? 'rgb(126, 185, 66)' : 'inherit')};
}`



