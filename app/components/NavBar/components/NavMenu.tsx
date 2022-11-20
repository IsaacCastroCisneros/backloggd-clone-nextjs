'use client'

import React from 'react'
import Button from '../../global-components/Button'
import Input from '../../global-components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface navMenu
{
  styles:string
}

export default function NavMenu({styles=''}:navMenu) 
{
  return (
    <div className={`flex flex-col custom-container ${styles}`} >
      <Input
        placeHolder="search"
        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        styles={'mb-[.5rem]'}
      />
      <Button
        label={
          <p>
            <span className="font-bold text-[1.2rem] leading-[0px]">+</span>
            Log a Game
          </p>
        }
      />
    </div>
  );
}
