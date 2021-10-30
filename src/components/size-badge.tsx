import React, { FC, memo } from 'react';
import { inputValueType } from './custom-input';

const SizeBadge: FC<inputValueType> = ({count, id, text}) => {
    return (
        <div className="max-w-max border rounded-lg items-center bg-gray-400 px-2 py-1 my-auto text-ms text-gray-800 flex justify-center">
            <span className="">{count}</span>
            <p className="mr-2 font-bold" >{text}</p>
            <span title="increase count" className="cursor-pointer text-red-600" onClick={() => {}}>X</span>
        </div>
    )
}

export default memo(SizeBadge);