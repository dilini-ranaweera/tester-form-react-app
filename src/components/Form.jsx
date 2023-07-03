import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    referringInsurer: "",
    adjFirstName: "",
    adjLastName: "",
    adjEmailAddress: "",
    adjPhoneNumber: "",
    indAdjFirstName: "",
    indAdjLastName: "",
    indAdjEmailAddress: "",
    indAdjPhoneNumber: "",
    typeOfLoss: "",
    dateOfLoss: "",
    lossAmount: "",
    insuredYN: "",
    lossLocation: "",
    claimNumber: "",
    insuredContactName: "",
    insuredContactPhoneNumber: "",
    lossDetails: "",
  });

  const handleInputChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="form-border">
      <form onSubmit={handleSubmit}>
        <div className="full-width">
          <label className="title">Referring Insurer:</label>
          <input
            id="full-width-item"
            type="text"
            name="referringInsurer"
            value={formData.referringInsurer}
            onChange={handleInputChange}
          />
        </div>
        <div className="half-width">
          <label> Adjuster's First Name: </label>
          <input
            id="half-width-item-one"
            type="text"
            name="adjFirstName"
            value={formData.adjFirstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="half-width">
          <label>Adjuster's Last Name:</label>
          <input
            id="half-width-item-two"
            type="text"
            name="adjLastName"
            value={formData.adjLastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="half-width">
          <label> Adjuster's Email Address:</label>
          <input
            id="half-width-item-one"
            type="email"
            name="adjEmailAddress"
            value={formData.adjEmailAddress}
            onChange={handleInputChange}
          />
        </div>
        <div className="half-width">
          <label>Phone:</label>
          <input
            id="half-width-item-two"
            type="text"
            name="adjPhoneNumber"
            value={formData.adjPhoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="half-width">
          <label>Independent Adjuster's First Name (if applicable): </label>
          <input
            id="half-width-item-one"
            type="text"
            name="indAdjFirstName"
            value={formData.indAdjFirstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="half-width">
          <label>Independent Adjuster's Last Name (if applicable):</label>
          <input
            id="half-width-item-two"
            type="text"
            name="indAdjLastName"
            value={formData.indAdjLastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="half-width">
          <label> Independent Adjuster's Email Address (if applicable):</label>
          <input
            id="half-width-item-one"
            type="email"
            name="indAdjEmailAddress"
            value={formData.indAdjEmailAddress}
            onChange={handleInputChange}
          />
        </div>
        <div className="half-width">
          <label>Independent Adjuster's Phone:</label>
          <input
            id="half-width-item-two"
            type="text"
            name="indAdjPhoneNumber"
            value={formData.indAdjPhoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="third-width">
          <label htmlFor="dropdown">Type of Loss:</label>
          <select id="third-width-item-one" name="typeOfLoss" value={formData.typeOfLoss}>
            <option value="">-- Select --</option>
            <option value="option1">Fire</option>
            <option value="option2">Water</option>
            <option value="option3">Collapse</option>
            <option value="option4">Theft</option>
            <option value="option5">Vandalism</option>
            <option value="option6">Other</option>
          </select>
        </div>
        <div className="third-width">
          <label>Date of Loss:</label>
          <input
            id="third-width-item-two"
            type="datetime-local"
            name="dateOfLoss"
            value={formData.dateOfLoss}
            onChange={handleInputChange}
          />
        </div>
        <div className="third-width">
          <label>Loss Amount:</label>
          <input
            id="third-width-item-three"
            type="text"
            name="lossAmount"
            value={formData.lossAmount}
            onChange={handleInputChange}
          />
        </div>
        <div className="third-width">
          <label> Insured: </label>
          <input
            id="third-width-item-one"
            type="text"
            name="insuredYN"
            value={formData.insuredYN}
            onChange={handleInputChange}
          />
        </div>
        <div className="third-width">
          <label> Loss Location: </label>
          <input
            id="third-width-item-two"
            type="text"
            name="lossLocation"
            value={formData.lossLocation}
            onChange={handleInputChange}
          />
        </div>
        <div className="third-width">
          <label> Claim Number: </label>
          <input
            id="third-width-item-three"
            type="text"
            name="claimNumber"
            value={formData.claimNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="half-width">
          <label> Insured Contact Name: </label>
          <input
            id="half-width-item-one"
            type="text"
            name="insuredContactName"
            value={formData.insuredContactName}
            onChange={handleInputChange}
          />
        </div>
        <div className="half-width">
          <label> Insured Contact Phone Number: </label>
          <input
            id="half-width-item-two"
            type="text"
            name="insuredContactPhoneNumber"
            value={formData.insuredContactPhoneNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="full-width">
          <label> Loss Details: </label>
          <textarea
            id="full-width-item"
            name="lossDetails"
            value={formData.lossDetails}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
