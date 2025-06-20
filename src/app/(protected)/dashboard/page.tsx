import { auth } from '@/auth'
import { LogoutButton } from '@/components/buttons/LogoutButton'

export default async function Page() {
  const session = await auth()
  console.log(session)

  return (
    <div className="mx-auto flex max-w-lg flex-col justify-center gap-4 px-3 pt-10 text-center">
      <h1 className="text-lg font-medium md:text-2xl">
        Hey 👋 {session?.user?.email}, <br />
        Welcome to your ProBound Dashboard
      </h1>

      <p className="text-sm">
        This is a protected route, only accessible to authenticated users.
      </p>

      <div className="mt-5 self-end">
        <LogoutButton />
      </div>
    </div>
  )
}
