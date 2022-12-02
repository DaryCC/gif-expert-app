import {useState} from 'react';

export const AddCategory = ({onNewCategory}) =>{

  const [inputvalue, setinputValue ] = useState('');

  const onInputChange = (event) =>{
    // console.log(event);
    // console.log(event.target.value);
    setinputValue(event.target.value);
  };

  const onSubmit = (event)=>{
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
    <form onSubmit={ onSubmit }>
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
