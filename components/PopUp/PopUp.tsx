import React,{useEffect} from 'react'
import Button from '../Button/Button';
import popUpOptions from '../../app/interfaces/popUpOptions'


interface props
{
   options:popUpOptions;
   setShow:React.Dispatch<React.SetStateAction<popUpOptions>>;
   bgClickable?:boolean;
   overflow?:boolean;
}

export default function PopUp(props:props) 
{

  const 
  { 
    options, 
    setShow, 
    bgClickable = true, 
    overflow = false,
   } = props;

  const{isShow,msg,title,list}=options

  useEffect(()=>
  {
    const body= document.querySelector('body')

    if(isShow&&!overflow)
    {
      
      body?.setAttribute('style','overflow:hidden');
      return
    }

    body?.setAttribute('style','overflow:auto');
  })
  
  return (
    <>
      <div
        className={`bg-[#000] z-[999] h-[100%] w-[100%] fixed top-0 left-0 transition-all duration-[200ms] flex justify-center items-center`}
        style={{
          opacity: isShow ? ".4" : "0",
          pointerEvents: isShow ? "auto" : "none",
        }}
        onClick={
          bgClickable
            ? () =>
                setShow((prev) => {
                  return { ...prev, isShow: false };
                })
            : undefined
        }
      ></div>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center fixed top-0 pointer-events-none z-[9999] px-[1.5rem]">
        <div
          className={`z-[9999] bg-bg2 p-[2rem] rounded-md transition-all duration-[200ms] ease-in-out flex flex-col items-center`}
          style={{
            opacity: isShow ? "1" : "0",
            pointerEvents: isShow ? "auto" : "none",
            transform: `translateY(${isShow ? "0" : "2rem"})`,
          }}
        >
          <h1 className="block text-center mb-[1rem] capitalize text-accept font-extrabold text-[2.5rem]">
            {title}
          </h1>
          <span className="block text-center mb-[1rem] text-text1 text-[1.3rem]">
            {msg}
          </span>
          {
            list&&
            <ul className='mb-[1rem]'>
            {
              list.map(entry=>
                {
                    return(
                      <li className=' text-text2'>-{entry.err}</li>
                    )
                })
            }
            </ul>
          }
          <Button
            label={"OK"}
            styles={"px-[2rem]"}
            onClick={() =>
              setShow((prev) => {
                return { ...prev, isShow: false };
              })
            }
          />
        </div>
      </div>
    </>
  );
}
