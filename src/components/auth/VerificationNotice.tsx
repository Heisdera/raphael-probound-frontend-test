import { Logo } from '../Logo'
import { Button } from '../ui/button'

interface VerificationNoticeProps {
  email: string
  onBackToLogin: () => void
}

const VerificationNotice: React.FC<VerificationNoticeProps> = ({
  email,
  onBackToLogin,
}) => (
  <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center border-none px-6 shadow-none">
    <Logo />

    <h2 className="mt-5 mb-2 text-xl font-semibold md:text-[26px] lg:text-3xl">
      Verification
    </h2>

    <p className="text-center">We just sent a verification link to</p>

    <p className="text-pc-500 mb-6 font-medium">{email}</p>

    <Button
      className="bg-pc-500 hover:bg-pc-500/60 w- self-stretch rounded-lg px-8 py-3 font-semibold text-white"
      onClick={onBackToLogin}
    >
      Back to login
    </Button>
  </div>
)

export default VerificationNotice
