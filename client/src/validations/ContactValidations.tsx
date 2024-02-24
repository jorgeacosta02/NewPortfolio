import { z } from 'zod'


export const ContactSchema = z.object({
    name: z
        .string()
        .min(1, {
            message: 'Debés ingresar un nombre.'
        })
        .min(3, {
            message: 'El nombre debe tener al menos de 3 caracteres.'
        })
        .max(50, {
            message: 'El nombre debe tener como máximo 50 carecteres.'
        }),
    email: z
            .string()
            .min(1, {
                message: 'Debés ingresar un correo.'
            })
            .email({
                message: 'Por favor ingrese un correo válido.'
            }),
    subject: z
            .string()
            .min(1, {
                message: 'Debés ingresar un apellido.'
            }),
    message: z
        .string()
        .min(1, {
            message: 'Debés ingresar un contraseña.'
        })
        .min(10, {
            message: 'La contraseña debe tener al menos 10 caracteres.'
        }),
})
