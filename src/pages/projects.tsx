import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function Projects() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center py-14 px-6">
        <div className="text-center max-w-2xl mb-12">
          <h1 className={title()}>Projects</h1>
          <p className="text-base text-muted-foreground mt-2">
            Projects aren&apos;t added yet. Stay tuned for updates! <br />
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
