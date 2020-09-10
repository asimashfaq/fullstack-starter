import React from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import {
  getI18nStaticPaths,
  withI18n,
  getI18nProps,
  GetI18nProps,
  GetI18nQuery,
  useI18n,
} from '../../utils/i18n';
import * as S from '../../components/styles';
import {SidebarProvider, Dashboard} from '@bcdapps/ui'
const Page: NextPage = () => {
  const { translations } = useI18n('/pages/[language]/index');

  return (
    <>
      <Head>
        <meta name="title" content={translations.title as string} />
        <title>{translations.title}</title>
      </Head>
      <SidebarProvider>
      <S.Wrapper>
        <Dashboard/>
      </S.Wrapper>
      </SidebarProvider>

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
        language: params && params.language as any,
        // The reason we're importing here, is because we can only
        // import node modules here and not in any other file.
        // More specifically, not outside of getStaticProps and getServerSideProps
        fs: (await import('promise-fs')), // pass it to import all the translations
      })),
    },
  };
};

export default withI18n(Page, '');
