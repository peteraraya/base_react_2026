import { apiFetch } from '@/lib/api/client'
import type { Product, Paginated, CreateProduct, UpdateProduct } from '@/types'

export const productsApi = {
  list: (params: { page: number }) =>
    apiFetch<Paginated<Product>>('get', `/products?page=${params.page}`),
  detail: (id: string) => apiFetch<Product>('get', `/products/${id}`),
  create: (data: CreateProduct) => apiFetch<Product>('post', '/products', data),
  update: (id: string, data: UpdateProduct) =>
    apiFetch<Product>('put', `/products/${id}`, data),
  delete: (id: string) => apiFetch<void>('delete', `/products/${id}`),
}