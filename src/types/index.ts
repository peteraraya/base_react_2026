import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Mínimo 1 carácter'),
  price: z.number().positive('El precio debe ser positivo'),
})

export type Product = z.infer<typeof ProductSchema>

export type Paginated<T> = {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export type CreateProduct = Omit<Product, 'id'>
export type UpdateProduct = Partial<CreateProduct>

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
})

export type User = z.infer<typeof UserSchema>