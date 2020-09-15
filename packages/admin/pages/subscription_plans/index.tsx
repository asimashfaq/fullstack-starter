import React, { useEffect } from 'react';
import Head from 'next/head';
import Title from '../../components/Title';
import { Main } from '../../layout/main';

import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { getSubscriptionPlans } from 'packages/admin/modules/subscription_plans/reducer';

const Page: NextPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getSubscriptionPlans());
    }, []);
  return (
    <>
      <Head>
        <meta name="Subscription Plans" />
        <title>Subscription Plans</title>
      </Head>
      <Main>
        <Title title="Subscription Plans" />
      </Main>
    </>
  );
};
export default Page;
