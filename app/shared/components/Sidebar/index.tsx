'use client'

import React from 'react'
import { Logo } from './components/Logo'
import { Cog, LifeBuoy, Menu, Search } from 'lucide-react'
import { MainNavigation } from './components/MainNavigation'
import { NavItem } from './components/NavItem'
import { UseSpacingWidget } from './components/UseSpacingWidget'
import { UserProfile } from './components/UserProfile'
import { InputController, InputPrefix, InputRoot } from '../Form/Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

export const Sidebar = () => {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6 dark:text-zinc-100" />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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

          <div className="h-px rounded bg-zinc-300 dark:bg-zinc-700"></div>

          <UserProfile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
