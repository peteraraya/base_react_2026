import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HomePage } from '@/pages/HomePage'

// Mock react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'home.title': 'Welcome to Your Portfolio',
        'home.subtitle': 'This is a clean, frontend-only React template to start building your portfolio.'
      }
      return translations[key] || key
    }
  })
}))

describe('HomePage', () => {
  it('renders correctly', () => {
    render(<HomePage />)
    expect(screen.getByText('Welcome to Your Portfolio')).toBeInTheDocument()
  })
})
