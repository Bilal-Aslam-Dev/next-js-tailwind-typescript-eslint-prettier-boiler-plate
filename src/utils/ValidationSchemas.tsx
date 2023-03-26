import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required').min(6, 'Too short'),
})

export default loginSchema
