import { createFileRoute } from '@tanstack/react-router'
import  { ContactPage } from '../component/contact'
export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

