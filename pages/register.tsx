import { Header } from '@components/header/Header';
import { Onboarding } from '@components/onboarding';
import { OnboardingContextProvider } from '@components/onboarding/context';
import { featureFlag } from '@utils/env';

export default function Register() {
  if (featureFlag(String(process.env.NEXT_PUBLIC_ENABLE_REGISTRATION))) {
    return (
      <OnboardingContextProvider>
        <Header />
        <Onboarding />
      </OnboardingContextProvider>
    );
  }
  return null;
}
