import { Button } from './components/Button'
import { ButtonTheme } from './components/ButtonTheme'

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center bg-white dark:bg-gray-950">
      <header className="flex h-10">
        <ButtonTheme />
      </header>
      <main className="flex flex-1 items-center justify-center">
        <Button>Ola</Button>
      </main>
    </div>
  )
}
