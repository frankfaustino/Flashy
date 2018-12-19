import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
  <header className="header">
    <nav>
      <Link href="/"><a>Home</a></Link>
      <Link href="/decks"><a>Decks</a></Link>
      <Link href="/profile"><a>Profile</a></Link>
      <Link href="/settings"><a>Settings</a></Link>
    </nav>
  </header>
)