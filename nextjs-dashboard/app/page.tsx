// import AcmeLogo from '@/app/ui/acme-logo';
import MyClassLogo from './ui/myclass-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
   
      <div className="relative w-full bg-gray">
            <nav className="fixed z-10 w-full bg-gray md:absolute bg-gray">
                <div className="container m-auto px-2 md:px-12 lg:px-7">
                    <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
                        <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
                           <MyClassLogo/>

                            <button aria-label="humburger" id="hamburger" className="relative w-10 h-10 -mr-2 lg:hidden">
                                <div aria-hidden="true" id="line" className="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transition duration-300"></div>
                                <div aria-hidden="true" id="line2" className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transition duration-300"></div>
                            </button>
                        </div>

                        <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
                            

                            <div className="w-full space-y-2 border-white lg:space-y-0 md:w-max lg:border-l">
                               
                                <button type="button" title="Start buying" className="w-full py-3 px-6 text-center rounded-full transition bg-blue-950  active:bg-yellow-400 focus:bg-yellow-300 sm:w-max">
                                    <span className="block text-white font-semibold text-sm">
                                        Login/Register
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="relative bg-white">
                <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
                    <div className="flex items-center flex-wrap px-2 md:px-0">
                        <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                            <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">Find the perfect teacher nearby</h1>
                            <form action="" className="w-full mt-12">
                                <div className="relative flex p-1 rounded-full bg-white border border-gray-200 shadow-gray-500 md:p-2">
                                   
                                    <input placeholder="Search by name" className="w-full p-4 rounded-full" type="text" />
                                    <button type="button" title="Start buying" className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-white-300  md:px-12">
                                        <span className="hidden text-yellow-900 font-semibold md:block">search</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mx-auto text-yellow-900 md:hidden" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                            <p className="mt-8 text-gray-700 lg:w-10/12">Sit amet consectetur adipisicing elit. <a href="#" className="text-yellow-700">connection</a> tenetur nihil quaerat suscipit, sunt dignissimos.</p>
                        </div>
                        <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
                            <img src="https://classplusapp.com/growth/wp-content/uploads/2023/02/Top-Qualities-Of-A-Good-Teacher-1-1024x684.jpg" className="relative" alt="food illustration" loading="lazy" width="4500" height="4500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
   
  );
}
