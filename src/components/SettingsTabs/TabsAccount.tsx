'use client';
import * as Tabs from "@radix-ui/react-tabs";
interface TabsAccountProps {
  value: string
}
export function TabsAccount({ value }: TabsAccountProps) {
  return (
    <Tabs.Content value={value}>
      <span>{value}</span>
    </Tabs.Content>
  )
}