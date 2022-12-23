import React from 'react'
import Link from 'next/link'
import {AiOutlineHome , AiOutlineFolderOpen, AiOutlineBorderlessTable} from 'react-icons/ai'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='border inline-flex w-full justify-evenly'>
        <Link href = "/">
            <AiOutlineHome size={50} color = {'white'}/>
        </Link>
        <Link href = "/donki/1">
            <AiOutlineFolderOpen color = {'white'} size={50}/>
        </Link>
        <Link href = "/neo">
            <AiOutlineBorderlessTable color = {'white'} size={50}/>
        </Link>
    </nav>
  )
}

export default Navbar