import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/avis')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/avis"!</div>
}
