export type Paginated<T> = {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// Add generic types, interfaces, or generic Zod schemas here
