
import Header from "./components/Header";
import './globals.css';
import { ThemeProvider } from "next-themes";
import ThemeComponent from "./components/ThemeComponent";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeModeScript } from "flowbite-react";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <ThemeModeScript />
        </head>  
        <body
          className=''
        >
          <ThemeProvider>
            <ThemeComponent>

                <Header/>
              
                {children}
            </ThemeComponent>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
