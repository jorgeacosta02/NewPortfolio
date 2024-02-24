import styles from './_ContactComp.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { IContactData } from '../../interfaces/ContactInterfaces';
import { ContactSchema } from '../../validations/ContactValidations';
import { selectLangState } from '../../redux/slices/langSlice';
import { selectMoonState } from '../../redux/slices/moonSlice';
import { useSelector } from 'react-redux';
import SliderComp from '../sliderComp/SliderComp';


const UserRegisterComp = () => {


    const langState = useSelector(selectLangState).lang;
    const moonState = useSelector(selectMoonState).moon;

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

  console.log(errors);

  return (
    <div className={containerColor}>
      <SliderComp/>
      <div className={styles.formContainer}>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className={styles.formTitle}>
            {langState ? 'Envíame un mensaje' : 'Send me a message'}
          </h3>
          <div className={styles.inputBlock}>
            <label htmlFor='name'>
                {langState ? 'Nombre' : 'Name'}
            </label>
            <input {...register('name')}
                placeholder={langState ? 'Ingrese nombre...' :  'Enter name...'}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor='email'>
               {langState ? 'Correo'  : 'Email'}
            </label>
            <input {...register(
              'email',
              { required: 'El email es requerido' })}
              placeholder='Ingrese correo...'
            />
          {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor='subject'>Apellido</label>
            <input {...register(
                'subject',
                { required: 'El apellido es requerido' })}
                placeholder='Ingrese apellido...'
            />
            {errors.subject && <span>{errors.subject.message}</span>}
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor='message'>Apellido</label>
            <input {...register(
                'message',
                { required: 'El apellido es requerido' })}
                placeholder='Ingrese apellido...'
            />
            {errors.message && <span>{errors.message.message}</span>}
          </div>
          <button
            className={styles.submit}
            type='submit'
          >
            Enviar formulario
          </button>
        </form>
        <p className={styles.linkContainer}>
          Ya tenés una cuenta?
          <Link 
            to='/user-login'
            className={styles.login}
          >
            Ingresar
          </Link>
        </p>
      </div>
    </div>
  )
}

export default UserRegisterComp

