import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import countries from '../../constants/countries';
import states from '../../constants/mx';

class Register extends Component {

  state = {
    firstName: '',
    lastName: '',
    secondLastName: '',
    rfc: '',
    birthdate: Date.now(),
    nationality: '',
    address: '',
    township: '',
    town: '',
    county: '',
    zip: '',
  }

  onChangeFieldValue = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  onChangeDate = (value) => {
    this.setState({
      birthdate: value
    });
  }

  render () {

    const {
      firstName,
      lastName,
      secondLastName,
      birthdate,
      rfc,
      nationality,
      address,
      township,
      town,
      county,
      zip,
    } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Collect information</h3>
            <form>
              <div className='mb-3'>
                <label htmlFor='firstName' className='form-label'>First name</label>
                <input
                  id='firstName'
                  name='firstName'
                  className='form-control'
                  type='text'
                  value={firstName}
                  onChange={this.onChangeFieldValue}
                  placeholder='First name' />
              </div>
              <div className='mb-3'>
                <label htmlFor='lastName' className='form-label'>Last name</label>
                <input 
                  id='lastName'
                  name='lastName'
                  className='form-control'
                  type='text'
                  value={lastName}
                  onChange={this.onChangeFieldValue}
                  placeholder='Last name' />
              </div>
              <div className='mb-3'>
                <label htmlFor='secondLastName' className='form-label'>Second Last name</label>
                <input
                  id='secondLastName'
                  name='secondLastName'
                  className='form-control'
                  type='text'
                  value={secondLastName}
                  onChange={this.onChangeFieldValue}
                  placeholder='Second last name' />
              </div>
              <div className='mb-3'>
                <label htmlFor='birthdate' className='form-label'>Birthdate</label>
                <div className='form-group'>
                  <DatePicker
                    id='birthdate'
                    name='birthdate'
                    className='form-control'
                    dateFormat='yyyy/MM/dd'
                    placeholderText='Birthdate'
                    selected={birthdate}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>
              <div className='mb-3'>
                <label htmlFor='rfc' className='form-label'>RFC</label>
                <input 
                  id='rfc'
                  name='rfc'
                  className='form-control'
                  type='text'
                  value={rfc}
                  onChange={this.onChangeFieldValue}
                  placeholder='RFC' />
              </div>
              <div className='mb-3'>
                <label htmlFor='nationality' className='form-label'>Nationality</label>
                <select
                  id='nationality'
                  name='nationality'
                  className='form-select'
                  value={nationality}
                  onChange={this.onChangeFieldValue}
                >
                  <option value=''>Select a nationality</option>
                  {countries.map(country => (
                    <option value={country[0]}>{country[1]}</option>
                  ))}
                </select>
              </div>
              <div className='mb-3'>
                <label htmlFor='address' className='form-label'>Address</label>
                <input
                  id='address'
                  name='address'
                  className='form-control'
                  type='text'
                  value={address}
                  onChange={this.onChangeFieldValue}
                  placeholder='Address' />
              </div>
              <div className='mb-3'>
                <label htmlFor='township' className='form-label'>Township</label>
                <input
                  id='township'
                  name='township'
                  className='form-control'
                  type='text'
                  value={township}
                  onChange={this.onChangeFieldValue}
                  placeholder='Township' />
              </div>
              <div className='mb-3'>
                <label htmlFor='town' className='form-label'>Town</label>
                <input
                  id='town'
                  name='town'
                  className='form-control'
                  type='text'
                  value={town}
                  onChange={this.onChangeFieldValue}
                  placeholder='Town' />
              </div>
              <div className='mb-3'>
                <label htmlFor='county' className='form-label'>County</label>
                <input
                  id='county'
                  name='county'
                  className='form-control'
                  type='text'
                  value={county}
                  onChange={this.onChangeFieldValue}
                  placeholder='Town' />
              </div>
              <div className='mb-3'>
                <label htmlFor='nationality' className='form-label'>Nationality</label>
                <select
                  id='nationality'
                  name='nationality'
                  className='form-select'
                  value={nationality}
                  onChange={this.onChangeFieldValue}
                >
                  <option value=''>Select a nationality</option>
                  {states.map(state => (
                    <option value={state[0]}>{state[1]}</option>
                  ))}
                </select>
              </div>
              <div className='mb-3'>
                <label htmlFor='zip' className='form-label'>Zip code</label>
                <input
                  id='zip'
                  name='zip'
                  className='form-control'
                  type='text'
                  value={zip}
                  onChange={this.onChangeFieldValue}
                  placeholder='Zip code' />
              </div>
              <div className='mb-3'>
                <button className='btn btn-primary' type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>);
  }
}

export default Register;
