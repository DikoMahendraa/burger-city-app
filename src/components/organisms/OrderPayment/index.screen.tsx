import React from 'react';

import {Header} from '../../molecules';
import {MainLayout} from '../../../layouts';

import OrderConfirmed from './OrderConfirmed';
import OrderPayment from './OrderPayment';

const OrderPaymentOrganism: React.FC = () => {
  const success = false;
  return (
    <MainLayout>
      <Header isBack />
      {success ? <OrderConfirmed /> : <OrderPayment />}
    </MainLayout>
  );
};

export default OrderPaymentOrganism;
