const HeartForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const today = new Date();
  today.setHours(today.getHours() + 5);
  today.setMinutes(today.getMinutes() + 30);
  const formattedDate = today.toISOString().slice(0, 16);
  return (
    <form>
      <div className="grid grid-cols-2 gap-3">
        <input
          type="number"
          name="age"
          required
          min={0}
          max={100}
          className="input"
          placeholder="Age (years)"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type="number"
          name="trestbps"
          className="input"
          required
          placeholder="Resting Blood Pressure (mm Hg)"
          value={formData.trestbps}
          onChange={handleChange}
        />
        <input
          type="number"
          name="chol"
          required
          min={0}
          className="input"
          placeholder="Serum Cholesterol (mg/dl)"
          value={formData.chol}
          onChange={handleChange}
        />
        <input
          type="number"
          name="thalach"
          required
          min={0}
          className="input"
          placeholder="Maximum Heart Rate (bpm)"
          value={formData.thalach}
          onChange={handleChange}
        />
        <select
          name="sex"
          value={formData.sex}
          required
          onChange={handleChange}
          className="select"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select
          name="cp"
          value={formData.cp}
          required
          onChange={handleChange}
          className="select"
        >
          <option value="">Select Chest Pain Type</option>
          <option value="1">Typical Angina</option>
          <option value="2">Atypical Angina</option>
          <option value="3">Non-Anginal Pain</option>
          <option value="4">Asymptomatic</option>
        </select>
        <select
          name="fbs"
          value={formData.fbs}
          required
          onChange={handleChange}
          className="select"
        >
          <option value="">{"Fasting Blood Sugar > 120 mg/dl"}</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <select
          name="restecg"
          value={formData.restecg}
          onChange={handleChange}
          required
          className="select"
        >
          <option value="">Select Resting ECG Results</option>
          <option value="0">Normal</option>
          <option value="1">Having ST-T Wave Abnormality</option>
          <option value="2">Left Ventricular Hypertrophy</option>
        </select>
        <select
          name="slope"
          value={formData.slope}
          onChange={handleChange}
          required
          className="select"
        >
          <option value="">Select Slope of the ST segment</option>
          <option value="1">Upsloping</option>
          <option value="2">Flat</option>
          <option value="3">Down Sloping</option>
        </select>
        <select
          name="thal"
          value={formData.thal}
          onChange={handleChange}
          required
          className="select"
        >
          <option value="">Select Thal</option>
          <option value="0">Normal</option>
          <option value="2">Fixed Defect</option>
          <option value="3">Reversible Defect</option>
        </select>
        <input
          type="number"
          name="exang"
          className="input"
          required
          min={0}
          placeholder="Exercise-Induced Angina"
          value={formData.exang}
          onChange={handleChange}
        />
        <input
          type="number"
          name="oldpeak"
          required
          min={0}
          className="input"
          placeholder="ST depression induced by exercise comparative to rest"
          value={formData.oldpeak}
          onChange={handleChange}
        />
        <input
          type="number"
          name="ca"
          required
          min={0}
          placeholder="Number of major vessels colored by fluoroscopy"
          className="input"
          value={formData.ca}
          onChange={handleChange}
        />
        {/* <input
          type="datetime-local"
          name="datetime"
          className="input"
          required
          placeholder="Date and Time"
          value={formData.datetime || formattedDate}
          defaultValue={formattedDate}
          onChange={handleChange}
        /> */}
      </div>
    </form>
  );
};

export default HeartForm;
