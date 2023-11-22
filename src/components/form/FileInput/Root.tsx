'use client'
import { useState, ComponentProps, createContext, useContext, useId } from "react"

type RootProps = ComponentProps<'div'>
type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multipe: boolean) => void
}
const FileInputContent = createContext({} as FileInputContextType)
export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])
  function handleSelectedFiles(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }
  return (
    <FileInputContent.Provider value={{ id, files, onFilesSelected: handleSelectedFiles }}>
      <div {...props} />
    </FileInputContent.Provider>)
}
export const useFileInput = () => useContext(FileInputContent)