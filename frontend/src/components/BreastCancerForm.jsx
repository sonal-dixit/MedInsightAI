import React, { useState } from "react";

const DiabetesForm = ({ formData, setFormData }) => {
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
                <input type="text" name="texture_mean" placeholder="Texture Mean" className="input" onChange={handleChange} />
                <input type="text" name="smoothness_mean" placeholder="Smoothness Mean" className="input" onChange={handleChange} />
                <input type="text" name="compactness_mean" placeholder="Compactness Mean" className="input" onChange={handleChange} />
                <input type="text" name="concave_points_mean" placeholder="Concave Points Mean" className="input" onChange={handleChange} />
                <input type="text" name="symmetry_mean" placeholder="Symmetry Mean" className="input" onChange={handleChange} />
                <input type="text" name="fractal_dimension_mean" placeholder="Fractal Dimension Mean" className="input" onChange={handleChange} />
                <input type="text" name="texture_se" placeholder="Texture Standard Error" className="input" onChange={handleChange} />
                <input type="text" name="area_se" placeholder="Area Standard Error" className="input" onChange={handleChange} />
                <input type="text" name="smoothness_se" placeholder="Smoothness Standard Error" className="input" onChange={handleChange} />
                <input type="text" name="compactness_se" placeholder="Compactness Standard Error" className="input" onChange={handleChange} />
                <input type="text" name="concavity_se" placeholder="Concavity Standard Error" className="input" onChange={handleChange} />
                <input type="text" name="concave_points_se" placeholder="Concave Points Standard Error" className="input" onChange={handleChange} />
                <input type="text" name="symmetry_se" placeholder="Symmetry Standard Error" className="input" onChange={handleChange} />
                <input type="text" name="fractal_dimension_se" placeholder="Fractal Dimension Standard Error" className="input" onChange={handleChange} />
                <input type="text" name="texture_worst" placeholder="Texture Worst" className="input" onChange={handleChange} />
                <input type="text" name="area_worst" placeholder="Area Worst" className="input" onChange={handleChange} />
                <input type="text" name="smoothness_worst" placeholder="Smoothness Worst" className="input" onChange={handleChange} />
                <input type="text" name="compactness_worst" placeholder="Compactness Worst" className="input" onChange={handleChange} />
                <input type="text" name="concavity_worst" placeholder="Concavity Worst" className="input" onChange={handleChange} />
                <input type="text" name="concave_points_worst" placeholder="Concave Points Worst" className="input" onChange={handleChange} />
                <input type="text" name="symmetry_worst" placeholder="Symmetry Worst" className="input" onChange={handleChange} />
                <input type="text" name="fractal_dimension_worst" placeholder="Fractal Dimension Worst" className="input" onChange={handleChange} />
            </div>
        </form>
    );
};

export default DiabetesForm;
