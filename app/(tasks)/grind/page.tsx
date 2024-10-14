import { ProblemList } from "@/components/problem-list"

export default function Grind() {
  return (
    <section className="h-screen">
      <h1 className="my-2 flex flex justify-center font-heading text-5xl">
        Grind List
      </h1>
      <div className="container flex max-w-[64rem] flex-col">
        <ProblemList category="grind" />
      </div>
    </section>
  )
}
