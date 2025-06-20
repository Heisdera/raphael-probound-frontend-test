import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loader2 className="text-pc-500 size-8 animate-spin" />
    </div>
  )
}
