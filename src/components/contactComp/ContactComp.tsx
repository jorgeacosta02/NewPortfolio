import styles from './_ContactComp.module.scss';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
// import {
//   nameCorrectValidation,
//   nameExistsValidation,
//   emailCorrectValidation,
//   emailExistsValidation,
//   subjectExistsValidation,
//   messageExistsValidation
// } from '../../validations/ContactValidations';
import SliderComp from '../sliderComp/SliderComp';
import LinksComp from '../linksComp/LinksComp';
import { selectLangState } from '../../redux/slices/langSlice';
import { selectMoonState } from '../../redux/slices/moonSlice';


export interface IFormDataShape {
  name: string,
  email: string,
  subject: string,
  message: string
}

const ContactComp: React.FC = () => {
  
  const [formData, setFormData] = useState<IFormDataShape>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  
  const [errors, setErrors] = useState<IFormDataShape>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // let submitOk = false;
  
  // if(
  //   formData.name !== '' &&
  //   formData.email !== '' &&
  //   formData.subject !== '' &&
  //   formData.message !== '' &&
  //   errors.name === '' &&
  //   errors.email === '' &&
  //   errors.subject === '' &&
  //   errors.message === '' 
  // ){
  //   submitOk = true;
  // };
  
  // console.log('submitOK: ', submitOk);
  // console.log('formData: ', formData);
  // console.log('errors: ', errors);
  
  // useEffect(() => {
  //   nameCorrectValidation(formData, setErrors);
  // },[formData.name])
  
  // useEffect(() => {
  //   emailCorrectValidation(formData, setErrors);
  // },[formData.email])
  
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  //   setErrors((prevData) => ({
  //     ...prevData,
  //     [name]: '',
  //   }));
  //   console.log('name y value in handleInputChange: ',name, value);
  //   console.log('formData y errors in handleInputChange: ',formData, errors);
  // };


  // const handleSubmit = (event) = {
  //   event.preventDefault();
  // }

  const nameRegExp = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]*$/;
  const emailRegExp = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Valida solo letras
    if (name === 'name'){
      if(!nameRegExp.test(value)){
        setErrors((prevData) => ({
          ...prevData,
          [name]: 'El nombre debe contener solo letras.',
        }));
      }else{
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setErrors((prevData) => ({
          ...prevData,
          [name]: '',
        }));
      }
    }

    // Valida formato de email
    if (name === 'email'){
      if(!emailRegExp.test(value)){
        setErrors((prevData) => ({
          ...prevData,
          [name]: 'Debe ingresar un mail válido.',
        }));
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }else{
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setErrors((prevData) => ({
          ...prevData,
          [name]: '',
        }));
      }
    }
    if (name === 'subject' || name === 'message'){
       setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      setErrors((prevData) => ({
        ...prevData,
        [name]: '',
      }));
    }
    console.log('name y value in handleInputChange: ',name, value);
    console.log('formData y errors in handleInputChange: ',formData, errors);
  }



  // const nameHandler =(event:any)=>{
  //   const name = event.target.value;
  //   if(!regexName.test(name)){
  //       setErrorName('El nombre debe contener solo letras.');
  //   }else{
  //       setGameContent({...gameContent,name:name});
  //       setErrorName('');
  //   };
  // };

  const emptyMessage = 'Este campo debe ser completado.';

  const emptyValidationHandler =()=>{
    // console.log('entrando a errorGenreIdsgHandler');
    if(!formData.name){
      setErrors((prevData) => ({
        ...prevData,
        name: emptyMessage,
      }));
    };
    if(!formData.email){
      setErrors((prevData) => ({
        ...prevData,
        email: emptyMessage,
      }));
    };
    if(!formData.subject){
      setErrors((prevData) => ({
        ...prevData,
        subject: emptyMessage,
      }));
    };
    if(!formData.message){
      setErrors((prevData) => ({
        ...prevData,
        message: emptyMessage,
      }));
    };

  };



  
  // const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
  //   console.log('errors in handleSubmit: ', errors)
  //   console.log('formData in handleSubmit: ', formData)
  //   event.preventDefault();
  //   try {
  //     if(!submitOk){
  //       console.log('if en handleSubmit')
  //       nameExistsValidation(formData, setErrors);
  //       emailExistsValidation(formData, setErrors);
  //       subjectExistsValidation(formData, setErrors);
  //       return messageExistsValidation(formData, setErrors);
  //       // console.log('errors in handleSubmit before return: ', errors)
  //       // console.log('formData in handleSubmit before return: ', formData)
  //       // return console.log('return in handleSubmit')
  //     }
  //     await axios.post('exploservice/contact', formData)
  //     toast.success('Mensaje enviado exitosamente!!')
  //     setTimeout(() => {
  //       window.location.href = '/exploservice/company';
  //     }, 2000);
  //   } catch (error: any) {
      
  //     if (error?.response?.data?.message) {
  //       const errorMessage = error.response.data.message;
  //       toast.error(errorMessage);
  //     } else {
  //     toast.error('Error al enviar el mensaje.');
  //     }
  //   }
  //   // setFormData({
  //   //   name: '',
  //   //   email: '',
  //   //   subject: '',
  //   //   message: '',
  //   // })
  // };
  
  // Estados globales para opciones
  const langState = useSelector(selectLangState).lang;
  const moonState = useSelector(selectMoonState).moon;

  // constantes de estilos para dark-mode
  const containerColor = `${styles.container} ${moonState ? styles.containerWhite : ''}`;
  const inputColor = `${styles.input} ${moonState ? styles.backWhite : ''}`;
  const textareaColor = `${styles.textarea} ${moonState ? styles.backWhite : ''}`;
  const submitColor = `${styles.submit} ${moonState ? styles.backWhite : ''}`;
  

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log('submit')
    emptyValidationHandler()
  }
  
  return (
    <div className={containerColor}>
      <SliderComp/>
      <div className={styles.dataMainContainer}>
        <h4 className={styles.dataTitle}>
          {langState === 'es' ? 'Mis datos de contacto' : 'My contact data'}
        </h4>
        <div className={styles.dataContainer}>
          <div className={styles.data}>
            <div className={styles.dataBlock}>
              <h6>
                {langState === 'es' ? 'Correo electrónico:' : 'Email:'}
              </h6>
              <p>
                jorgeacostadeleon@yahoo.com
              </p>
            </div>
            <div className={styles.dataBlock}>
              <h6>
                {langState === 'es' ? 'Teléfono:' : 'Phone number:'}
              </h6>
              <p>
                +54 9 264-673 0581
              </p>
            </div>
            <div className={styles.dataBlock}>
              <h6>
                {langState === 'es' ? 'Domicilio:' : 'Address:'}
              </h6>
              <p>
                Barrio Cooperarq VIII - Manzana "A" - Casa 24 - Rivadavia - San Juan - Argentina. CP. 5400.
              </p>
            </div>
          </div>
          <LinksComp/>
        </div>
      </div>
      <div className={styles.formContainer}>
        <h4 className={styles.formTitle}>
          {langState === 'es' ? 'Envíame un mensaje' : 'Send me a message'}
        </h4>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.inputBlock}>
            <label 
              htmlFor='name'>
              {langState === 'es' ? 'Nombre' : 'Name'}
            </label>
            <input
              type='text'
              id='name'
              name='name' 
              value={formData.name}
              onChange={handleInputChange} 
              placeholder={langState === 'es' ? 'Ingrese nombre...' :  'Enter name...'}
              className={inputColor}
            />
            {errors.name && errors.name}
          </div>
          <div className={styles.inputBlock}>
            <label 
              htmlFor='email'>
              {langState === 'es' ? 'Correo'  : 'Email'}
            </label>
            <input 
              type='text'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className={inputColor}
              placeholder='Ingrese correo...'
            />
            {errors.email && errors.email}
          </div>
          <div className={styles.inputBlock}>
            <label 
              htmlFor='subject'>
              {langState === 'es'  ? 'Asunto' : 'Subject'}
            </label>
            <input 
              type="text"
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleInputChange}
              placeholder={langState === 'es' ? 'Ingrese asunto...' : 'Enter subject...'}
              className={inputColor}
            />
            {errors.subject && errors.subject}
          </div>
          <div className={styles.inputBlock}>
            <label 
              htmlFor='message'>
              {langState === 'es' ? 'Mensaje' : 'Message'}
            </label>
            <textarea 
              id='message'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              placeholder={langState === 'es' ? 'Ingrese su mensaje...' : 'Enter your message...'}
              className={textareaColor}
            />
            {errors.message && errors.message}
          </div>
          <button
            className={submitColor}
            type='submit'
          >
            <p>
              { langState === 'es' ? 'Enviar' : 'Submit' }
            </p>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactComp

