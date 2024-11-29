import React from 'react'
import buttonStyles from '@/components/ui/button.module.css'

interface ButtonProps {
  text: string
  outline?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, outline }) => {
  return (
    <button
      className={
        outline 
          ? buttonStyles['secondary-button'] 
          : buttonStyles['primary-button']
      }
    >
      {text}
    </button>
  )
}

export default Button
