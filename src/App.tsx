import './index.css'
import { cn } from './utils'

export function App() {
  return (
    <div className="flex min-h-svh w-full">
      <div
        className={cn(
          'w-full',
          'rounded-xl',
          'overflow-hidden'
        )}
      >
        <div
          className={cn(
            'h-full',
            'rounded-lg',
            'bg-size-[40px_40px] bg-repeat',
            'bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          )}
        >
          Hello World
        </div>
      </div>
    </div>
  )
}
