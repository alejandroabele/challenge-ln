import React, { Suspense } from 'react';
import { Sidebar } from '@/components/ui/sidebar/sidebar'
import { Navbar } from '@/components/ui/navbar/navbar';
import { Tags } from '@/components/tags/tags';
import { Articles } from '@/components/articles/articles';
import { Aside } from '@/components/ui/aside/aside';
import { Banner } from '@/components/ui/banner/banner';
import { Layout } from '@/components/ui/layout/layout';
import { Loading } from '@/components/ui/loading/loading';


export default async function Home() {

  return (
    <main >
      <Layout>
        <Sidebar>
          <Navbar />
          <Suspense fallback={<Loading title="Cargando tags..." />}>
            <Tags />
          </Suspense>

          <Suspense fallback={<Loading title="Cargando articles..." />}>
            <Articles />
          </Suspense>
        </Sidebar>
        <Aside>
          <Banner />
        </Aside>
      </Layout>
    </main >
  );
}
