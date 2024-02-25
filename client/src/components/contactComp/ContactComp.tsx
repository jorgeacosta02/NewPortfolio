import styles from './_ContactComp.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios'
import { IContactData } from '../../interfaces/ContactInterfaces';
import { ContactSchema } from '../../validations/ContactValidations';
import { selectLangState } from '../../redux/slices/langSlice';
import { selectMoonState } from '../../redux/slices/moonSlice';
import { useSelector } from 'react-redux';
import SliderComp from '../sliderComp/SliderComp';


const ContactComp = () => {

  const langState = useSelector(selectLangState).lang;
  const moonState = useSelector(selectMoonState).moon;

  console.log(langState)

  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
  } = useForm<IContactData>({
    resolver: zodResolver(ContactSchema)
  });


  const onSubmit: SubmitHandler<IContactData> = async (data) => {
    console.log(data);
    try {
      await axios.post(`/user-register`, data);
      console.log('Formulario enviado con éxito');
      reset();
    } catch (error) {
      console.error('Error al enviarlo', error);
        // Verificación de tipos para 'error.response'
      if (axios.isAxiosError(error) && error.response) {
        console.error('Detalles del error:', error.response.data);
      } else {
        console.error('Error desconocido:', error);
      }
    }
  };

  const containerColor = `${styles.container} ${moonState ? styles.containerWhite : ''}`;

  const inputColor = `${styles.input} ${moonState ? styles.backWhite : ''}`;

  const textareaColor = `${styles.textarea} ${moonState ? styles.backWhite : ''}`;

  const submitColor = `${styles.submit} ${moonState ? styles.backWhite : ''}`;

  console.log(errors);

  return (
    <div className={containerColor}>
      <SliderComp/>
      <div className={styles.formContainer}>
        <h3 className={styles.formTitle}>
          {langState === 'es' ? 'Envíame un mensaje' : 'Send me a message'}
        </h3>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.inputBlock}>
            <label htmlFor='name'>
                {langState === 'es' ? 'Nombre' : 'Name'}
            </label>
            <input {...register('name')}
                placeholder={langState === 'es' ? 'Ingrese nombre...' :  'Enter name...'}
                className={inputColor}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor='email'>
               {langState === 'es' ? 'Correo'  : 'Email'}
            </label>
            <input {...register(
              'email',
              { required: 'El email es requerido' })}
              placeholder='Ingrese correo...'
              className={inputColor}
            />
          {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor='subject'>
              {langState === 'es'  ? 'Asunto' : 'Subject'}
            </label>
            <input {...register(
                'subject',
                { required: 'El apellido es requerido' })}
                placeholder={langState === 'es' ? 'Ingrese asunto...' : 'Enter subject...'}
                className={inputColor}
            />
            {errors.subject && <span>{errors.subject.message}</span>}
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor='message'>
              {langState === 'es' ? 'Mensaje' : 'Message'}
            </label>
            <textarea {...register(
                'message',
                { required: 'El apellido es requerido' })}
                placeholder={langState === 'es' ? 'Ingrese su mensaje...' : 'Enter your message...'}
                className={textareaColor}
            />
            {errors.message && <span>{errors.message.message}</span>}
          </div>
          <button
            className={submitColor}
            type='submit'
          >
            <p>
              Enviar formulario
            </p>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactComp

