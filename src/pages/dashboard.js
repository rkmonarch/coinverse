import Button from '@/components/form-elements/button'
import Input from '@/components/form-elements/input'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <Input
                        id="email"
                        name="email"
                        label="Email"
                        placeholder="Email"
                        type="email"
                        // onChange={(e) => setEmail(e.target.value)}
                      />
                      <Button label="Register" onClick={() => {}} />
    </div>
  )
}

export default Dashboard