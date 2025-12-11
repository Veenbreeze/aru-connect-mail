import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Shield } from "lucide-react";
import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Auth() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-accent/30">
      {/* Background Pattern */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
      </div>

      {/* Theme Toggle */}
      <div className="absolute right-4 top-4 z-10">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo & Header */}
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-glow"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Mail className="h-10 w-10 text-primary-foreground" />
            </motion.div>
            
            <h1 className="font-display text-3xl font-bold tracking-tight">
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary">CampusMail</span>
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">Ardhi University</p>
            <p className="mt-1 text-sm text-muted-foreground/70">Official Internal Mailing System</p>
          </motion.div>

          {/* Login Card */}
          <motion.div
            className="card-aru"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6">
              <h2 className="font-display text-xl font-semibold text-foreground">Welcome Back</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Sign in to access your @aru.ac.tz mailbox
              </p>
            </div>

            <LoginForm onSwitchToRegister={() => setShowRegister(true)} />
          </motion.div>

          {/* Security Badge */}
          <motion.div
            className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Shield className="h-4 w-4" />
            <span>Secured with end-to-end encryption</span>
          </motion.div>
        </div>
      </main>

      {/* Register Modal */}
      <RegisterForm
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onSuccess={() => setShowRegister(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
