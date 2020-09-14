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
        <div className="py-2 px-4 w-full container mx-auto lg:w-7/12">
        <Formik
          initialValues={{
            email: 'a@a.com ',
            password: '12',
            name:'',
            code:'',
            description:'',
            extra_fee:'',
            invoice_period:'',
            invoice_duration:'',
            trail_period:'',
            trail_duration:'',
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
                <div className="grid grid-flow-col gap-8">
                  <div>
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
                    <Input
                      label="Name"
                      name="name"
                      value={values.name}
                      type="text"
                      errors={touched.name ? errors : {}}
                      placeholder="Enter your name here"
                    />
                    <Input
                      label="Code"
                      name="code"
                      value={values.code}
                      type="text"
                      errors={touched.code ? errors : {}}
                      placeholder="Enter your code"
                    />
                    <Input
                      label="Description"
                      name="description"
                      value={values.description}
                      type="text"
                      errors={touched.description ? errors : {}}
                      placeholder="Enter your description"
                    />
                  </div>
                  <div>
                    <Input
                      label="Extra Fee"
                      name="extra_fee"
                      value={values.extra_fee}
                      type="text"
                      errors={touched.extra_fee ? errors : {}}
                      placeholder="0"
                    />
                    <Input
                      label="Invoice Period"
                      name="invoice_period"
                      value={values.invoice_period}
                      type="text"
                      errors={touched.invoice_period ? errors : {}}
                      placeholder="0"
                    />
                    <Input
                      label="Invoice Duration"
                      name="invoice_duration"
                      value={values.invoice_duration}
                      type="text"
                      errors={touched.invoice_duration ? errors : {}}
                      placeholder="0"
                    />
                    <Input
                      label="Trail Period"
                      name="trail_period"
                      value={values.trail_period}
                      type="text"
                      errors={touched.trail_period ? errors : {}}
                      placeholder="0"
                    />
                    <Input
                      label="Trail Duration"
                      name="trail_duration"
                      value={values.trail_duration}
                      type="text"
                    errors={touched.trail_duration ? errors : {}}
                    placeholder="0"
                  />
                  </div>
                </div>
                <div className="flex justify-center">
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
