import MyClassLogo from './ui/myclass-logo';
import Link from 'next/link';
import Image from 'next/image';
import ProfileList from './ui/teachers/profileList';

export default function Page() {
  return (

   

    <main className="flex min-h-screen flex-col ">
      <nav className="flex shadow-lg sticky h-20 top-0 z-10 shrink-0 items-end bg-white text-white p-2 md:h-22 gap-1 md:gap-3">
      
       <MyClassLogo /> 

        <Link href="/login" className="flex justify-center  text-sm w-40 my-auto 
           rounded-full bg-indigo-700 px-1 py-2  transition-colors
          hover:bg-indigo-500 md:text-base">
            <span >Log  in / Sign up</span> 
        </Link>
        

      </nav>
      
      <div className="mt-4 flex grow flex-col gap-2 md:flex-row">
        <div className="flex flex-col justify-center items-center rounded-3xl bg-gray-300  pt-9 md:w-8/12 md:pt-2">
          <p className="flex justify-center text-2xl text-center text-gray-800  md:leading-normal">
            <strong>
            Meet the <span className="text-indigo-700"> experienced tution teachers</span> of Agartala!  
            </strong>
          </p>
          <button className='rounded-2xl bg-indigo-700 w-20 text-white p-1 font-semibold'>explore</button>
         
          <Image src='/hero-home.svg' width={900} height={100} alt='headding image' ></Image>
          <div className='bg-indigo-700 w-full text-white ' >
            <span >
              Trusted by 100 teachers and 1000+ students</span>
          </div>
        </div>
        

        <div className="flex flex-col items-center self-start justify-center  md:h-2/5 md:px-12 md:py-0 md:mb-auto">
        <form action="" className="w-full mt-12">
      <div className="relative flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2">
       
        <input placeholder="search" className="w-full p-4 rounded-full" type="text" />
        <button type="button" title="Start buying" className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12">
          <span className="hidden text-yellow-900 font-semibold md:block">Search</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mx-auto text-yellow-900 md:hidden" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
    </form>
          <strong className='font-extrabold text-2xl'>
            Teachers in Agartala</strong>
            <strong className='font-extrabold text-2xl'>
            (search bar)</strong>
            <ProfileList/>
          
        </div>

      </div>

      <div className="mt-4 flex flex-col gap-2 md:flex-row">
        <div className="flex flex-col gap-4 items-center justify-center p-1 md:w-screen md:px-16 md:py-6 " >
          

          <strong className='font-extrabold text-2xl'>
            Our Services</strong>
          <div className='flex gap-4'>
            <Link href='./dashboard' className=' relative flex flex-col w-48 h-40  ' >
            <Image src='/Doubt.svg'  width={100} height={100} className='w-48 h-40 pb-8' alt='Dedicated  doubt solving' ></Image>
            <span className='absolute bottom-1 left-5 font-bold text-sm '>Dedicated  doubt solving</span></Link>

            <Link href='./' className=' relative flex flex-col w-48 h-40  ' >
            <Image src='/Mentorship.svg'  width={100} height={100} className='w-48 h-40 pb-8' alt='mentorship sessions' ></Image>
            <span className='absolute bottom-1 left-5 font-bold text-sm '>mentorship sessions</span></Link>
            
          </div>
          <div className='flex gap-4'>
            <Link href='./' className=' relative flex flex-col w-48 h-40  ' >
            <Image src='/Progress.svg'  width={100} height={100} className='w-48 h-40 pb-8' alt='progress tracking' ></Image>
            <span className='absolute bottom-1 left-5 font-bold text-sm '>progress tracking</span></Link>
            
            <Link href='./' className=' relative flex flex-col w-48 h-40  ' >
            <Image src='/Notes.svg'  width={100} height={100} className='w-48 h-40 pb-8' alt='notes and course material' ></Image>
            <span className='absolute bottom-1 left-5 font-bold text-sm '>notes and course material</span></Link>
            
            
          </div>
          <div className='flex gap-4'>
          <Link href='./' className=' relative flex flex-col w-48 h-40  ' >
            <Image src='/Test series.svg'  width={100} height={100} className='w-48 h-40 pb-8' alt='test seeries' ></Image>
            <span className='absolute bottom-1 left-5 font-bold text-sm '>test seeries</span></Link>
            
            <Link href='./' className=' relative flex flex-col w-48 h-40  ' >
            <Image src='/Consultations.svg'  width={100} height={100} className='w-48 h-40 pb-8' alt='career consultation' ></Image>
            <span className='absolute bottom-1 left-5 font-bold text-sm '>career consultation</span></Link>
            
            
          </div>

        </div>

        <div className="flex flex-col gap-4 items-center justify-center p-1 md:w-screen md:px-16 md:py-6 md:flex-row" >
      
    <div className="w-[360px] h-[480px] py-8 px-1">
    <div className="header flex w-full justify-center">
      <h2 className=" font-black pb-10 mb-20 text-5xl text-blue-900 before:block before:absolute before:bg-sky-300  relative before:w-1/3 before:h-1 before:bottom-0 before:left-1/3">Batches</h2>
    </div>
      <div className="bg-opacity-100 shadow-xl hover:rounded-2xl transform transition-transform duration-500 ease-in-out hover:scale-110 relative flex flex-col justify-center items-center w-[300px] h-[400px] mx-auto p-2 bg-slate-50 border-slate-900 text-slate-50 shadow-lg rounded-3xl hover:shadow-xl">

        <h3 className="absolute -top-5 -left-5 w-32 p-2 bg-slate-800 rounded-3xl text-2xl font-merriweather text-center">
          Eazy IP
        </h3>

        <a href="https://eazyip.github.io/" target="__blank" className="block w-full mx-auto p-2 md:mx-auto hover:rotate-2 transition ease-in-out delay-75 duration-150">
          <img src="https://imgur.com/iUzX7FD.png" alt="Eazy IP Web app showcase mockup" className="object-fill" />
        </a>

        <p className="absolute -bottom-12 left-6 w-[300px] p-4 bg-inherit border-slate-900 text-slate-900 border shadow-lg rounded-3xl hover:text-black hover:shadow-xl">
          Eazy IP is a Progressive Web App that aims at becoming an essential toolkit for network engineers by handling IP operations flawlessly
        </p>
      </div>
    </div>

        </div>


      </div>
    </main>

  );
}
