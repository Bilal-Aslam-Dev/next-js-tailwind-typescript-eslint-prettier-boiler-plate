import type { FC } from 'react'

import { CommonInput, FormikWrapper } from '@/components'
import loginSchema from '@/utils/ValidationSchemas'

const LoginForm: FC = () => {
  const handleSubmit = (values: any): any => {
    console.log(values)
  }

  return (
    <>
      <FormikWrapper
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <div>
          <label htmlFor="email">Email</label>
          <CommonInput inpName="email" type="email" errorName="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <CommonInput
            inpName="password"
            type="password"
            errorName="password"
          />
        </div>

        <button type="submit">Submit</button>
      </FormikWrapper>
    </>
  )
}

export default LoginForm
