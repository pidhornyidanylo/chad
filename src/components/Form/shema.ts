import { z } from 'zod';

export const FormDataSchema = z.object({
  yourName: z.string().min(1, 'Last name is required'),
  email: z.string().min(4, 'Email is required').email('Invalid email address'),
  password: z
    .string()
    .min(10, 'Password must be at least 10 characters long')
    .refine(
      (value) => /[A-Z]/.test(value),
      'Password must contain at least one uppercase letter'
    )
    .refine(
      (value) => /[a-z]/.test(value),
      'Password must contain at least one lowercase letter'
    )
    .refine(
      (value) => /[0-9]/.test(value),
      'Password must contain at least one number'
    )
    .refine(
      (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
      'Password must contain at least one special character'
    ),
});
