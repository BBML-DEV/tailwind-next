import React from 'react'
import { Logo } from './components/Logo'
import { Cog, LifeBuoy, Search } from 'lucide-react'
import { MainNavigation } from './components/MainNavigation'
import { NavItem } from './components/NavItem'
import { UseSpacingWidget } from './components/UseSpacingWidget'
import { UserProfile } from './components/UserProfile'
import { InputController, InputPrefix, InputRoot } from '../Form/Input'

export const Sidebar = () => {
  return (
    <aside className="fixed bottom-0 left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 lg:relative lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
      <Logo />
      <InputRoot>
        <InputPrefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </InputPrefix>
        <InputController placeholder="Search" />
      </InputRoot>

      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} hasArrow={false} />
          <NavItem title="Settings" icon={Cog} hasArrow={false} />
        </nav>

        <UseSpacingWidget />

        <div className="h-px rounded bg-zinc-300"></div>

        <UserProfile />
      </div>
    </aside>
  )
}
