import {theme} from "./Theme";

type FontsPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin:number
    Fmax:number


}
export const font = ({Fmax,Fmin,family, weight, color, lineHeight}: FontsPropsType) => `
font-family:${family || "Inter"};
font-weight:${weight || 400};
color:${color || theme.colors.font};
line-height:${lineHeight || 1.2};

font-size: calc( (100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`