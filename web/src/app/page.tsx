import { User } from 'lucide-react'
import Image from 'next/image'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-[white]/10 px-28 py-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />

        {/* Sign In */}
        <a
          href=""
          className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>

          <p className="text-sm leading-snug max-w-[180px]">
            <span className="underline">Create your account</span> and save your
            memories!
          </p>
        </a>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="NLW Spacetime" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Your time capsule
            </h1>
            <p className="text-lg leading-relaxed">
              Collect memorable moments from your journey, and if you want,
              share them with the world!
            </p>
          </div>
          <a
            href=""
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
          >
            REGISTER MEMORY
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          By Emanuel Tavecia
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            You haven&apos;t recorded any memories yet, start{' '}
            <a
              href=""
              className="underline hover:text-gray-50 transition-colors"
            >
              creating now
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
