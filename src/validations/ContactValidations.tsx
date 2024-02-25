import { z } from 'zod'
import { selectLangState } from '../redux/slices/langSlice'
import { useSelector } from 'react-redux'

// Definir el esquema de validación
export const ContactSchema = () => {
    // Obtener el estado del lenguaje
    const langState: any = useSelector(selectLangState).lang;

    // Definir los mensajes en ambos idiomas
    const errorMessage = langState === 'es' ? 'Debe ingresar un nombre.' : 'You must enter a name.';
    const lengthErrorMessage = langState === 'es' ? 'El nombre debe tener al menos 3 caracteres.' : 'The name must be at least 3 characters long.';
    const maxLengthErrorMessage = langState === 'es' ? 'El nombre debe tener como máximo 50 caracteres.' : 'The name must be maximum 50 characters long.';

    return z.object({
        name: z
            .string()
            .min(1, { message: errorMessage })
            .min(3, { message: lengthErrorMessage })
            .max(50, { message: maxLengthErrorMessage }),
        email: z
            .string()
            .min(1, { message: langState === 'es' ? 'Debe ingresar un correo.' : 'You must enter an email.' })
            .email({ message: 'Por favor ingrese un correo válido.' }),
        subject: z
            .string()
            .min(1, { message: langState === 'es' ? 'Debe ingresar un asunto.' : 'You must enter a subject.' }),
        message: z
            .string()
            .min(1, { message: langState === 'es' ? 'Debe ingresar un mensaje.' : 'You must enter a message.' }),
    });
};



















// import { z } from 'zod'
// import { selectLangState } from '../redux/slices/langSlice'
// import { useSelector } from 'react-redux'

// // Obtener el estado del lenguaje
// const langState: any = useSelector(selectLangState).lang;

// // Definir los mensajes en ambos idiomas
// const errorMessage = langState === 'es' ? 'Debe ingresar un nombre.' : 'You must enter a name.';
// const lengthErrorMessage = langState === 'es' ? 'El nombre debe tener al menos 3 caracteres.' : 'The name must be at least 3 characters long.';
// const maxLengthErrorMessage = langState === 'es' ? 'El nombre debe tener como máximo 50 caracteres.' : 'The name must be maximum 50 characters long.';

// // Definir el esquema de validación
// export const ContactSchema = z.object({
//     name: z
//         .string()
//         .min(1, { message: errorMessage })
//         .min(3, { message: lengthErrorMessage })
//         .max(50, { message: maxLengthErrorMessage }),
//     email: z
//         .string()
//         .min(1, { message: langState === 'es' ? 'Debe ingresar un correo.' : 'You must enter an email.' })
//         .email({ message: 'Por favor ingrese un correo válido.' }),
//     subject: z
//         .string()
//         .min(1, { message: langState === 'es' ? 'Debe ingresar un asunto.' : 'You must enter a subject.' }),
//     message: z
//         .string()
//         .min(1, { message: langState === 'es' ? 'Debe ingresar un mensaje.' : 'You must enter a message.' }),
// });



















// import { z } from 'zod'
// import { selectLangState } from '../redux/slices/langSlice'
// import { useSelector } from 'react-redux'

// const langState:any = useSelector(selectLangState).lang;

// export const ContactSchema = z.object({

//     name: z
//         .string()
//         .min(1, {
//             message: { langState === 'es' ? 'Debe ingresar un nombre.' : 'You must enter a name.' },
//         })
//         .min(3, {
//             message: 'El nombre debe tener al menos de 3 caracteres.'
//         })
//         .max(50, {
//             message: 'El nombre debe tener como máximo 50 carecteres.'
//         }),
//     email: z
//             .string()
//             .min(1, {
//                 message: 'Debe ingresar un correo.'
//             })
//             .email({
//                 message: 'Por favor ingrese un correo válido.'
//             }),
//     subject: z
//             .string()
//             .min(1, {
//                 message: 'Debe ingresar un asunto.'
//             }),
//     message: z
//         .string()
//         .min(1, {
//             message: 'Debe ingresar un mensaje.'
//         }),
// })
