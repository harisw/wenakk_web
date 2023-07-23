import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="cupcake" lang="en">
      <head>
        <title>Movierecc</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}