import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { ProductsPage } from '../../src/pages/products/ProductsPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
})

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  )
}

describe('ProductsPage', () => {
  it('muestra error cuando el nombre está vacío', async () => {
    renderWithProviders(<ProductsPage />)
    await userEvent.click(screen.getByRole('button', { name: /guardar/i }))
    expect(await screen.findByText(/mínimo 1 carácter/i)).toBeInTheDocument()
  })
})