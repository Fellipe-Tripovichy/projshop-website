"use client"

import { SpeedInsights } from "@vercel/speed-insights/next"

import type { Metadata } from 'next'
import { Mukta } from 'next/font/google'
import './globals.css'

import NavBar from './components/global/NavBar'

const mukta = Mukta({ subsets: ['latin'], weight: ['200','300','400','500','600','700','800'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NavBar/>
      <body className={mukta.className}>{children}</body>
    </html>
  )
}
