import React, { FC, useCallback, useMemo } from 'react';

export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}
export interface StoreInfo {
  domain: string;
  name: string;
}
export interface State {
  currentStep: OnboardingStepEnum;
  userInfoComplete: boolean;
  storeInfoComplete: boolean;
  storeCreatedState: StoreCreateEnum;
  userInfo: UserInfo;
  storeInfo: StoreInfo;
}

export enum StoreCreateEnum {
  CREATED,
  PROCESSING,
  NOT_STARTED,
  FAILED,
}
export enum OnboardingStepEnum {
  USER_INFO,
  STORE_INFO,
  CREATION,
}

const initialState = {
  currentStep: OnboardingStepEnum.USER_INFO,
  userInfoComplete: false,
  storeInfoComplete: false,
  storeCreatedState: StoreCreateEnum.NOT_STARTED,
  userInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  },
  storeInfo: {
    name: '',
    domain: '',
  },
};

export type ContextValue = State & {
  setUserInfo: (v: State['userInfo']) => void;
  setStoreInfo: (v: State['storeInfo']) => void;
  setCompleteStoreInfo: (c: boolean) => void;
  setCompleteUserInfo: (c: boolean) => void;
  transitionStoreState: (s: StoreCreateEnum) => void;
  transitionOnboardingStep: (s: OnboardingStepEnum) => void;
};

export const OnboardingContext = React.createContext<ContextValue | undefined>(
  undefined
);

OnboardingContext.displayName = 'OnboardingContext';

type Action =
  | {
      type: 'SET_USER_INFO';
      value: State['userInfo'];
    }
  | {
      type: 'SET_STORE_INFO';
      value: State['storeInfo'];
    }
  | {
      type: 'SET_COMPLETE_USER_INFO';
      complete: boolean;
    }
  | {
      type: 'SET_COMPLETE_STORE_INFO';
      complete: boolean;
    }
  | {
      type: 'TRANSITION_STORE_STATE';
      state: StoreCreateEnum;
    }
  | {
      type: 'TRANSITION_ONBOARDING_STEP';
      step: OnboardingStepEnum;
    };

function onboardingReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_USER_INFO': {
      return {
        ...state,
        userInfo: action.value,
      };
    }
    case 'SET_STORE_INFO': {
      return {
        ...state,
        storeInfo: action.value,
      };
    }
    case 'SET_COMPLETE_STORE_INFO': {
      return {
        ...state,
        storeInfoComplete: action.complete,
      };
    }
    case 'SET_COMPLETE_USER_INFO': {
      return {
        ...state,
        userInfoComplete: action.complete,
      };
    }
    case 'TRANSITION_STORE_STATE': {
      return {
        ...state,
        storeCreatedState: action.state,
      };
    }
    case 'TRANSITION_ONBOARDING_STEP': {
      return {
        ...state,
        currentStep: action.step,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

export const OnboardingProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(onboardingReducer, initialState);

  const setUserInfo = useCallback(
    (value: State['userInfo']) => dispatch({ type: 'SET_USER_INFO', value }),
    [dispatch]
  );
  const setStoreInfo = useCallback(
    (value: State['storeInfo']) => dispatch({ type: 'SET_STORE_INFO', value }),
    [dispatch]
  );

  const setCompleteStoreInfo = useCallback(
    (complete: boolean) =>
      dispatch({ type: 'SET_COMPLETE_STORE_INFO', complete }),
    [dispatch]
  );
  const setCompleteUserInfo = useCallback(
    (complete: boolean) =>
      dispatch({ type: 'SET_COMPLETE_USER_INFO', complete }),
    [dispatch]
  );

  const transitionStoreState = useCallback(
    (state: StoreCreateEnum) =>
      dispatch({ type: 'TRANSITION_STORE_STATE', state }),
    [dispatch]
  );

  const transitionOnboardingStep = useCallback(
    (step: OnboardingStepEnum) =>
      dispatch({ type: 'TRANSITION_ONBOARDING_STEP', step }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      setUserInfo,
      setStoreInfo,
      setCompleteStoreInfo,
      setCompleteUserInfo,
      transitionStoreState,
      transitionOnboardingStep,
    }),
    [
      state,
      setUserInfo,
      setStoreInfo,
      setCompleteStoreInfo,
      setCompleteUserInfo,
      transitionStoreState,
      transitionOnboardingStep,
    ]
  );

  return <OnboardingContext.Provider value={value} {...props} />;
};

export const useOnboarding = () => {
  const context = React.useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error(`useOnboarding must be used within a OnboardingProvider`);
  }
  return context as ContextValue;
};

export const OnboardingContextProvider: FC = ({ children }) => (
  <OnboardingProvider>{children}</OnboardingProvider>
);
