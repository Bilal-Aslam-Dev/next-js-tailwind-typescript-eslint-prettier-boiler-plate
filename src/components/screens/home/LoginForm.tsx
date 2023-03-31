import type { FC } from 'react'

import { CommonInput, PasswordInput, FormikWrapper } from '@/components/shared'
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
        <div className="mt-3">
          <label htmlFor="email">Email</label>
          <CommonInput inpName="email" type="email" errorName="email" />
        </div>

        <div className="mt-3">
          <label htmlFor="password">Password</label>
          <PasswordInput inpName="password" errorName="password" />
        </div>

        <button
          className="mb-3 w-full py-1.5 mt-3 bg-blue-400 text-white rounded-md"
          type="submit"
        >
          Submit
        </button>
      </FormikWrapper>
    </>
  )
}

export default LoginForm
