import { LogOut } from 'lucide-react'
import React from 'react'
import { Button } from '../../Button'

export const UserProfile = () => {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/BBML-DEV.png"
        alt=""
        className="h-10 w-10 overflow-hidden rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Paulo Vitor
        </span>
        <span className="truncate text-sm text-zinc-500">
          pvmldev@gmail.com
        </span>
      </div>

      <Button type="button" className="ml-auto" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500 hover:text-violet-500 dark:text-zinc-400" />
      </Button>
    </div>
  )
}
