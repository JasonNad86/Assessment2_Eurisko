import {z} from 'zod';
import { UserStatus } from '../../mock/mock.type';

export const schema = z.object({
    firstName: z.string().trim().min(1, "First name is required"),
    lastName: z.string().optional(),
    email: z.string().email("Email is required"),
    dateOfBirth: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date is required")
    .refine(val => !isNaN(new Date(val).getTime()), {
      message: "Invalid date"
    }),
    status: z.nativeEnum(UserStatus, {
        errorMap: () => ({ message: "Status is required" }),
      }),
})

export type UserSchema = z.infer<typeof schema>;