import s from './Onboarding.module.css';
import { UserInfoForm } from './UserInfoForm/UserInfoForm';
import { StoreInfoForm } from '@components/onboarding/StoreInfoForm/StoreInfoForm';
import { CreationScreen } from '@components/onboarding/CreationScreen/CreationScreen';
import { OnboardingStepEnum, useOnboarding } from './context';
import { OnboardingSteps } from './OnboardingSteps/OnboardingSteps';

export const Onboarding = () => {
  const { currentStep, transitionOnboardingStep } = useOnboarding();
  return (
    <div className={s.root}>
      <OnboardingSteps />
      {currentStep === OnboardingStepEnum.USER_INFO && (
        <UserInfoForm
          onNext={() => transitionOnboardingStep(OnboardingStepEnum.STORE_INFO)}
        />
      )}
      {currentStep === OnboardingStepEnum.STORE_INFO && (
        <StoreInfoForm
          onNext={() => transitionOnboardingStep(OnboardingStepEnum.CREATION)}
          onBack={() => transitionOnboardingStep(OnboardingStepEnum.USER_INFO)}
        />
      )}
      {currentStep === OnboardingStepEnum.CREATION && <CreationScreen />}
    </div>
  );
};
