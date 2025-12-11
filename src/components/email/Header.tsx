import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Bell, 
  Settings, 
  Mail, 
  ChevronDown,
  User,
  LogOut,
  HelpCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-4">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <motion.div
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary"
          whileHover={{ scale: 1.05 }}
        >
          <Mail className="h-5 w-5 text-primary-foreground" />
        </motion.div>
        <div>
          <h1 className="font-display text-lg font-bold text-foreground">CampusMail</h1>
          <p className="text-xs text-muted-foreground">Ardhi University</p>
        </div>
      </div>

      {/* Search */}
      <div className="hidden flex-1 items-center justify-center px-8 md:flex">
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search mail..."
            className="w-full rounded-xl border border-border bg-muted/50 py-2.5 pl-12 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
        
        <motion.button
          className="relative rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-destructive" />
        </motion.button>

        <motion.button
          className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Settings className="h-5 w-5" />
        </motion.button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-accent"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-semibold text-primary-foreground">
              JD
            </div>
            <div className="hidden text-left md:block">
              <p className="text-sm font-medium text-foreground">John Doe</p>
              <p className="text-xs text-muted-foreground">john.doe@aru.ac.tz</p>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>

          {showDropdown && (
            <motion.div
              className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-border bg-card py-2 shadow-card"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="border-b border-border px-4 py-3">
                <p className="font-medium text-foreground">John Doe</p>
                <p className="text-sm text-muted-foreground">john.doe@students.aru.ac.tz</p>
              </div>
              <div className="py-2">
                <button className="flex w-full items-center gap-3 px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                  <User className="h-4 w-4" />
                  Profile
                </button>
                <button className="flex w-full items-center gap-3 px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                  <Settings className="h-4 w-4" />
                  Settings
                </button>
                <button className="flex w-full items-center gap-3 px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                  <HelpCircle className="h-4 w-4" />
                  Help & Support
                </button>
              </div>
              <div className="border-t border-border pt-2">
                <button 
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 px-4 py-2 text-sm text-destructive transition-colors hover:bg-destructive/10"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}
