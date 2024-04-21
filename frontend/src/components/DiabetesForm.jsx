import React, { useState } from "react";

const DiabetesForm = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
       
                    <form>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                className="form-control input"
                                type="text"
                                name="Pregnancies"
                                placeholder="No. of Pregnancies"
                                onChange={handleChange}
                            />
                        
                            <input
                                className="form-control input"
                                type="text"
                                name="Glucose"
                                placeholder="Glucose"
                                onChange={handleChange}
                            />
                            <input
                                className="form-control input"
                                type="text"
                                name="BloodPressure"
                                placeholder="Blood Pressure (in mmHg)"
                                onChange={handleChange}
                            />
                            <input
                                className="form-control input"
                                type="text"
                                name="SkinThickness"
                                placeholder="Skin Thickness (in mm)"
                                onChange={handleChange}
                            />
                            <input
                                className="form-control input"
                                type="text"
                                name="Insulin"
                                placeholder="Insulin (in µU/ml)"
                                onChange={handleChange}
                            />
                            <input
                                className="form-control input"
                                type="text"
                                name="BMI"
                                placeholder="BMI"
                                onChange={handleChange}
                            />
                            <input
                                className="form-control input"
                                type="text"
                                name="DiabetesPedigreeFunction"
                                placeholder="Diabetes Pedigree Function"
                                onChange={handleChange}
                            />
                            <input
                                className="form-control input"
                                type="text"
                                name="Age"
                                placeholder="Age (in years)"
                                onChange={handleChange}
                                />
                                </div>
                              </form>
                            );
                          };

export default DiabetesForm;
