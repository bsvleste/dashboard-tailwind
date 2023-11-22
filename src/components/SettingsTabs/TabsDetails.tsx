
import * as Tabs from "@radix-ui/react-tabs";
import * as Input from '@/components/form/Input'
import * as FileInput from '@/components/form/FileInput'

import { Bold, ChevronDownIcon, Italic, Link, List, ListOrdered, Mail, UploadCloud, User } from 'lucide-react'
import { Select } from "../form/Select";
import { SelectItem } from "../form/Select/SelectItem";
import { TextArea } from "../form/TextArea";
import { Button } from "../Button";
interface TabsDetailsProps {
  value: string
}
export function TabsDetails({ value }: TabsDetailsProps) {
  return (
    <Tabs.Content value={value}>
      <div className="mt-6 flex flex-col ">
        <div className="flex flex-col gap-4 sm:flex-row justify-between sm:items-center border-b pb-5 border-zinc-300 dark:border-zinc-700 ">

          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal Info</h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Update your photo and details here.</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              form="settings"
            >
              Save
            </Button>

          </div>
        </div>
        <form id="settings" className="divide-y divide-zinc-200 dark:divide-zinc-700 gap-5 mt-6 flex flex-col w-full ">
          <div className="flex flex-col gap-3 sm:grid  sm:grid-cols-form" >
            <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
            <div className="flex flex-col sm:grid gap-6 grid-cols-2">
              <Input.Root>
                <Input.Control id='name' placeholder="Name" />
              </Input.Root>
              <div className=" flex flex-col gap-3 sm:block">
                <label htmlFor="firstName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 sm:sr-only ">Last name</label>
                <Input.Root>
                  <Input.Control placeholder="Last name" />
                </Input.Root>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:grid gap-3 sm:grid-cols-form pt-5" >
            <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Adress</label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="text-zinc-500 dark:text-zinc-400 h-5 w-5" />
              </Input.Prefix>
              <Input.Control id='email' placeholder="Email" type="
                email" />
            </Input.Root>

          </div>

          <div className="flex flex-col sm:grid gap-3 sm:grid-cols-form pt-5" >
            <label htmlFor="photo" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Your Photo
              <span className="mt-0.5 text-sm font-normal  text-zinc-500 dark:text-zinc-400 block">This will display your on your photo profille</span>
            </label>
            <FileInput.Root className="flex flex-col sm:flex-row sm:items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col sm:grid gap-3 sm:grid-cols-form pt-5" >
            <label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Role</label>
            <Input.Root>
              <Input.Control id='role' placeholder="Role">
              </Input.Control>
            </Input.Root>

          </div>

          <div className="flex flex-col sm:grid gap-3 sm:grid-cols-form pt-5" >
            <label htmlFor="country" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Country
            </label>
            <Select placeholder="Select a Country">
              <SelectItem value="BR" text="Brasil" />
              <SelectItem value="AR" text="Argentina" />
            </Select>
          </div>

          <div className="flex flex-col sm:grid gap-3 sm:grid-cols-form pt-5" >
            <label htmlFor="timeZone" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Time zone</label>
            <Select placeholder="Select a Time Zone...">
              <SelectItem value="BR" text="America São Paulo (UTC-03:00)" />
              <SelectItem value="US" text="Pacific Standard Time(UTC-00:00)" />
            </Select>
          </div>

          <div className="flex flex-col sm:grid gap-3 sm:grid-cols-form pt-5" >
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Bio
              <span className="mt-0.5 text-sm font-normal  text-zinc-500 dark:text-zinc-400 block">
                Write a short introduction
              </span>
            </label>

            <div className="space-y-3">
              <div className="flex flex-col sm:grid gap-3 sm:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal Text" />
                  <SelectItem value="md" text="Makdown" />
                </Select>
                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className='w-4 h-4 text-zinc-500 dark:text-zinc-400 ' strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className='w-4 h-4 text-zinc-500 dark:text-zinc-400 ' strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className='w-4 h-4 text-zinc-500 dark:text-zinc-400 ' strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className='w-4 h-4 text-zinc-500 dark:text-zinc-400 ' strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered className='w-4 h-4 text-zinc-500 dark:text-zinc-400 ' strokeWidth={3} />
                  </Button>
                </div>
              </div>
              <TextArea id="bio" defaultValue="Write a bio" />
            </div>
          </div>
          <div className="flex flex-col sm:grid gap-3 sm:grid-cols-form pt-5" >
            <label htmlFor="projects" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Portifolio projects
              <span className="mt-0.5 text-sm font-normal  text-zinc-500 dark:text-zinc-400 block">
                Share a few snippers pf your work</span>
            </label>
            <FileInput.Root  >
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>
          <div className="flex items-center justify-end gap-2 pt-5">
            <Button
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              type="submit"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </Tabs.Content>
  )
}