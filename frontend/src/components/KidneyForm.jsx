import React, { useState } from "react";

const KidneyForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const today = new Date();
  today.setHours(today.getHours() + 5);
  today.setMinutes(today.getMinutes() + 30);
  const formattedDate = today.toISOString().slice(0, 16);

  return (
    <form>
      <div className="grid grid-cols-2 gap-4">
      <input className="input" type="text" name="age" placeholder="Age (in years)" onChange={handleChange}/>

<input className="input" type="text" name="blood_pressure" placeholder="Blood Pressure (in mm/Hg)" onChange={handleChange}/>

<input className="input" type="text" name="specific_gravity" placeholder="Specific Gravity" onChange={handleChange}/>

<select className="input" name="albumin" onChange={handleChange}>
    <option value="">Select Albumin</option>
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
</select>

<select className="input" name="sugar" onChange={handleChange}>
    <option value="">Select Sugar</option>
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
</select>

<select className="input" name="red_blood_cells" onChange={handleChange}>
    <option value="">Select Red Blood Cells</option>
    <option value="0">Abnormal</option>
    <option value="1">Normal</option>
</select>

<select className="input" name="pus_cell" onChange={handleChange}>
    <option value="">Select Pus Cell</option>
    <option value="0">Abnormal</option>
    <option value="1">Normal</option>
</select>

<select className="input" name="pus_cell_clumps" onChange={handleChange}>
    <option value="">Select Pus Cell Clumps</option>
    <option value="0">Not Present</option>
    <option value="1">Present</option>
</select>

<select className="input" name="bacteria" onChange={handleChange}>
    <option value="">Select Bacteria</option>
    <option value="0">Not Present</option>
    <option value="1">Present</option>
</select>

<input className="input" type="text" name="blood_glucose_random" placeholder="Blood Glucose Random (in mgs/dl)" onChange={handleChange}/>

<input className="input" type="text" name="blood_urea" placeholder="Blood Urea (in mgs/dl)" />

<input className="input" type="text" name="serum_creatinine" placeholder="Serum Creatinine (in mgs/dl)" onChange={handleChange}/>

<input className="input" type="text" name="sodium" placeholder="Sodium (in mEq/L)" onChange={handleChange}/>

<input className="input" type="text" name="potassium" placeholder="Potassium (in mEq/L)" onChange={handleChange}/>

<input className="input" type="text" name="haemoglobin" placeholder="Haemoglobin (in gms)" onChange={handleChange}/>

<input className="input" type="text" name="packed_cell_volume" placeholder="Packed Cell Volume" onChange={handleChange}/>
<input className="input" type="text" name="white_blood_cell_count" placeholder="White Blood Cell Count (in cells/cumm)" onChange={handleChange}/>

<input className="input" type="text" name="red_blood_cell_count" placeholder="Red Blood Cell Count (in millions/cmm)" onChange={handleChange}/>

<select className="input" name="hypertension" onChange={handleChange}>
    <option value="">Select Hypertension</option>
    <option value="0">No</option>
    <option value="1">Yes</option>
</select>

<select className="input" name="diabetes_mellitus" onChange={handleChange}>
    <option value="">Select Diabetes Mellitus</option>
    <option value="0">No</option>
    <option value="1">Yes</option>
</select>

<select className="input" name="coronary_artery_disease" onChange={handleChange}>
    <option value="">Select Coronary Artery Disease</option>
    <option value="0">No</option>
    <option value="1">Yes</option>
</select>

<select className="input" name="appetite" onChange={handleChange}>
    <option value="">Select Appetite</option>
    <option value="0">Good</option>
    <option value="1">Poor</option>
</select>

<select className="input" name="peda_edema" onChange={handleChange}>
    <option value="">Select Pedal Edema</option>
    <option value="0">No</option>
    <option value="1">Yes</option>
</select>

<select className="input" name="anaemia"onChange={handleChange}>
    <option value="">Select Anaemia</option>
    <option value="0">No</option>
    <option value="1">Yes</option>
</select>

      </div>
    </form>
  );
};

export default KidneyForm;
