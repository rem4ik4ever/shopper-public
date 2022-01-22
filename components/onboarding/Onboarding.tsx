import s from './Onboarding.module.css'
import cn from 'classnames'
import { useState } from 'react'
import { Button } from '@components/ui'
import { UserInfoForm } from './UserInfoForm/UserInfoForm'
import { StoreInfoForm } from '@components/onboarding/StoreInfoForm/StoreInfoForm'
import { CreationScreen } from '@components/onboarding/CreationScreen/CreationScreen'

export const Onboarding = () => {
  const [step, setStep] = useState(0)
  const nextStep = () => {
    setStep(step + 1)
  }
  const prevStep = () => {
    setStep(step - 1)
  }
  return (
    <div className={s.root}>
      <ul className="flex flex-row w-full justify-center gap-12">
        <li className={cn(s.step, step === 0 && s.selected)}>1</li>
        <li className={cn(s.step, s.lines, step === 1 && s.selected)}>2</li>
        <li className={cn(s.step, step === 2 && s.selected)}>3</li>
      </ul>
      {step === 0 && <UserInfoForm onNext={nextStep} />}
      {step === 1 && <StoreInfoForm onNext={nextStep} onBack={prevStep} />}
      {step === 2 && <CreationScreen />}
    </div>
  )
}
