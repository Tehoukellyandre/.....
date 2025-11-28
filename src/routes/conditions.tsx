import { createFileRoute } from  '@tanstack/react-router'
import { ConditionsPage} from '../component/condition_session'

export const Route = createFileRoute('/conditions')({
  component: ConditionsPage,
})


