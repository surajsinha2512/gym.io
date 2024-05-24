import Home from "./Home";

function Header() {
  return (
    <>
      <div i>
        <header className="w-dvw absolute top-0 left-1/2 -translate-x-1/2 z-[1000] py-4">
          <div className="max-w-[120rem] text-gray-50 px-6 md:px-8 lg:px-10">
            <nav className="w-full flex flex-row items-center font-sans">
              <a className="text-gray-50" href="/">
                <img className="logo" src="#" /> {/*logo add*/}
              </a>
              <div className="flex-1 relative hidden md:flex items-center justify-center">
                <ul className="mx-auto inline-flex gap-6 text-md font-light">
                  <li><a className="font-bold relative after:h-px after:content-[''] after:w-full after:absolute after:top-full after:bg-orange-600 after:left-0 after:translate-y-1" href={Home}>Home</a></li>
                  <li><a href="/">Fitness</a></li>
                  <li><a href="/">Care</a></li>
                  <li><a href="/">Store</a></li>
                </ul>
                <ul className="flex gap-2">
                  <li ><a className="mt-3 inline-block text-base font-medium px-2 py-2 border border-accent-400 rounded-full text-accent-400 cursor-pointer bg-gray-50/10 backdrop-blur-3xl" href={Home}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                  </a></li>
                  <li >
                  <a className="mt-3 inline-block text-base font-medium px-2 py-2 border border-accent-400 rounded-full text-accent-400 cursor-pointer bg-gray-50/10 backdrop-blur-3xl" href={Home}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg></a>
                </li>
                <li ><a className="mt-3 inline-block text-base font-medium px-5 py-2 border border-accent-400 rounded-lg text-accent-400 cursor-pointer bg-gray-50/10 backdrop-blur-3xl" href={Home}>Contact</a>
                </li>
              </ul>
          </div>
        </nav>
      </div>
    </header >
      <section className="h-dvh w-dvw max-h-[80rem] relative">
        <div className="absolute inset-0 z-[1]">
          <img className="h-full w-full object-cover object-center" src="https://wallpapercave.com/wp/wp7578886.jpg" alt="" />
        </div>
        <div className="max-w-[120rem] mx-auto h-full relative z-[2] px-6 md:px-8 lg:px-10">
          <div className="h-full w-full  flex flex-col relative space-y-6">
            <div className="mt-auto mb-0 text-gray-50 md:pb-36 space-y-6">
              <span className="font-light text-sm text-orange-600 ">Bienvenu a fitihealth</span>
              <h1 className="text-3xl md:text-5xl max-w-[30rem] font-medium">Une bonne santé passe par le sport</h1>
              <p className="max-w-[30rem] font-light ml-4 before:content-[''] relative before:absolute before:w-px before:h-full before:left-0 before:top-0 before:-translate-x-4 before:bg-orange-600 md:text-base text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              <div className="md:flex-row flex-col flex gap-4">
                <button className="inline-block text-base font-medium px-12 py-2 bg-accent-400 rounded-lg cursor-pointer">En savoir plus</button>
                <button className="inline-block text-base font-medium px-12 py-2 border border-accent-400 rounded-lg text-accent-400 cursor-pointer bg-gray-50/10 backdrop-blur-3xl">Nos Horaires</button>
              </div>
            </div>
            <div className="md:absolute md:right-0 md:bottom-32 text-gray-50 my-16">
              <ul className="flex md:flex-col items-center justify-center gap-2">
                <li className="h-6 w-6 block rounded-full bg-accent-400 text-gray-50">
                  <a href={Home} className="block h-full w-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current " viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z"></path><path fill="currentColor" d="M18 2a1 1 0 0 1 .993.883L19 3v4a1 1 0 0 1-.883.993L18 8h-3v1h3a1 1 0 0 1 .991 1.131l-.02.112l-1 4a1 1 0 0 1-.858.75L17 15h-2v6a1 1 0 0 1-.883.993L14 22h-4a1 1 0 0 1-.993-.883L9 21v-6H7a1 1 0 0 1-.993-.883L6 14v-4a1 1 0 0 1 .883-.993L7 9h2V8a6 6 0 0 1 5.775-5.996L15 2z"></path></g>
                    </svg>
                  </a>
                </li>
                <li className="h-6 w-6 block rounded-full bg-accent-400 text-gray-50"><a href={Home} className="h-full w-full block p-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full fill-current "><ellipse cx="208" cy="152" rx="16" ry="24" fill="currentColor"></ellipse><ellipse cx="304" cy="152" rx="16" ry="24" fill="currentColor"></ellipse></svg></a></li><li className="h-6 w-6 block rounded-full bg-accent-400 text-gray-50 p-1"><svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-none stroke-current " viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" fill="none"></line></svg></li></ul></div></div></div></section></div >
    </>
  )
}
export default Header;