import React from 'react'
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'
import { donkiMessageType } from '../../types/donkiTypes'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { regexHelper } from '../../helpers/regexHelpers'
import Navbar from '../../components/Navbar'

type Props = {
  message: String
}


const Donki = (props: Props) => {
  return (
    <div>
      <Navbar/>
      <div className='bg-white relative left-1/4 text-black w-1/2 flex justify-center border border-black shadow-2xl'>
        <div className='prose'>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {String(props.message)}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default Donki

export const getStaticProps: GetStaticProps = async (context : GetStaticPropsContext) => {
  const res = await fetch(`https://api.nasa.gov/DONKI/notifications?type=all&api_key=${process.env.NASA_API_KEY}`)
  const data = await res.json()
  const messages : String[] = []
  data.forEach((message: donkiMessageType) => {
      message.messageBody = regexHelper(message.messageBody)
      messages.push(message.messageBody)
  })
  messages.shift()
  
  const { params } = context
  
  return {
    
    props:{
      //@ts-ignore
      message: messages[Number(params.donkiId)]
    }
  }
}

export const getStaticPaths : GetStaticPaths = async(context) => {
  const res = await fetch(`https://api.nasa.gov/DONKI/notifications?type=all&api_key=${process.env.NASA_API_KEY}`)
  const data = await res.json()
  const messages : String[] = []
  data.forEach((message: donkiMessageType) => {
      message.messageBody = regexHelper(message.messageBody)
      messages.push(message.messageBody)
  })
  const paths = messages.map( (item : String, index: number) => {
    return {
        params: { donkiId: String(index)}
   
    }
}
   
)
  return {
    paths,
    fallback: false
  }
}