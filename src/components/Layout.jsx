import { useRouter } from 'next/router'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  const router = useRouter()

  return (
    <div>
      <Navbar />
      <div key={router.route}>{children}</div>
    </div>
  )
}

export default Layout
