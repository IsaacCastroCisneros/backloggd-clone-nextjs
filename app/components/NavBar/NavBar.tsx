import React,{useContext} from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import useMediaQuery from 'react-responsive/types/useMediaQuery'

import UserNavOption from './components/UserNavOption'
import Input from '../global-components/Input'
import Button from '../global-components/Button'
import { AppContext } from '../../layout'
import NavMenu from './components/NavMenu'


export default function NavBar({name='ronin'}) 
{

  const{mob}=useContext(AppContext)

  return (
    <>
      <nav className="custom-container py-[.8rem] !flex justify-between">
        <Link href="/">
          <strong className="text-[#fff] text-[1.5rem]">Backloggd</strong>
        </Link>
        <ul className="text-text2 font-bold flex items-center">
          <Link href="/" className="text-[1.2rem] mr-[.5rem] hover:text-[#fff]">
            <FontAwesomeIcon icon={faBell} />
          </Link>
          {!mob && (
            <li className="user-button capitalize relative px-[.5rem] hover:bg-bg2 rounded-t-[.3rem]">
              <div className="flex items-center gap-[.8rem]">
                <span className="cursor-pointer hover:text-[#fff] py-[.4rem] block">
                  {name}
                </span>
                <FontAwesomeIcon icon={faChevronDown} size={"sm"} />
              </div>
              <ul className="user-dropdom-menu flex flex-col hidden pointer-events-none absolute rounded-b-[.3rem] bg-bg2 w-[100%] left-0 overflow-hidden">
                <UserNavOption url={"/"} underline={true} label={"profile"} />
                <UserNavOption url={"/"} label={"played"} />
                <UserNavOption url={"/"} label={"playing"} />
                <UserNavOption url={"/"} label={"backlog"} />
                <UserNavOption url={"/"} label={"backlog"} />
              </ul>
            </li>
          )}
          <li className="mr-[1rem] hover:text-[#fff] ml-[.5rem]">
            <Link href={"/"}>Games</Link>
          </li>
          {!mob && (
            <li className="flex gap-[.5rem]">
              <Input
                placeHolder="Search"
                icon={<FontAwesomeIcon icon={faMagnifyingGlass} size={"lg"} />}
              />
              <Button
                label={
                  <p>
                    <span className="font-bold text-[1.2rem] leading-[0px]">
                      +
                    </span>
                    Log a Game
                  </p>
                }
              />
            </li>
          )}
        </ul>
      </nav>
      {mob && <NavMenu />}
    </>
  );
}




