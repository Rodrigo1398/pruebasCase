import { Sidebar } from "@/components/sidebar/Sidebar";

export default function CaseritaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-row">
      <Sidebar />
      {children}
    </main>
  );
}
