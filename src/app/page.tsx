import React,{useState} from 'react'
import SignOutButton from '@/components/signOutButton'
import MetaMaskLogin from '@/components/metaMaskLogin'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import Image from 'next/image'


const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
  {
    name: 'Blogs',
    href: '#',
  },
]

const LandinngPageTwo = async () => {


  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  const name = session.user?.name;


  const formattedData = JSON.stringify(session, null, 2);
      
  return (
    <div className="w-full">
      <header className="relative w-full border-b bg-white pb-4 mt-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="inline-flex items-center space-x-2">
            <span className='w-10'>
              <Image src="/account_abs.png" alt="account_abs_logo" 
             width={60}
             height={60}
              />
            </span>
            <span className="font-bold">Eth solutions</span>
          </div>
          <div className="">
            <ul className="inline-flex space-x-8 pl-20">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
<div className="flex justify-between">

          <div className="">
            <SignOutButton />
          </div>
          <div className="pl-2">
            <MetaMaskLogin/>
          </div>

</div>
          <div className="lg:hidden">
            <div className="h-6 w-6 cursor-pointer" ></div>
          </div>
      
        </div>
      </header>
      {/* Hero Section */}

      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
            <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full p-2">
              <h3 className=" font-medium md:text-sm">

                Welcome Home {name}!



              </h3>
            </div>
            <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              People who really cares about your business
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-gray-700">
              Partner with best crypto marketing agency to 3x your ROI
              Grow your brand with
              best in class Blockchain,
              Web3 services
            </p>
            <div className="mt-8">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Connect with us
              </button>
            </div>
          </div>
          <div className="rounded-lg bg-gray-200 p-4">
            <Image
              className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[500px] lg:object-center"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="img"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      {/* Features Section */}
      {/* Blockchain & Web 3 Software Development Section */}
      <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-black">
              Expertise in Blockchain and Web 3 Technologies
            </p>
          </div>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Transforming Ideas into Decentralized Solutions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Empowering innovation through blockchain and Web 3.0 software development. Our team is dedicated to delivering cutting-edge decentralized solutions.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          {/* Services Cards */}
          {/* Card 1 */}
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <div className="h-9 w-9 text-gray-700">🔒</div>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Secure Smart Contracts</h3>
            <p className="mt-4 text-sm text-gray-600">
              Building robust and secure smart contracts for decentralized applications (DApps).
            </p>
          </div>
          {/* Card 2 */}
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <div className="h-9 w-9 text-gray-700">⚡</div>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Scalable Solutions</h3>
            <p className="mt-4 text-sm text-gray-600">
              Creating scalable solutions that leverage the power of blockchain and Web 3 technologies.
            </p>
          </div>
          {/* Card 3 */}
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <div className="h-9 w-9 text-gray-700">🌐</div>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Web 3.0 Development</h3>
            <p className="mt-4 text-sm text-gray-600">
              Embracing the future with Web 3.0 development, including decentralized identity and data ownership.
            </p>
          </div>
          {/* Card 4 */}
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <div className="h-9 w-9 text-gray-700">🔍</div>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Blockchain Consulting</h3>
            <p className="mt-4 text-sm text-gray-600">
              Providing expert guidance and consulting services for blockchain adoption and implementation.
            </p>
          </div>
        </div>
      </div>

      {/* Blockchain & Web 3 FAQs */}
      <section className="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0">
        <div>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Blockchain & Web 3 Development FAQs
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
              Explore common questions about our blockchain and Web 3 software development services.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
            {/* FAQ 1 */}
            <div>
              <h2 className="text-xl font-semibold text-black">How do I get started with blockchain development?</h2>
              <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                Whether you are new to blockchain or looking to enhance your existing project, our experts can guide you through the process of getting started with blockchain development.
              </p>
            </div>
            {/* FAQ 2 */}
            <div>
              <h2 className="text-xl font-semibold text-black">What are the advantages of Web 3.0 development?</h2>
              <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                Web 3.0 introduces decentralized and user-centric principles. Explore the benefits of Web 3.0, including improved security, data ownership, and enhanced user experiences.
              </p>
            </div>
            {/* FAQ 3 */}
            <div>
              <h2 className="text-xl font-semibold text-black">How can blockchain technology benefit my business?</h2>
              <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                Blockchain offers transparency, security, and efficiency. Discover how integrating blockchain into your business processes can lead to increased trust and streamlined operations.
              </p>
            </div>
            {/* FAQ 4 */}
            <div>
              <h2 className="text-xl font-semibold text-black">Do you provide consulting services for blockchain adoption?</h2>
              <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                Yes, our team offers blockchain consulting services to help businesses understand, plan, and implement blockchain solutions tailored to their specific needs.
              </p>
            </div>
          </div>
          <p className="mt-10 text-center text-gray-600">
            Can not find the information you need?
            <a href="#" title="" className="black font-semibold hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </section>

      {/* Blockchain & Web 3 Pricing Section */}
      <section className="relative my-12 overflow-hidden py-10 md:my-24 lg:my-32">
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center">
              {/* Premium Plan */}
              <div className="w-full lg:-mr-2 lg:w-1/3">
                <div className="mx-auto max-w-sm rounded-md border border-gray-200 bg-white pb-20 pl-5 pr-8 pt-6 lg:pb-8">
                  <span className="mb-2 block text-sm font-semibold text-gray-400">PREMIUM</span>
                  <span className="flex items-end">
                    <span className="text-4xl font-extrabold leading-none">$150</span>
                    <span className="text-sm font-semibold">/month</span>
                  </span>
                  <div className="mt-7 border-t border-gray-100 pt-5">
                    <ul className="mb-10">
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">Blockchain Development Support</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">Smart Contract Development</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">Decentralized App (DApp) Development</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">Custom Blockchain Solutions</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">24/7 Technical Support</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">Advanced Analytics Platform</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">Consultation Services</span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>

              {/* Gold Plan (Most Popular) */}
              <div className="-mt-4 w-full lg:-mt-0 lg:w-1/3">
                <div className="pt-22 relative mx-auto max-w-sm rounded-lg bg-black px-10 pb-16">
                  <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white p-2">
                    <div className="flex-shrink-0 rounded-full bg-black px-5 py-4 text-sm font-semibold uppercase text-white">
                      Most Popular
                    </div>
                  </div>
                  <span className="mb-2 block pt-10 text-sm font-semibold text-white">GOLD</span>
                  <span className="flex items-end text-white">
                    <span className="text-4xl font-extrabold leading-none">$100</span>
                    <span className="text-sm font-semibold">/month</span>
                  </span>
                  <div className="mt-7 border-t border-orange-500 pt-5">
                    <ul className="mb-10">
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">Blockchain Development Support</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">Smart Contract Development</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">Decentralized App (DApp) Development</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">Custom Blockchain Solutions</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">24/7 Technical Support</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">Basic Analytics Platform</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">Chat Support</span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>

              {/* Standard Plan */}
              <div className="-mt-4 w-full lg:-ml-2 lg:-mt-0 lg:w-1/3">
                <div className="rounded-b-5xl lg:rounded-r-5xl mx-auto max-w-sm border border-gray-200 bg-white pb-8 pl-8 pr-5 pt-12 lg:rounded-b-none lg:pt-6">
                  <span className="mb-2 block text-sm font-semibold text-gray-400">STANDARD</span>
                  <span className="flex items-end">
                    <span className="text-4xl font-extrabold leading-none">$80</span>
                    <span className="text-sm font-semibold">/month</span>
                  </span>
                  <div className="mt-7 border-t border-gray-100 pt-5">
                    <ul className="mb-10">
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">Blockchain Development Support</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">Smart Contract Development</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">Decentralized App (DApp) Development</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">Basic Analytics Platform</span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">Limited Support</span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain & Web 3 Newsletter */}
      <div className="mx-12 my-12 max-w-7xl px-2 py-2 md:my-24 lg:my-32 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between m-x-4">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <h2 className="text-3xl font-bold text-black">Stay Updated with Our Blockchain Insights</h2>
            <p className="mt-4 text-gray-600">
              Subscribe to our newsletter for the latest updates, insights, and trends in blockchain and web 3 software development.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-800">
                Trusted by over 100+ businesses and individuals
              </p>
              <div className="mt-2 flex items-center">
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div className="h-9 w-9 text-gray-700" key={i}>star</div>
                  ))}
                </div>
                <span className="ml-2 inline-block">
                  <span className="text-sm font-semibold text-gray-800">4.8/5 . 3420 Reviews</span>
                </span>
              </div>
            </div>
            <form className="mt-6">
              <div className="flex w-full max-w-md flex-col space-y-4">
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Your Email"
                ></input>
                <button
                  type="button"
                  className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-2">
              <span className="text-sm text-gray-600">
                By subscribing, you agree to receive our newsletter and updates related to blockchain and web 3 development. You can unsubscribe anytime.
              </span>
            </p>
          </div>
          <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
            <Image
              className="h-full w-full rounded-md object-cover"
              src="https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3NsZXR0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Blockchain Newsletter"
              width={600}
              height={600}

            />
          </div>
        </div>
      </div>

      {/* Blockchain & Web 3 Footer */}
      <section className="relative overflow-hidden border-t py-10">
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <div className="-m-6 flex flex-wrap">
            <div className="w-full p-6 md:w-1/2 lg:w-5/12">
              <div className="flex h-full flex-col justify-between">
                <div className="mb-4 inline-flex items-center">
                  <svg
                    width="40"
                    height="46"
                    viewBox="0 0 50 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Path for Your Logo */}
                    <path
                      d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                      fill="black"
                    />
                  </svg>
                  <span className="ml-4 text-lg font-bold">Eth Solutions</span>
                </div>
                <div>
                  <p className="mb-4 text-base font-medium">Eth Solutions is an agency that solves software problems using Ethereum (ETH).</p>
                  <p className="text-sm text-gray-600">
                    &copy; Copyright 2022. All Rights Reserved by Eth Solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                  Company
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Services
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                  Connect
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Newsletter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                  Legal
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Licensing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default LandinngPageTwo;