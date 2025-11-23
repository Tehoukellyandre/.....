import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/conditions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/conditions"!</div>
}
