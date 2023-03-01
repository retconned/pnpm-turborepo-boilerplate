// import { Accordion, Button } from "@retconned/ui"
import { Button } from "@retconned/ui"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main>
      <div>
        <p>
          Get started by editing&nbsp;
          <code>src/app/page.tsx</code>
        </p>
        <Button intent={"fill"} text='hello'>
          World
        </Button>
      </div>
    </main>
  )
}
