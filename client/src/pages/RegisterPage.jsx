import React, { useState } from 'react'
import '../styles/Register.scss'

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        profileImage: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target
        setFormData({
            ...formData,
            [name]: value,
            [name]: name === "profileImage" ? files[0] : value
        })
    }
    console.log(formData)

  return (
      <div className='register'>
          <div className='register_content'>
              <form className='register_content_form'>
                  <input
                      placeholder='First Name'
                      name='firstName'
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                  />
                  <input
                      placeholder='Last Name'
                      name='lastName'
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                  />
                  <input
                      type="email"
                      placeholder='Email Address'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                  />
                  <input
                      type="password"
                      placeholder='Password'
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                      required
                  />
                  <input
                      type="password"
                      placeholder='Confirm Password'
                      name='confirmPassword'
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                  />
                  <input
                      id='image'
                      type="file"
                      name='profileImage'
                      accept='image/*'
                      style={{ display: 'none' }}
                      onChange={handleChange} 
                      required />
                  <label htmlFor="image">
                      <img src="/assets/addImage.png" alt="add profile photo" />
                      <p>Upload your profile picture</p>
                  </label>
                  <button type='submit'>Register</button>
              </form>
              <a href="/login">Already have an account? Log in Here</a>
          </div>
    </div>
  )
}

export default RegisterPage