import { Link } from "@heroui/link";

import Navbar from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto max-w-7xl px-6 pt-16">
        {children}
      </main>
      <footer className="w-full py-6 mt-12 border-t">
        <div className="container mx-auto flex flex-col items-center justify-center gap-2 px-6 text-center text-sm text-muted-foreground">
          <Link
            isExternal
            className="flex items-center gap-1 hover:text-primary transition-colors"
            href="https://linkedin.com/in/tirth-bhatia"
            title="Visit my LinkedIn profile"
          >
            <span>© 2025 Tirth Bhatia. All Rights Reserved.</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
