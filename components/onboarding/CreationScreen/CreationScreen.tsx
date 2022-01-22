import { Button, LoadingDots } from '@components/ui';
import { useEffect, useState } from 'react';
import { OnboardingStepEnum, StoreCreateEnum, useOnboarding } from '../context';
import { fetcher } from '../fetcher';
import { localStoragePreset } from '../utils';

export const CreationScreen = () => {
  const {
    userInfo,
    storeInfo,
    transitionStoreState,
    storeCreatedState,
    transitionOnboardingStep,
  } = useOnboarding();
  useEffect(() => {
    transitionStoreState(StoreCreateEnum.PROCESSING);
    fetcher({
      url: 'http://localhost:3000/onboarding',
      method: 'POST',
      body: {
        admin: userInfo,
        store: storeInfo,
      },
    }).then((result) => {
      if (['email_taken', 'domain_taken'].includes(result.message)) {
        console.log('Validation error');
        transitionStoreState(StoreCreateEnum.FAILED);
      } else {
        console.log('Store created!');
        transitionStoreState(StoreCreateEnum.CREATED);
        localStoragePreset();
      }
    });
  }, []);
  if (storeCreatedState === StoreCreateEnum.CREATED) {
    return (
      <div className="flex flex-col items-center p-8">
        <h1 className="text-4xl my-6">Магазин готов!</h1>
        <a href="http://localhost:3000/admin">
          <button className="border rounded-md px-6 py-3">
            Портал продавца
          </button>
        </a>
      </div>
    );
  }
  if (storeCreatedState === StoreCreateEnum.FAILED) {
    return (
      <div className="flex flex-col items-center p-8">
        <h1 className="text-4xl my-6">Что-то пошло не так.</h1>
        <p>
          Пожалуйста попробуйте еще раз или обратитесь к администрации сайта за
          помощью
        </p>
        <Button
          variant="ghost"
          onClick={() => {
            transitionOnboardingStep(OnboardingStepEnum.STORE_INFO);
          }}
        >
          Назад
        </Button>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl mt-6">Создаем ваш магазин!</h1>
      <div>
        <LoadingDots />
      </div>
    </div>
  );
};
