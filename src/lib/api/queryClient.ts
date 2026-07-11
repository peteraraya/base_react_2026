import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

// Define generic query keys here or split them into feature domains
export const queryKeys = {
  // Example:
  // users: {
  //   all: () => ['users'] as const,
  //   detail: (id: string) => ['users', id] as const,
  // },
}
