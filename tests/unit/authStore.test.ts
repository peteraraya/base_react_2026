import { describe, it, expect } from 'vitest'
import { useAuthStore } from '../../src/stores/authStore'

describe('authStore', () => {
  it('setAuth actualiza isAuthenticated a true', () => {
    const { setAuth } = useAuthStore.getState()
    const mockUser = { id: '1', email: 'test@test.com', name: 'Test' }
    
    setAuth(mockUser, 'token-abc')
    
    expect(useAuthStore.getState().isAuthenticated).toBe(true)
    expect(useAuthStore.getState().user).toEqual(mockUser)
    expect(useAuthStore.getState().token).toBe('token-abc')
  })
})