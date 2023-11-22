'use client'
import { Logo } from "../Logo";
import { MainNavigation } from "./MainNavigation";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { InfoNavigation } from "./InfoNavigation";
import { Profile } from "./Profile";
import { Menu, Search } from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible';
import * as Input from "@/components/form/Input";
import { Button } from "../Button";
export function Sidebar() {
  return (
    <Collapsible.Root className="sm:right-auto sm:w-80 fixed bg-white left-0 top-0  data-[state=open]:bottom-0  right-0 z-20 flex flex-col gap-6 border-b sm:border-r p-4 border-zinc-200 sm:px-5 sm:py-8 dark:bg-zinc-900 dark:border-zinc-800 ">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="sm:hidden">
          <Button variant="ghost">
            <Menu className="h-5 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content forceMount className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden sm:data-[state=closed]:flex">
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control type="text" placeholder="Search" />
        </Input.Root>
        <MainNavigation />
        <div className="mt-auto flex flex-col gap-6">
          <InfoNavigation />
        </div>
        <UsedSpaceWidget />
        <div className="h-px bg-zinc-300 dark:bg-zinc-700"></div>
        <Profile />
      </Collapsible.Content>
    </Collapsible.Root>
  )
} 