import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provide";
import { Toaster } from "sonner";

const inter = Poppins({
  subsets : ["latin"],
  weight : ["400" , "600"]
})

export const metadata = {
  title: "EduText",
  description: "The connected workspace where better faster work happens",
  icons : {
    icon : [
      {
        media : "(prefers-color-scheme : light)",
        url : "/logo.png",
        href : "/logo.png"
      },
      {
        media : "(prefers-color-scheme : dark)",
        url : "/logo-dark.png",
        href : "/logo-dark.png"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-[#1f1f1f] `}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey = "wboard-theme-2"
      >
      <Toaster position="bottom-center" />
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
