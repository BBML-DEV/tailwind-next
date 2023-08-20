'use client'

import { SettingsTabs } from './shared/components/SettingsTabs'
import * as Input from './shared/components/Form/Input'
import {
  Bold,
  Italic,
  Link,
  List,
  ListOrdered,
  LogOut,
  Mail,
} from 'lucide-react'
import * as FileInput from './shared/components/Form/FileInput'
import { Select } from './shared/components/Form/Select'
import { SelectItem } from '@/app/shared/components/Form/Select/SelectItem'
import { TextArea } from './shared/components/Form/Textarea'
import { Button } from './shared/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex w-full items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and persona details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.InputRoot>
                <Input.InputController id="firstName" defaultValue="Paulo" />
              </Input.InputRoot>

              <Input.InputRoot>
                <Input.InputController defaultValue="Vitor" />
              </Input.InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>

            <Input.InputRoot>
              <Input.InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.InputPrefix>
              <Input.InputController
                id="email"
                type="email"
                defaultValue="pvmldev@gmail.com"
              />
            </Input.InputRoot>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="flex flex-col gap-0.5 text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePrev />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>

            <Input.InputRoot>
              <Input.InputController
                id="role"
                type="text"
                defaultValue="Developer Junior"
              />
            </Input.InputRoot>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone..">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00) "
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="bio"
              className="flex flex-col gap-0.5 text-sm font-medium text-zinc-700"
            >
              Bio
              <span className="text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal" />
                  <SelectItem value="md" text="MarkDown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" />
                  </Button>

                  <Button type="button" variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" />
                  </Button>

                  <Button type="button" variant="ghost">
                    <ListOrdered className="h-4 w-4 text-zinc-500" />
                  </Button>
                </div>
              </div>

              <TextArea
                id="bio"
                defaultValue={"I'm a computer science student"}
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="flex flex-col gap-0.5 text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FilesList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end pt-5">
            <div className="flex gap-2">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                save
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
