import React from 'react'
import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react'
import { NavItem } from './NavItem'

const NavItemContent = [
  { title: 'Home', icon: Home },
  { title: 'Dashboard', icon: BarChart },
  { title: 'Projects', icon: SquareStack },
  { title: 'Tasks', icon: CheckSquare },
  { title: 'Reporting', icon: Flag },
  { title: 'Users', icon: Users },
]

export const MainNavigation = () => {
  return (
    <nav className="space-y-0.5">
      {NavItemContent.map((item) => (
        <NavItem
          key={item.title}
          icon={item.icon}
          title={item.title}
          hasArrow={true}
        />
      ))}
    </nav>
  )
}
