'use client';
import { useState } from 'react'
import { TabsItem } from "./TabsItem";
import { TabsDetails } from './TabsDetails';
import { TabsAccount } from './TabsAccount';
import * as Tabs from "@radix-ui/react-tabs";
import * as ScrollArea from '@radix-ui/react-scroll-area';
export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className='w-full' type='hover'>
        <ScrollArea.Viewport className='w-full overflow-x-scroll'>
          <Tabs.List
            className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabsItem value="tab1" title="My details" isSelected={currentTab === "tab1"} />
            <TabsItem value="tab2" title="Account" isSelected={currentTab === "tab2"} />
            <TabsItem value="tab3" title="Password" isSelected={currentTab === "tab3"} />
            <TabsItem value="tab4" title="Team" isSelected={currentTab === "tab4"} />
            <TabsItem value="tab5" title="Plan" isSelected={currentTab === "tab5"} />
            <TabsItem value="tab6" title="Billing" isSelected={currentTab === "tab6"} />
            <TabsItem value="tab7" title="Email" isSelected={currentTab === "tab7"} />
            <TabsItem value="tab8" title="Notifications" isSelected={currentTab === "tab8"} />
            <TabsItem value="tab9" title="Integrations" isSelected={currentTab === "tab9"} />
            <TabsItem value="tab10" title="API" isSelected={currentTab === "tab10"} />
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar className='flex h-1 translate-y-1.5 touch-none select-none flex-col bg-zinc-100' orientation='horizontal' >
          <ScrollArea.Thumb className='relative flex-1 rounded-lg bg-zinc-300' />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
      <TabsDetails value='tab1' />
      <TabsAccount value='tab2' />
    </Tabs.Root>
  );
}