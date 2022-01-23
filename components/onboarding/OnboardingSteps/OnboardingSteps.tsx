import cn from 'classnames';
import { OnboardingStepEnum, StoreCreateEnum, useOnboarding } from '../context';
import s from '../Onboarding.module.css';
import { IoCheckmark } from 'react-icons/io5';

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
          currentStep === OnboardingStepEnum.USER_INFO && s.selected,
          userInfoComplete && s.completed
        )}
      >
        {userInfoComplete ? <IoCheckmark size="30" /> : 1}
      </li>
      <li
        className={cn(
          s.step,
          s.lines,
          currentStep === OnboardingStepEnum.STORE_INFO && s.selected,
          storeInfoComplete && s.completed
        )}
      >
        {storeInfoComplete ? <IoCheckmark size="30" /> : 2}
      </li>
      <li
        className={cn(
          s.step,
          currentStep === OnboardingStepEnum.CREATION && s.selected,
          storeCreatedState === StoreCreateEnum.CREATED && s.completed
        )}
      >
        {storeCreatedState === StoreCreateEnum.CREATED ? (
          <IoCheckmark size="30" />
        ) : (
          3
        )}
      </li>
    </ul>
  );
};
