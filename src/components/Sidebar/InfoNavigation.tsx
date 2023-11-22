import { NavItem } from "./MainNavigation/NavItem";
import { Settings, LifeBuoy } from 'lucide-react'

export function InfoNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Support" icon={LifeBuoy} />
      <NavItem title="Settings" icon={Settings} />
    </nav>
  )
}