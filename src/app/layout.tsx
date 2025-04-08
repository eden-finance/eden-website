import 'styles'
import { cn } from '~/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '~/provider/theme-provider'
import { retrive_theme } from '~/actions/theme'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = await retrive_theme()
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('antialiased', inter.variable)}>
        <ThemeProvider defaultTheme={theme}>
          <main className="bg-background">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
