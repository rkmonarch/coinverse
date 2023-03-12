import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'

const Button = ({
  label,
  onClick,
}) => {
  return (
    <ChakraButton
      colorScheme=""
      onClick={onClick}
      className="w-full text-white bg-[#008dff] hover:bg-[#00bdff] focus:ring-1 focus:outline-none focus:ring-[#008dff] font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-none"
    >
      {label}
    </ChakraButton>
  )
}

export default Button

Button.defaultProps = {
  label: '',
  onClick: () => {}
}