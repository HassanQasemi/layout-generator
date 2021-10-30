import { sizes } from "../enum/sizes";
export interface sizeType {
    id:number,
    text:string
}
export const sizeData:sizeType[] =[{
    text: sizes.xl,
    id:1
},
{
    text: sizes.lg,
    id:2
},
{
    text: sizes.sm,
    id:3
}]