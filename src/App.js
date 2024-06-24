import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const init={
  name:'',
  email:'',
  password:'',
  cpassword:'',
  state:'',
  gender:''
}

const validate=Yup.object({
  name:Yup.string().min(2).max(20).required('Name must be required...!'),
  email:Yup.string().email().required('Email must be required...!'),
  password:Yup.string().min(6).max(20).required('Password must be required...!'),
  cpassword:Yup.string().oneOf([Yup.ref('password'),null], "Password not matched..!").required('Password must be required...!'),
  state:Yup.string().required('State must be required...!'),
  gender:Yup.string().required('Gender must be required...!'),

})


function App() {


  const {values, handleSubmit, handleChange, handleBlur, errors, touched}=useFormik({
    initialValues:init,
    validationSchema:validate,
    onSubmit:(values)=>{
      console.log(values);
    }
  })

  console.log(errors);

  return (
    <>

      <div className="container mt-5">

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <label htmlFor="inputEmail10" className="form-label">Name</label>
          <input type="text" name='name' className="form-control" id="inputEmail10" onChange={handleChange} onBlur={handleBlur} />
          
            {(errors.name && touched.name) ? (<div className="text-danger">{errors.name}</div>) : null}
          
        </div>
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" name='email' className="form-control" id="inputEmail4" onChange={handleChange} onBlur={handleBlur} />

          {(errors.email && touched.email) ? (<div className="text-danger">{errors.email}</div>) : null}

        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" name='password' className="form-control" id="inputPassword4" onChange={handleChange} onBlur={handleBlur} />
          {(errors.password && touched.password) ? (<div className="text-danger">{errors.password}</div>) : null}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword5" className="form-label">Confirm Password</label>
          <input type="password" name='cpassword' className="form-control" id="inputPassword5" onChange={handleChange} onBlur={handleBlur} />
          {(errors.cpassword && touched.cpassword) ? (<div className="text-danger">{errors.cpassword}</div>) : null}
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">State</label>
          <select id="inputState" name='state' className="form-select" onChange={handleChange} onBlur={handleBlur}>
            <option selected>Choose...</option>
            <option>Gujarat</option>
            <option>Maharastra</option>
          </select>
          {(errors.state && touched.state) ? (<div className="text-danger">{errors.state}</div>) : null}
        </div>
        <div className="col-md-4">
          <label htmlFor="inputZip" className="form-label">Gender</label>
          <div className='d-flex'>
            <div className="form-check me-3">
              <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" onChange={handleChange} onBlur={handleBlur} value='Male'  />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" onChange={handleChange} onBlur={handleBlur} value='Female' />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>
          {(errors.gender && touched.gender) ? (<div className="text-danger">{errors.gender}</div>) : null}
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>


      </div>

    </>
  );
}

export default App;
