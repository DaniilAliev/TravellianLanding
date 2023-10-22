import './Form.modules.scss';

const Form = () => 
  <div className='newsletter-form-wrapper'>
  <div className='newsletter-form'>
    <h1>Our Newsletter</h1>
    <form>
      <label htmlFor=""><p>Email</p></label>
      <div className='inputs'>
        <input placeholder='Enter your email'></input>
        <button>Subscribe</button>
      </div>
    </form>
  </div>
  </div>
;

export default Form;