import {
    LayoutDashboard,
    Bitcoin,
    Briefcase,
    Star,
    Settings,
  } from "lucide-react";
  
  const menu = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Crypto", icon: Bitcoin },
    { name: "Portfolio", icon: Briefcase },
    { name: "Watchlist", icon: Star },
    { name: "Settings", icon: Settings },
  ];
  
  export default function Sidebar() {
    return (
      <aside className="w-64 bg-slate-900 text-white h-screen p-6">
        <h1 className="text-2xl font-bold mb-10">
          CryptoDash
        </h1>
  
        <nav className="space-y-3">
          {menu.map((item) => {
            const Icon = item.icon;
  
            return (
              <div
                key={item.name}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer"
              >
                <Icon size={20} />
                {item.name}
              </div>
            );
          })}
        </nav>
      </aside>
    );
  }