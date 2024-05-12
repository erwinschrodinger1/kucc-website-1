import AdvisoryCard from '@/app/advisory-board/components/AdvisoryCard'
import { Metadata } from 'next'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Advisory Board - Kathmandu University Computer Club',
  description:
    'Advisory Board of Kathmandu University consists of Associate Professor Bal Krishna Bal, Head of Department of DoCSE and Assistant Professor Pankaj Raj Dawadi, DoCSE',
}

const advisorsList = [
  {
    name: 'Assoc. Prof. Dr. Bal Krishna Bal',
    position: 'Head of Department, DoCSE',
    image: '/people/Bal_Krishna_Bal.webp',
    linkedin: 'https://www.linkedin.com/in/bal-krishna-bal-4bb71a19/',
    mail: 'bal@ku.edu.np',
  },
  {
    name: 'Asst. Prof. Pankaj Raj Dawadi',
    position: 'Assistant Professor, DoCSE',
    image: '/people/Pankaj_Raj_Dawadi.webp',
    linkedin: 'https://www.linkedin.com/in/pankaj-dawadi-83467b7a/',
    mail: 'pdawadi@ku.edu.np',
  },
]

export default function AdvBoard() {
  return (
    <div className='flex flex-col p-5 justify-center items-center max-w-screen-xl mx-auto'>
      <Card className='w-full border-2 shadow-lg bg-baseBackground px-4'>
        <CardHeader className='flex items-center'>
          <CardDescription className='text-gray-500 text-lg'>KUCC Board 2023-24</CardDescription>
          <CardTitle className='text-titleColor text-3xl'>Advisors</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-5 lg:hidden justify-center items-center rounded-xl">
          {advisorsList.map((advisor) => (
            <div key={advisor.mail}>
              <AdvisoryCard {...advisor} />
            </div>
          ))}
        </CardContent>
        <CardContent className="hidden lg:flex lg:space-y-0 space-x-10 xl:space-x-12 justify-around rounded-xl">
          {advisorsList.map((advisor) => (
            <div key={advisor.mail}>
              <AdvisoryCard {...advisor} />
            </div>
          ))}
        </CardContent>
        <CardFooter className='flex justify-center items-center'>
          <h1 className='text-titleColor text-sm sm:text-base md:text-xl'>Department of Computer Science and Engineering</h1>
        </CardFooter>
      </Card>
    </div>
  )
}
