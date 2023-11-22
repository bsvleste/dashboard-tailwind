'use client';
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from 'framer-motion'
interface TabsItemsProps {
  value: string
  title: string
  isSelected?: boolean
}
export function TabsItem({ value, title, isSelected = false }: TabsItemsProps) {

  return (
    <Tabs.Trigger
      value={value}
      className="outline-none group data-[state=active]:text-violet-700 relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-500"
    >
      <span className="whitespace-nowrap group-focus-visible:ring-violet-200 group-focus-visible:ring-2 group-focus-visible:ring-offset-4 rounded ">{title}</span>
      {
        isSelected && (
          <motion.div layoutId="activeTab" className="absolute -bottom-px  left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300" />
        )
      }
    </Tabs.Trigger>
  )
}