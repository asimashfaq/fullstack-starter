import React, { useEffect } from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import {
  getI18nStaticPaths,
  withI18n,
  getI18nProps,
  GetI18nProps,
  GetI18nQuery,
  useI18n,
} from '../../utils/i18n';
import { Button } from '@bcdapps/ui';
import * as S from '../../components/styles';

const Page: NextPage = () => {
  const { translations } = useI18n('/pages/[language]/index');

  return (
    <>
      <Head>
        <meta name="title" content={translations.title as string} />
        <title>{translations.title}</title>
      </Head>

      <S.Wrapper>
        <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-beclassNameeen relative md:w-64 z-10 py-4 px-6">
          <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-beclassNameeen w-full mx-auto">
            {/* Toggler */}
            <button
              className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
              type="button"
              // onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
            >
              <svg
                className="h-10 w-10 text-black opacity-75 mr-2 text-sm"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Brand */}
            <a
              className="md:block text-left md:pb-2 text-black mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
              href="/"
            >
              Tailwind Starter Kit
              <Button>Click me</Button>
            </a>
            {/* User */}
            {/* <ul className="md:hidden items-center flex flex-wrap list-none">
              <li className="inline-block relative">
                <NotificationDropdown />
              </li>
              <li className="inline-block relative">
                <UserDropdown />
              </li>
            </ul> */}
            {/* Collapse */}
            <div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded">
              {/* Collapse header */}
              <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
                <div className="flex flex-wrap">
                  <div className="w-6/12">
                    <a
                      className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                      href="/"
                    >
                      Tailwind Starter Kit
                    </a>
                  </div>
                  <div className="w-6/12 flex justify-end">
                    <button
                      type="button"
                      className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                      // onClick={() => setCollapseShow('hidden')}
                    >
                      <svg
                        className="h-10 w-10 text-black opacity-75 mr-2 text-sm"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* Form */}
              <form className="mt-6 mb-4 md:hidden">
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-3 py-2 h-12 border border-solid  border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                  />
                </div>
              </form>
              {/* Navigation */}
              <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                <li className="items-center">
                  <a
                    className="flex text-black hover:text-pink-600 text-xs uppercase font-bold content-start flex-wrap"
                    href="/dashboard"
                  >
                    <svg
                      className="h-5 w-5 text-black opacity-75 text-sm inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span className="ml-2 inline-block leading-6">
                      Dashboard
                    </span>
                  </a>
                </li>
              </ul>
              {/* Divider */}
              <hr className="my-4 md:min-w-full" />
              {/* Heading */}
              <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                Documentation
              </h6>
              {/* Navigation */}
              <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                <li className="inline-flex">
                  <a
                    className="text-gray-800 hover:text-gray-600  text-sm block mb-4 no-underline font-semibold"
                    href="/"
                  >
                    <svg
                      className="h-10 w-10 text-black mr-2 text-gray-500 text-xs"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      />
                    </svg>{' '}
                    Javascript
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </S.Wrapper>
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
> = async ({ params }) => {
  return {
    props: {
      ...(await getI18nProps({
        language: params?.language as string,
        // The reason we're importing here, is because we can only
        // import node modules here and not in any other file.
        // More specifically, not outside of getStaticProps and getServerSideProps
        fs: (await import('fs')).promises, // pass it to import all the translations
      })),
    },
  };
};

export default withI18n(Page, '');
