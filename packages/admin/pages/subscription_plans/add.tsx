import React, { useRef } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Main } from '../../layout/main';
import { ButtonHandler, Input, Button, StandardButton } from '@bcdapps/ui';
import { Formik, Form } from 'formik';
import Title from '../../components/Title'
const Page: NextPage = () => {
  const refButton = useRef<ButtonHandler>();

  return (
    <>
      <Head>
        <meta name="Add Subscription Plan" />
        <title>Add Subscription Plan</title>
      </Head>
      <Main>
        <Title title="Add Subscription Plans"/>
        <div className="py-2 px-4 w-full lg:w-1/3">
        <Formik
          initialValues={{
            email: 'a@a.com ',
            password: '12',
          }}
          onSubmit={(values, { resetForm }) => {
            setTimeout(() => {
              resetForm({
                email: '',
                password: '',
              } as any);
              refButton && refButton.current && refButton.current.result(false);
            }, 500);
          }}
          render={({
            values,
            errors,
            touched,
            handleSubmit,
            resetForm,
            isValid,
            isSubmitting,
          }) => (
            <>
              <Form>
                <Input
                  label="Email"
                  name="email"
                  value={values.email}
                  type="email"
                  errors={touched.email ? errors : {}}
                  placeholder="Enter your email"
                />
                <Input
                  label="Password"
                  name="password"
                  value={values.email}
                  type="password"
                  errors={touched.password ? errors : {}}
                  placeholder="Enter your password"
                />
                <div className="flex flex-row justify-between mt-10 static">
                  <Button
                    ref={refButton as any}
                    onClick={handleSubmit}
                    label="SIGN IN "
                    className=""
                  />
                  <StandardButton
                    onClick={() =>
                      resetForm({
                        email: '',
                        password: '',
                      } as any)
                    }
                    label="CANCEL "
                    className="border-1 rounded-md border-gray-600"
                  >
                    Cancel
                  </StandardButton>
                </div>
              </Form>
            </>
          )}
        />
        </div>
      </Main>
    </>
  );
};
export default Page;
