import { PropsWithChildren } from 'react'
import { AxiosError } from 'axios'

interface Props {
  error: AxiosError
}

export function ErrorMessage({ error, children }: PropsWithChildren<Props>) {
  return (
    <div>
      <p className="mb-2 leading-8">{children}</p>
      <p>
        Error code: <code>{error.code}</code>
      </p>
      <p className="mb-2">
        Error message: <code>{error.message}</code>
      </p>
      <p className="leading-8">
        If you&apos;re still having trouble, please contact our support team at{' '}
        <a className="text-purple-500" href="mailto:support@example.com">support@example.com</a>.
      </p>
    </div>
  )
}
