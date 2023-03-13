import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'

const Button = ({
  label,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-[&666666] bg-[#c8c8c8] hover:bg-[#cfcfcf] focus:ring-1 focus:outline-none focus:ring-[#cfcfcf] font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-none"
    >
      {label}
    </button>
  )
}

export default Button

Button.defaultProps = {
  label: '',
  onClick: () => {}
}