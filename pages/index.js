/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Banner from "./component/banner"
import Navbar from './component/navbar'
import About from './component/about'
import Work from "./component/work"
import Experience from './component/experience'
import Contact from './component/contact'
import Footer from "./component/footer"
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <script type="text/javascript" src="/static/crisp.js"></script>
      </Head>
      <div className="relative bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-slate-700 sm:pb-2 md:pb-4 lg:pb-6 xl:pb-8 lg:w-full">
            <Navbar/>
            <main className="mt-10 mx-auto max-w-7xl px-4">
              <div className="w-full">
                <Banner/>
                <About/>
                <Experience/>
                <Work/>
                <Contact/>
                <Footer/>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

{/* <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="1d76f5e6-38e8-4fbc-a380-2edf7b447420";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script> */}