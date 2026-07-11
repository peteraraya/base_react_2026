import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

export const queryKeys = {
  products: {
    all: () => ['products'] as const,
    list: (p: unknown) => ['products', 'list', p] as const,
    detail: (id: string) => ['products', 'detail', id] as const,
  },
}