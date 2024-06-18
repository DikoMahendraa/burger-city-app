import React, {useCallback} from 'react';

import {Header, LoadingScreen} from '../../molecules';
import {useBurgerStore, useGlobalStore} from '../../../stores';
import {MainLayout} from '../../../layouts';

import OrderConfirmed from './OrderConfirmed';
import OrderPayment from './OrderPayment';
import {AppDetailRoutes, AppRoutes, navigate} from '../../../navigation';

const OrderPaymentOrganism: React.FC = () => {
  const {statusPayment} = useBurgerStore();
  const {isLoading} = useGlobalStore();
  const paymentSuccess = statusPayment.includes('success');

  const onBackButton = useCallback(() => {
    if (paymentSuccess) {
      navigate(AppRoutes.HOME);
    } else {
      navigate(AppDetailRoutes.DETAIL_CART);
    }
  }, [paymentSuccess]);

  return (
    <MainLayout>
      <Header isBack iconOnly onPressLeft={onBackButton} />
      <LoadingScreen visible={isLoading} />
      {paymentSuccess ? <OrderConfirmed /> : <OrderPayment />}
    </MainLayout>
  );
};

export default OrderPaymentOrganism;
