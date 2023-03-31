import { type FC, useState } from 'react'
import { Field, ErrorMessage } from 'formik'

import { EyeIcon, EyeSlash } from '@/assets/icons'

interface IPType {
  inpName: string
  errorName: string
}

const PasswordInput: FC<IPType> = ({ inpName, errorName }) => {
  const [isPassword, setIsPassword] = useState<boolean>(true)

  const Icon = isPassword ? EyeIcon : EyeSlash

  return (
    <>
      <div className="relative">
        <Field
          className="border rounded-md w-full block py-1.5 px-4"
          placeholder={`Enter ${inpName}`}
          name={inpName}
          type={isPassword ? 'password' : 'text'}
        />
        <Icon
          onClick={() => {
            setIsPassword(!isPassword)
          }}
          className="absolute w-5 cursor-pointer stroke-black right-3 top-[50%] translate-y-[-50%]"
        />
      </div>
      <span className="text-red-500 select-none text-base">
        <ErrorMessage name={errorName} />
      </span>
    </>
  )
}

export default PasswordInput
