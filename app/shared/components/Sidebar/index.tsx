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
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
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
