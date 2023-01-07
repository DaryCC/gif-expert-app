import {useState} from 'react';
import {PropTypes} from 'prop-types';


export const AddCategory = ({onNewCategory}) =>{

  const [inputvalue, setinputValue ] = useState('');

  const onInputChange = (event) =>{
    // console.log(event);
    // console.log(event.target.value);
    setinputValue(event.target.value);
  };

  const onSubmit = (event)=>{
    console.log('Hola enviado desde el submit');
    event.preventDefault();
    // console.log(inputvalue);
    if (inputvalue.trim().length <= 1) return;

    // setcategories((categories)=>{
    //   return [inputvalue,...categories]
    // });
    setinputValue('');
    onNewCategory(inputvalue.trim());
  }

  return (
    // <form onSubmit={ (event) => onSubmit(event)}>
    <form onSubmit={ onSubmit } aria-label='form'>
    <input type='text'
           placeholder="Buscar gifs"
           value={inputvalue}
           /* onChange={(event)=> { */
           /*    onInputChange(event) */
           /* }} */
           onChange={onInputChange}
    />
    </form>
  )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}
