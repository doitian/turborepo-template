import Button from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col gap-4 justify-center items-center min-h-screen text-slate-500">
      <h1>Turbo</h1>
      <p>
        <Button>Repo</Button>
      </p>
    </main>
  );
}
