import { useRouter } from 'next/router'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  const router = useRouter()

  return (
    <div className="relative min-h-screen animated-gradient overflow-hidden">
      {/* Blurred decorative shapes */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl opacity-60 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-2xl opacity-40 z-0"></div>
      <Navbar />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div
          key={router.route}
          className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 my-8"
        >
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
