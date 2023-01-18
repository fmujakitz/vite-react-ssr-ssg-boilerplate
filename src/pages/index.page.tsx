import { useState } from 'react'

export const meta = { title: "Home" }

export const Page = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Home</h1>
      <section className='mt-4'>
        <button
          className='bg-slate-600 text-white px-5 py-2 rounded'
          onClick={() => setCount(c => c + 1)}>
          Count is: {count}
        </button>
      </section>
      <section className='mt-4'>
        <a href="/about">About</a>
      </section>
    </>
  )
}