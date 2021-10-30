import React , {FC, useEffect, useState} from "react";
import { sizes } from "../enum/sizes";
import { sizeData, sizeType } from "../static/sizeData";

interface inputValueType extends sizeType{
    count:number
}
const CustomInput : FC =()=>{
    const [value , setValue] = useState<inputValueType[]>([{count : 1 , ...sizeData[0]}])
    const [showDropdown,setShowDropdown] = useState<boolean>(false)

    const handleClickInput =()=>{
        setShowDropdown(!showDropdown)

    }
    const selectSizeHandler=(item:sizeType)=>{
          setValue([{ count: 2 , ...item}])
    }
    useEffect(()=>{
        console.log(value)
    },[value])
 return(
     <>
        <div 
            className="border border-gray-300 rounded-lg h-48 bg-white cursor-pointer"
            onClick={handleClickInput}>
            {value?.length || "please select size of grid..."}
        </div>
        <div className="border rounded-lg w-full p-3">
            {sizeData.map(item => {
                return <li 
                          onClick={()=> selectSizeHandler(item)}
                          key={item.id}
                          className="cursor-pointer py-2 pr-2 hover:bg-gray-400 text-gray-900">
                          {item.text}
                        </li>
            })}

        </div>
     </>
 )
}
export default CustomInput