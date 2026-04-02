import './index.css'
import { cn } from './utils'

export function App() {
  return (
    <div className="flex h-svh w-full overflow-hidden bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
      <header className="flex shrink-0 items-center gap-2 py-2 z-10"></header>
      <main
        className={cn(
          'bg-background',
          'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2',
          'relative flex min-h-0 w-full flex-1 flex-col overflow-hidden lg:m-2',
          'rounded-none shadow-xs lg:rounded-lg',
          'ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10',
        )}
      >
        <div
          className={cn(
            'z-0 flex h-full min-h-0 w-full flex-1 flex-col gap-4 overflow-auto p-4 lg:p-8',
            'lg:rounded-lg',
            'bg-size-[40px_40px] bg-repeat',
            'bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
            'dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
          )}
        >
          <div
            className={cn(
              'absolute inset-0 z-[-1]',
              'lg:rounded-lg',
              'pointer-events-none bg-white mask-[radial-gradient(ellipse_at_center,transparent_0%,black_100%)] dark:bg-zinc-950'
            )}
          />
        </div>
      </main>
    </div>
  )
}

export default App
