/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
} from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import {
  getI18nStaticPaths,
  withI18n,
  getI18nProps,
  GetI18nProps,
  GetI18nQuery,
  useI18n,
} from '../../utils/i18n';

const Wrapper = styled.div.attrs({ className: 'login-container' })`
`;
const BackgroundImage = styled.div`
  background-image: url(/images/register_bg_2.png); background-size: 100%; background-repeat: no-repeat;
  `;
const ContentContainer = styled.div``;
const Content = styled.div``;

const Login: NextPage = () => {
  const { translations } = useI18n('/pages/[language]/index');

  return (
    <>
      <Head>
        <meta name="Login" content={translations.title as string} />
        <title>{translations.title}</title>
      </Head>
      <Wrapper>
        <BackgroundImage />
        <ContentContainer>
          <Content>
            <div className="w-full lg:w-4/12 px-4">
              <div
                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-"
              >
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">
                      Sign in with
                    </h6>
                  </div>

                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                  <form>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-"
                        htmlFor="grid-password"
                      >

                        Email
                      </label>
                      <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-ful"
                        placeholder="Email"
                        style={{ transition: 'all .15s ease' }}

                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-"
                        htmlFor="grid-password"
                      >
                        Password

                      </label
                      >
                      <input
                        type="password"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-ful"
                        placeholder="Password"
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                          className="text-gray-800 ml-1 w-5 h-"

                        />
                        <span className="ml-2 text-sm font-semibold text-gray-700">
                          Remember me
                        </span
                        >

                      </label
                      >
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-wrap mt-6">
                <div className="w-1/2">
                  <a
                    href="#pablo"
                    className="text-gray-30"
                  >
                    <small>Forgot password?</small>

                  </a
                  >
                </div>
                <div className="w-1/2 text-right">
                  <a
                    href="#pablo"
                    className="text-gray-30"
                  >
                    <small>Create new account</small>

                  </a
                  >
                </div>
              </div>
            </div>
          </Content>
        </ContentContainer>

      </Wrapper>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    ...getI18nStaticPaths(),
  ],
  fallback: false,
});

export const getStaticProps: GetStaticProps<GetI18nProps, GetI18nQuery> = async ({
  params,
}) => ({
  props: {
    ...await getI18nProps({
      language: params?.language as string,
      // The reason we're importing here, is because we can only
      // import node modules here and not in any other file.
      // More specifically, not outside of getStaticProps and getServerSideProps
      fs: (await import('fs')).promises, // pass it to import all the translations
    }),
  },
});

export default withI18n(Login, '/login');
