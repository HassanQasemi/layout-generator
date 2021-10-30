import React , {FC, useEffect, useState} from "react";
import { sizeData, sizeType } from "../static/sizeData";
import SizeBadge from "./size-badge";

export interface inputValueType extends sizeType{
    count:number
}
interface inputPropsType {
    getSizes: (value: inputValueType[]) => void
}
const CustomInput : FC<inputPropsType> =({getSizes})=>{
    const [value , setValue] = useState<inputValueType[]>([])
    const [showDropdown,setShowDropdown] = useState<boolean>(false)

    const handleClickInput =()=>{
        setShowDropdown(!showDropdown)

    }
    useEffect(() => {
        getSizes(value)
    }, [value, getSizes]) 
    const selectSizeHandler = (item: sizeType) => {
        const isExist = value?.find(j => j.id === item.id)

        if (isExist) {
            setValue([...value.map(j => j.id === isExist.id ? {...j, count: j.count + 1} : j)])
            
        } else {
            setValue([...value, { count: 1, ...item }])
        }
    }
    
 return(
     <>
        <div onClick={handleClickInput}
            className="border border-gray-300 mt-5 rounded-lg h-12 bg-white w-96 mx-auto px-3 flex items-center cursor-text transition-all ease-out focus:border-blue-700">
                {value?.length ? <>
                    {value.map(item => {
                        return <SizeBadge key={item.id} {...item} />
                    })}
                </> : <p className="italic text-sm text-gray-600">please select size(s)</p> }
            </div>
       {
           showDropdown  ?  <ul className="border rounded-lg w-96 mx-auto p-3">
            {sizeData.map(item => {
                return <li 
                          onClick={()=> selectSizeHandler(item)}
                          key={item.id}
                          className="cursor-pointer py-2 pr-2 hover:bg-gray-400 text-gray-900 flex justify-center">
                          {item.text}
                        </li>
            })}

        </ul> : null
       }
     </>
 )
}
export default CustomInput