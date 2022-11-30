import React from 'react'
import HeroBox from './components/HeroBox';
import LinkButton from '../../../components/LinkButton/LinkButton'
import {
  faMagnifyingGlass,
  faFolderOpen,
  faChartSimple,
  faGlobe,
  faNewspaper,
  faFilter,
  faUsers,
  faGamepad,
  faSquareCheck,
  faStar,
  faList,
  faBook,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <article>
        <section className="text-center mb-[1.3rem]">
          <h1 className="font-bold text-[#fff] text-[4.7rem] mob:text-[4rem]">Backloggd</h1>
          <p className=" text-text1 font-bold text-[1.5rem] mob:text-[1rem]">
            Discover, Collect, Analyze your Games
          </p>
          <LinkButton
            href="/user/sign_up"
            label="Crate an account"
            styles="mt-[1.2rem] text-[1.2rem]"
          />
        </section>
        <section className="flex justify-center gap-[1.3rem] mob:flex-col">
          <HeroBox
            styles="flex-1"
            icon={faMagnifyingGlass}
            headerLabel={"Discover"}
            list=
            {
              [
                {icon:faGlobe,text:'Every game, all platforms'},
                {icon:faMagnifyingGlass,text:'Extensive Search'},
                {icon:faNewspaper,text:'Frontpage Feed'},
                {icon:faFilter,text:'Filters and Sorting'},
                {icon:faUsers,text:'Follow Friends'},
              ]
            }
          />
          <HeroBox styles="flex-1" icon={faFolderOpen} headerLabel={"Collect"}
           list=
           {
              [
                {icon:faGamepad,text:'Log Games'},
                {icon:faSquareCheck,text:'Mark Game Statuses'},
                {icon:faStar,text:'Rate and Review'},
                {icon:faList,text:'Create Lists'},
                {icon:faBook,text:'Daily Calendar Journal'},
              ]
           }
          />
          <HeroBox styles="flex-1" icon={faChartSimple} headerLabel={"Analyze"}
           list=
           {
              [
                {icon:faChartSimple,text:'See your Totals'},
                {icon:faBook,text:'Journal Overview'},
                {icon:faChartPie,text:'Personal Stats'},
              ]
           }
           />
        </section>
      </article>
  )
}
