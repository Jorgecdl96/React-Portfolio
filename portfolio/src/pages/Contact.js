import React, {useState} from 'react';
import '../styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [field, setField] = useState('');
  const [messageDisplay, setMessageDisplay] = useState(false);
  const [emailDisplay, setEmailDisplay] = useState(false);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validation = re.test(String(email).toLowerCase());

    if(!validation) {
      setEmailDisplay(true);
    }else{
      setEmailDisplay(false);
    }
  }
  
  const mouseLeave = (e) => {
    const {currentTarget} = e;
    const inputValue = currentTarget.value;
    const inputName = currentTarget.name;
    
    if (inputName === 'message') {
      setField('Message');
    }else if (inputName === 'email'){
      setField('E-mail');
    } else {
      setField('Name');
    }

    if (inputValue === '') {
      setMessageDisplay(true)
    }else {
      setMessageDisplay(false)
    }

  }

  const handleInputChange = (e) =>{

    const {currentTarget} = e;
    const inputValue = currentTarget.value;
    const inputName = currentTarget.name;

    if (inputName === 'message') {
      setMessage(inputValue);
    }else if (inputName === 'email'){
      setEmail(inputValue);
      validateEmail(email);
    } else {
      setName(inputValue);
    }
  }

  return (
    <div className='contact'>
      <h2>Contact</h2>
      <form>
        <p>Name:</p>
        <input placeholder='Name' name='name' value={name} type='text' onChange={handleInputChange} onMouseLeave={mouseLeave}/>
        <p>Email Address:</p>
        <input placeholder='E-mail' name='email' value={email} type='email' onChange={handleInputChange} onMouseLeave={mouseLeave}/>
        <p>Message:</p>
        <textarea placeholder='Message' name='message' value={message} type='text' onChange={handleInputChange} onMouseLeave={mouseLeave} className='textarea'></textarea> <br/>
        <div className={emailDisplay ? 'open' : 'close'}>Your email is invalid</div>
        <div className={messageDisplay ? 'open' : 'close'}>{field} is required</div>
        <button className='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact