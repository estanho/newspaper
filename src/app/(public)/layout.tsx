import Footer from "@/components/commons/footer";
import Navigation from "@/components/commons/navigation";
import Search from "@/components/commons/search";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-dvh flex-col font-text leading-7 tracking-wider">
      <header>
        <Navigation />
      </header>

      <main className="mx-auto flex max-w-7xl flex-1 flex-col">
        <Search />
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
