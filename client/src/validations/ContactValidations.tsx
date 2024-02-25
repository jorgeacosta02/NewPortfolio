import { z } from 'zod'


export const ContactSchema = z.object({
    name: z
        .string()
        .min(1, {
            message: 'Debe ingresar un nombre.'
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
                message: 'Debe ingresar un correo.'
            })
            .email({
                message: 'Por favor ingrese un correo válido.'
            }),
    subject: z
            .string()
            .min(1, {
                message: 'Debe ingresar un asunto.'
            }),
    message: z
        .string()
        .min(1, {
            message: 'Debe ingresar un mensaje.'
        }),
})
