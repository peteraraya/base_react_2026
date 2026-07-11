import { http, HttpResponse } from 'msw'

export const productHandlers = [
  http.get('/api/products', () => {
    return HttpResponse.json({
      data: [{ id: '1', name: 'Mocked Product', price: 100 }],
      total: 1,
      page: 1,
      pageSize: 20,
      totalPages: 1,
    })
  }),
  http.post('/api/products', async ({ request }) => {
    const body = await request.json() as object
    return HttpResponse.json({ id: 'new-id', ...body }, { status: 201 })
  }),
]