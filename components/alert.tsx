import Container from './container'

type Props = {
  children: React.ReactNode
}

const Alert = ({ children }: Props) => {
  return (
    <div className="border-t border-b bg-neutral-50 border-neutral-200">
      <Container>
        <div className="py-2 text-center text-sm">
          {children}
        </div>
      </Container>
    </div>
  )
}

export default Alert
