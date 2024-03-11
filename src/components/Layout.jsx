import { PageTransition } from 'next-page-transitions'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
  const router = useRouter()

  return (
    <div>
      <Navbar />
      <PageTransition
        timeout={300}
        classNames="page-transition"
        loadingDelay={500}
        loadingTimeout={{
          enter: 400,
          exit: 0,
        }}
        loadingClassNames="loading-indicator"
      >
        <div key={router.route}>{children}</div>
      </PageTransition>
    </div>
  )
}

export default Layout
