import React from 'react'

type Props = {}

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col flex-1 max-w-96 w-full m-auto h-screen gap-6">{children}</div>
  )
}