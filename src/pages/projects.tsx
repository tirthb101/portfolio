import { title } from "@/components/primitives";

export default function Projects() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background py-14 px-6">
      <div className="text-center max-w-3xl mx-auto">
        {/* Heading Section */}
        <h1
          className={`${title()} text-4xl sm:text-5xl font-semibold text-primary mb-6`}
        >
          Projects
        </h1>

        {/* Subheading Section */}
        <p className="text-lg sm:text-xl text-muted-foreground mt-2">
          Projects aren&apos;t added yet. Stay tuned for updates!
        </p>

        {/* Optional additional styles for spacing */}
        <div className="mt-8">
          <p className="text-sm text-muted-foreground">
            Feel free to explore other sections of the website.
          </p>
        </div>
      </div>
    </section>
  );
}
