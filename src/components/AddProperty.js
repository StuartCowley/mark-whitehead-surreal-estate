import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddProperty.css';

function AddProperty() {
  const initialState = {
    fields: {
      title: '',
      city: 'Your City',
      type: 'Type of Residence',
      bedrooms: 'Number Of Bedrooms',
      bathrooms: 'Number of bathrooms',
      price: 0,
      email: 'name@email.com',
    },
  };
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
    axios.post('http://localhost:3000/api/v1/PropertyListing', fields).then(
      (res) => {
        console.log(res.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <h1>Add Your Property Here</h1>
      <div>
        <form className="add-property__form" onSubmit={handleAddProperty}>
          <label htmlFor="title">
            <input
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
              placeholder="Name of Property"
            />
          </label>

          <label htmlFor="price">
            Price :
            <input
              id="price"
              name="price"
              type="number"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>

          <label htmlFor="city">
            Your City :
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="deafultValue">--Please choose and option--</option>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>

          <label htmlFor="type">
            Type of residence:
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="deafultValue">--Please Choose Option--</option>
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detatched">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End Of Terrace">End Of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>

          <label htmlFor="bathrooms">
            Number of Bathrooms:
            <select
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            >
              <option value="defaultValue">--Please Choose an Option--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </label>

          <label htmlFor="Bedrooms">
            Number of Bedrooms:
            <select
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            >
              <option value="defaultValue">--Please Choose an Option--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </label>

          <label htmlFor="email">
            Your Email :
            <input
              type="email"
              id="city"
              name="city"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>

          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
}

export default AddProperty;
