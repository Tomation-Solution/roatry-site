import React from 'react'
import {InputWithLableContainer,InputContainer} from './InputWithLabel.style'



const InputWithLabel = ({ errorMessage,label,placeholder='',type='text',isTextArea=false,register})=>{


    return (
      <InputWithLableContainer>
        <label htmlFor={label}>{label}</label> 
        {
          isTextArea?
            <textarea name="label" id={label} placeholder={label}  cols={30} rows={5} {...register}></textarea>
            :
  
            <input type="text"  id={label} placeholder={placeholder} {...register}/>
        }
        {
          errorMessage?
            <small style={{'color':'crimson'}}>{errorMessage}</small>
            :''
        }
      </InputWithLableContainer>
    )
  }

  
export default InputWithLabel
