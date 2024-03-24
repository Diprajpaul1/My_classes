import MyClassLogo from './ui/myclass-logo';
import Link from 'next/link';
import Image from 'next/image';
import ProfileList from './ui/teachers/profileList';



const servicesList = [
  {name: 'Dedicated-doubt-solving', href: './dashboard', imagesrc: '/Doubt.svg',},
  {name: 'Mentorship-sessions', href: './dashboard', imagesrc: '/Mentorship.svg',},
  {name: 'Progress-tracking', href: './dashboard', imagesrc: '/Progress.svg',},
  {name: 'notes-and-course-materila', href: './dashboard', imagesrc: '/Notes.svg',},
  {name: 'Test-series', href: './dashboard', imagesrc: '/Test series.svg',},
  {name: 'career-consultation', href: './dashboard', imagesrc: '/Consultations.svg',},
]

const batchList = [
  {name: "NEET" , href: "./dashboard" , classes: ['class XI','class XII','dropper']},
  {name: "JEE" , href: "./dashboard" , classes: ['class XI','class XII','dropper']},
  {name: "school" , href: "./dashboard" , classes: ['class XI','class XII','dropper']},

]


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


      <div className="mt-4 flex flex-col gap-2 items-center justify-center p-1 md:w-screen ">
        
          <strong className='font-extrabold text-2xl'>
            Our Services</strong>

          <div className='flex justify-evenly flex-wrap'>
            {servicesList.map((item) => {
              return(
                <Link key={item.name} href={item.href} className=' hover:shadow-2xl relative flex flex-col w-48 shadow-lg rounded-3xl h-40  ' >
                <Image src={item.imagesrc}  width={100} height={100} className='w-48 h-40 pb-8 mx-3' alt={item.name} ></Image>
                <span className='absolute bottom-1 left-5 font-bold text-sm ml-1'>{item.name}
                </span>
                </Link>
              )
            })}
          </div>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center p-1 md:w-screen md:px-16 md:py-6 " >
          <strong className='font-extrabold text-2xl'>
            Batches</strong>
            <div className='flex  flex-col md:flex-row'>
              {batchList.map((batches) => (
                <Link key={batches.name} href={batches.href} className='p-4 bg-indigo-400 m-2 shadow-lg rounded-2xl hover:bg-indigo-300'>
                  <strong>{batches.name}</strong>
                  
                  <div className='flex'>
                    {batches.classes.map((cls, index) => (
                      <div key={index} className='flex bg-slate-700 w-20 justify-center rounded-full p-2 text-white m-2'>
                        <strong>{cls}</strong>
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          

        </div>

    </main>

  );
}
