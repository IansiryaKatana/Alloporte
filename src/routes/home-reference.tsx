import { createFileRoute } from '@tanstack/react-router'
import { AlloPorteLandingReference } from '@/components/alloporte-landing-reference'

export const Route = createFileRoute('/home-reference')({
  component: AlloPorteLandingReference,
})
