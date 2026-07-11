import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { productsApi } from './productsApi'
import { queryKeys } from '@/lib/api/queryClient'
import { useUIStore } from '@/stores/uiStore'
import { CreateProduct } from '@/types'

export function useProducts(page: number) {
  return useQuery({
    queryKey: queryKeys.products.list({ page }),
    queryFn: () => productsApi.list({ page }),
    staleTime: 1000 * 60 * 5,
  })
}

export function useCreateProduct() {
  const qc = useQueryClient()
  const addToast = useUIStore((s) => s.addToast)

  return useMutation({
    mutationFn: (data: CreateProduct) => productsApi.create(data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: queryKeys.products.all() })
      addToast('Producto creado', 'success')
    },
    onError: () => addToast('Error al crear producto', 'error'),
  })
}