import React from 'react'
import { Logo } from './components/Logo'
import { Search } from 'lucide-react'
import { MainNavigation } from './components/MainNavigation'

export const Sidebar = () => {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          type="text"
          placeholder="Search"
          className="
          flex-1
          border-0
          p-0
          text-zinc-900
          placeholder-zinc-600
          outline-none
          "
        />
      </div>

      <MainNavigation />
    </aside>
  )
}
