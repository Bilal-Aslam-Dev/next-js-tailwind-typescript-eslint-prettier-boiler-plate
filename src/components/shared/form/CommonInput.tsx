import type { FC } from 'react'
import { Field, ErrorMessage } from 'formik'

interface IPType {
  inpName: string
  type: string
  errorName: string
}

const CommonInput: FC<IPType> = ({ inpName, type, errorName }) => {
  return (
    <>
      <Field
        className="border w-full rounded-md block py-1.5 px-4"
        placeholder={`Enter ${inpName}`}
        name={inpName}
        type={type}
      />
      <span className="text-red-500 select-none text-base">
        <ErrorMessage name={errorName} />
      </span>
    </>
  )
}

export default CommonInput
