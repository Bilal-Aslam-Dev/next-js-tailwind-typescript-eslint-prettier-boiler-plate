import type { FC } from 'react'

import { HearIcon } from '@/assets/icons'
import LoginForm from '@/components/screens/home/LoginForm'

const HomeScreen: FC = () => {
  return (
    <>
      <LoginForm />
      <HearIcon className="w-6" />
    </>
  )
}

export default HomeScreen
