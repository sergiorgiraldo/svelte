import { user } from '$lib/store/user.js'
import { redirect } from '@sveltejs/kit'

export const prerender = false;

export const actions = {
  default: async ({ cookies, request, fetch}) => {
    const data = await request.formData()
    const email = data.get('email')
    const password = data.get('password')

    if (
            typeof email !== 'string' ||
            typeof password !== 'string' ||
            !email ||
            !password
        ) {
            return {
        status: 400,
        body: {
          success: false,
        }
      }
        }

    const response = await fetch('http://localhost:5173/signin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email,
          password
        }
      })
    })

    if (response.ok) {
      const data  = await response.json()
      cookies.set('user', JSON.stringify(data.user))
      cookies.set('jwt', response.headers.get('Authorization'))
      let obj = {
        ...data,
        jwt: response.headers.get('Authorization')
      }
      user.set(obj)

      throw redirect(302, '/dashboard')
    } else {
      const { errors } = await response.json()
      return {
        status: 400,
        body: {
          success: false,
          errors
        }
      }
    }
  }
}