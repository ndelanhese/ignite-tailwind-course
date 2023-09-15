import { Logo } from '../icons/logo'
import { SearchBar } from './searchBar'

export const Sidebar = () => (
  <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
    <Logo />
    <SearchBar />
  </aside>
)
