import { LogOut } from 'lucide-react'
import { Button } from '../Button'
export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3 ">
      <img
        src={'https://github.com/bsvleste.png'}
        alt="foto de perfil"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">Bruno de Souza Valeiro</span>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">bvaleiro@gmail.com</span>
      </div>
      <Button type="button" variant='ghost'>
        <LogOut className='w-5 h-5 text-zinc-500' />
      </Button>
    </div>
  )
}