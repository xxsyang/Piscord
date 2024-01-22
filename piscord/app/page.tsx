import Image from 'next/image'

export default function Home() {
  return (
    <div className = "flex flex-col items-center justify-center min-h-screen py-2">
    <p className = "text-4xl text-center text-indigo-500 font-bold">
      Hello World, this is Piscord
    </p>
    <button>
      login with Piscord
    </button>
    </div>
  )
}


