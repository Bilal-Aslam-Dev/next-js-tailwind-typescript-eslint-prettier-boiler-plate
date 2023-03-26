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
        className="border rounded-md block py-1.5 px-4"
        placeholder={type}
        name={inpName}
        type={type}
      />
      <span className="text-red-500 text-sm">
        <ErrorMessage name={errorName} />
      </span>
    </>
  )
}

export default CommonInput
