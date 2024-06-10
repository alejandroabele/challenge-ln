import React from 'react';
import { Sidebar } from '@/components/ui/sidebar/sidebar'
import { Navbar } from '@/components/ui/navbar/navbar';
import { Tags } from '@/components/tags/tags';
import { Articles } from '@/components/articles/articles';
import { Aside } from '@/components/ui/aside/aside';
import { Banner } from '@/components/ui/banner/banner';
import { Layout } from '@/components/ui/layout/layout';


export default async function Home() {

  return (
    <main >
      <Layout>
        <Sidebar>
          <Navbar />
          <Tags />
          <Articles />
        </Sidebar>
        <Aside>
          <Banner />
        </Aside>
      </Layout>
    </main >
  );
}
