import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white h-16 flex justify-between items-center px-8 shadow">
      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-5">
        <Search />
        <Bell />
      </div>
    </header>
  );
}