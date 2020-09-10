/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useEffect, useContext } from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import styled, { ThemeContext } from 'styled-components';
import {
  getI18nStaticPaths,
  withI18n,
  getI18nProps,
  GetI18nProps,
  GetI18nQuery,
  useI18n,
} from '../../utils/i18n';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input } from '@bcdapps/ui/src/components/input';
import { action } from '@storybook/addon-actions';
import { Button } from '@bcdapps/ui/src/components/button';

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
    password: Yup.string()
    .required('Required'),
});
const Wrapper = styled.div.attrs({ className: 'login-container' })``;
const BackgroundImage = styled.div`
  background-image: url(/images/register_bg_2.png);
  background-size: 100%;
  background-repeat: no-repeat;
`;
const ContentContainer = styled.div``;
const Content = styled.div``;
const LoginContent = styled.div`
  overflow:hidden
`;

const Login: NextPage = () => {
const { translations } = useI18n('/pages/[language]/login');

  return (
    <>
      <Head>
        <meta name="Login" content={translations.title as string} />
        <title>{translations.title}</title>
      </Head>
      <Wrapper>
        <BackgroundImage />
        <ContentContainer className="bg-cover h-screen bg-no-repeat ">
          <Content className="flex h-full  mx-auto justify-center items-center">
            <div className="w-full justify-center lg:w-4/12 px-4">
              <LoginContent className="relative flex flex-col min-w-0 break-words mb-6 shadow-lg rounded-lg bg-white ">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <div className="text-gray-600 text-xl font-bold">
                      Sign in with
                    </div>
                  </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <Formik
                  initialValues={{
                    email: '',
                    password:'',
                  }}
                  validationSchema={SignUpSchema}
                  onSubmit={values => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                    }, 500);
                  }}
                  render={({ errors, touched, validateField, validateForm }) => (
                    <>
                    <Form>
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        errors={touched.email ? errors : {}}
                        
                        placeholder="Enter your email"
                      />
                      <Input
                        label="Password"
                        name="password"
                        type="password"
                        errors={touched.password ? errors : {}}
                        placeholder="Enter your password"
                      />
                      <div className='flex flex-row justify-between mt-10 static'>
                        <Button
                          onClick={() => console.log}
                          label="SIGN IN "
                          className="border-2 rounded-md border-gray-600"
                        />
                        <Button
                          onClick={() => console.log}
                          label="CANCEL "
                          className="border-2 rounded-md border-gray-600"
                        />
                      </div>
                    </Form>
                    </>
                  )}
                />
                </div>
              </LoginContent>
            </div>
          </Content>
        </ContentContainer>
      </Wrapper>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [...getI18nStaticPaths()],
  fallback: false,
});

export const getStaticProps: GetStaticProps<
  GetI18nProps,
  GetI18nQuery
> = async ({ params }) => ({
  props: {
    ...(await getI18nProps({
      language: params?.language as string,
      // The reason we're importing here, is because we can only
      // import node modules here and not in any other file.
      // More specifically, not outside of getStaticProps and getServerSideProps
      fs: (await import('promise-fs')), // pass it to import all the translations
    })),
  },
});

export default withI18n(Login, '/login');
