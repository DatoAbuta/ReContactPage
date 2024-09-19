import React from 'react'

interface InputProps {
  title: string;
}

export default function Input({title}: InputProps) {
  return (
    <div>
        <h4>{title}</h4>
        <input type="text" className='w-[454px] h-[48px] self-stretch rounded-[10px] border-solid border-black border-[1px]'/>
    </div>
  )
}
