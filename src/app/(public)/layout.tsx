import Navigation from "@/components/commons/navigation-bar/navigation";
import Footer from "@/components/footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <script async src="https://www.tiktok.com/embed.js"></script>
      <header>
        <Navigation />
      </header>
      <main className="mx-auto flex max-w-[1400px] flex-1 flex-col">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
