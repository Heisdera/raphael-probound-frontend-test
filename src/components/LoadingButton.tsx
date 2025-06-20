import FramerButton from './FramerButton'

export default function LoadingButton({
  pending,
  text,
}: {
  pending: boolean
  text: string
}) {
  return (
    <FramerButton
      isLoading={pending}
      disabled={pending}
      text={text}
      className="transition-all duration-200"
    />
  )
}
