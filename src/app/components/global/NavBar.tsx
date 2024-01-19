"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import LinkNav from "next/link"

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Projetos prontos",
    page: "projetos-prontos"
  },
  {
    label: "Perguntas frequentes",
    page: "perguntas-frequentes"
  },
  {
    label: "Depoimentos",
    page: "depoimentos"
  },
  {
    label: "Sobre nós",
    page: "sobre-nos"
  },
  {
    label: "Contato",
    page: "contato"
  }
]

interface UserNav {
  image: string
  page: string
}

const USER_NAV: Array<UserNav> = [
  {
    image: "Cart.svg",
    page: "cart"
  },
  {
    image: "user.svg",
    page: "log-in"
  }
]

const NavBar = () => {

  const [navBar, setNavBar] = useState(false);

  return (
    <header className="w-full p-4 md:py-6 fixed top-0 z-50 shadow bg-white">
      <div className='flex-1 justify-between mx-auto max-w-6xl items-center lg:flex lg:flex-row'>
        <LinkNav className='hidden lg:block' href='/'>
            <img className='w-36' alt='' src='/logo-nav-144px.svg'/>
        </LinkNav>
        <div>
          <div className='flex flex-row items-center justify-between'>
            <div className='lg:hidden'>
              <button onClick={()=>setNavBar(!navBar)}>
                {navBar ? <Image src='/icons/close.svg' alt='' height={24} width={24}/> : <Image src='/icons/menu.svg' alt='' height={24} width={24}/>}
              </button>
            </div>
            <LinkNav className='block lg:hidden' href='/'>
              <img className='w-36' alt='' src='/logo-nav-144px.svg'/>
            </LinkNav>
            <div className='lg:hidden' >
              <div className='flex flex-row justify-end space-x-2'>
                {USER_NAV.map((item, idx) => {
                  return (
                    <LinkNav key={idx} href={item.page}>
                      <img alt='' src={`icons/${item.image}`} />
                    </LinkNav>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div> 
        <div className={`flex pb-3 mt-8 lg:m-0 lg:p-0 lg:mx-auto lg:flex lg:justify-center lg:absolute ${
              navBar ? "block" : "hidden"
            } lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center`}
          >
            <div className='space-y-8 lg:justify-center lg:space-y-0 lg:space-x-8'>
            {NAV_ITEMS.map((item, idx) => {
                return (
                  <LinkNav className={"block lg:inline-block text-brand_xx_dark hover:text-red-desire hover:font-bold"} key={idx} href={item.page}>
                    {item.label}
                  </LinkNav>
                )
              })}
            </div>
          </div>
        </div>
        <div className='hidden lg:block w-36' >
              <div className='flex flex-row justify-end space-x-6'>
                {USER_NAV.map((item, idx) => {
                  return (
                    <LinkNav key={idx} href={item.page}>
                      <img alt='' src={`icons/${item.image}`} />
                    </LinkNav>
                  )
                })}
              </div>
            </div>
      </div>
    </header>
  )
}

export default NavBar