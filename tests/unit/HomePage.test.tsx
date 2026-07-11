import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HomePage } from '@/pages/HomePage'

describe('HomePage', () => {
  it('renders correctly', () => {
    render(<HomePage />)
    expect(screen.getByText('Welcome to Your Portfolio')).toBeInTheDocument()
  })
})
