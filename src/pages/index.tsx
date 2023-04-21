import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Head from 'next/head'
import Services from '@/components/Services'
import EnvironmentStatement from '@/components/EnvironmentStatement'
import FAQ from '@/components/FAQ'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>We&apos;re on a Mission</title>
        <meta
          name="description"
          content="Notification infrastructure platform for developers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="bg-[#0E0E0E] text-white sm:pt-8 antialiased h-full">
        <Header/>
        <Services/>
        <EnvironmentStatement/>
        <FAQ/>
      
      </main>
    </>
  )
}
