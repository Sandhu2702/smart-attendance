import { http, HttpResponse } from 'msw'

export const handlers = [
  // Auth mock
  // Update patterns to match the actual client baseURL usage (/api/...)
  http.post('*/api/auth/login', async ({ request }) => {
    return HttpResponse.json({
      access_token: 'mock-token-123',
      token_type: 'bearer',
      user: {
        id: 'user-123',
        email: 'test@example.com',
        name: 'Test User',
        role: 'student'
      }
    })
  }),

  http.get('*/api/auth/me', () => {
    return HttpResponse.json({
        id: 'user-123',
        email: 'test@example.com',
        name: 'Test User',
        role: 'student'
    })
  }),

  // Attendance mock
  http.post('*/api/attendance/mark', () => {
    return HttpResponse.json({
        message: 'Attendance marked successfully',
        status: 'present',
        confidence: 0.95,
        faces: [] // Required by captureAndSend logic
    })
  }),

  http.get('*/api/attendance/history', () => {
    return HttpResponse.json([
        {
            date: '2023-10-01',
            status: 'present',
            subject: 'Mathematics'
        }
    ])
  })
]
