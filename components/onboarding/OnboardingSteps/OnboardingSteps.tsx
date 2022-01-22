import cn from 'classnames';
import { OnboardingStepEnum, StoreCreateEnum, useOnboarding } from '../context';
import s from '../Onboarding.module.css';
export const OnboardingSteps = () => {
  const {
    currentStep,
    userInfoComplete,
    storeInfoComplete,
    storeCreatedState,
  } = useOnboarding();
  return (
    <ul className="flex flex-row w-full justify-center gap-12">
      <li
        className={cn(
          s.step,
          currentStep === OnboardingStepEnum.USER_INFO && s.selected
        )}
      >
        {userInfoComplete ? '✅' : 1}
      </li>
      <li
        className={cn(
          s.step,
          s.lines,
          currentStep === OnboardingStepEnum.STORE_INFO && s.selected
        )}
      >
        {storeInfoComplete ? '✅' : 2}
      </li>
      <li
        className={cn(
          s.step,
          currentStep === OnboardingStepEnum.CREATION && s.selected
        )}
      >
        {storeCreatedState === StoreCreateEnum.CREATED ? '✅' : 3}
      </li>
    </ul>
  );
};
