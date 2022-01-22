import { Header } from '@components/header/Header';
import { Onboarding } from '@components/onboarding';
import { OnboardingContextProvider } from '@components/onboarding/context';

export default function Register() {
  return (
    <OnboardingContextProvider>
      <Header />
      <Onboarding />
    </OnboardingContextProvider>
  );
}
