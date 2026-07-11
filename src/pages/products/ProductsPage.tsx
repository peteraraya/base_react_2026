import { useState } from 'react'
import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { ProductSchema } from '@/types'
import { useProducts, useCreateProduct } from '@/features/products/productsHooks'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

function CreateProductForm() {
  const createProduct = useCreateProduct()

  const form = useForm({
    defaultValues: { name: '', price: 0 },
    validatorAdapter: zodValidator(),
    onSubmit: async ({ value }) => {
      await createProduct.mutateAsync(value)
      form.reset()
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="flex gap-4 items-start"
    >
      <form.Field name="name" validators={{ onChange: ProductSchema.shape.name }}>
        {(field) => (
          <Input
            placeholder="Nombre"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            error={field.state.meta.errors[0]?.toString()}
          />
        )}
      </form.Field>

      <form.Field name="price" validators={{ onChange: ProductSchema.shape.price }}>
        {(field) => (
          <Input
            type="number"
            placeholder="Precio"
            value={field.state.value}
            onChange={(e) => field.handleChange(Number(e.target.value))}
            error={field.state.meta.errors[0]?.toString()}
          />
        )}
      </form.Field>

      <Button type="submit" disabled={form.state.isSubmitting}>
        {form.state.isSubmitting ? 'Guardando...' : 'Guardar'}
      </Button>
    </form>
  )
}

export function ProductsPage() {
  const [page, setPage] = useState(1)
  const { data, isLoading, error } = useProducts(page)

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Productos</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Crear nuevo</h2>
        <CreateProductForm />
      </div>

      <div className="bg-white rounded shadow p-4">
        {isLoading ? (
          <p>Cargando productos...</p>
        ) : error ? (
          <p className="text-red-500">Error al cargar los productos</p>
        ) : (
          <div>
            <ul className="divide-y mb-4">
              {data?.data.map((product) => (
                <li key={product.id} className="py-2 flex justify-between">
                  <span>{product.name}</span>
                  <span className="font-medium">${product.price}</span>
                </li>
              ))}
              {data?.data.length === 0 && <p>No hay productos</p>}
            </ul>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                disabled={page === 1}
                onClick={() => setPage(p => p - 1)}
              >
                Anterior
              </Button>
              <Button
                variant="secondary"
                disabled={page >= (data?.totalPages || 1)}
                onClick={() => setPage(p => p + 1)}
              >
                Siguiente
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}