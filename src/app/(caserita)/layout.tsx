import { Footer, NavBarCategories, Navbar } from "@/components";


export default function CaseritaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <main className="bg-white text-black">
      <Navbar/>
      <NavBarCategories/>
      {children}
      <Footer/>
    </main>
  );
}
