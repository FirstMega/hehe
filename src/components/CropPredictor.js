import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";

function CropPredictor() {
  const [formData, setFormData] = useState({
    feature1: "",
    feature2: "",
    feature3: "",
    feature4: "",
    feature5: "",
    feature6: "",
    feature7: "",
  });

  const [predictions, setPredictions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the input data
    const inputData = tf.tensor2d([
      [
        formData.feature1,
        formData.feature2,
        formData.feature3,
        formData.feature4,
        formData.feature5,
        formData.feature6,
        formData.feature7,
      ],
    ]);

    // Load the model
    const model = await tf.loadLayersModel("path_to_your_model/model.json");

    // Make predictions
    const predictions = model.predict(inputData);
    const cropIndexes = await predictions.argMax(1).data();

    // Decode the predicted crop indexes
    const l3 = [
      "apple",
      "banana",
      "blackgram",
      "chickpea",
      "coconut",
      "coffee",
      "cotton",
      "grapes",
      "jute",
      "kidneybeans",
      "lentil",
      "maize",
      "mango",
      "mothbeans",
      "muskmelon",
      "orange",
      "papaya",
      "pigeonpeas",
      "pomegranate",
      "rice",
      "watermelon",
    ];
    const predictedCrops = cropIndexes.map((index) => l3[index]);

    setPredictions(predictedCrops);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Feature 1:
          <input
            type="text"
            name="feature1"
            value={formData.feature1}
            onChange={handleChange}
          />
        </label>
        <label>
          Feature 2:
          <input
            type="text"
            name="feature2"
            value={formData.feature2}
            onChange={handleChange}
          />
        </label>
        <label>
          Feature 3:
          <input
            type="text"
            name="feature3"
            value={formData.feature3}
            onChange={handleChange}
          />
        </label>
        <label>
          Feature 4:
          <input
            type="text"
            name="feature4"
            value={formData.feature4}
            onChange={handleChange}
          />
        </label>
        <label>
          Feature 5:
          <input
            type="text"
            name="feature5"
            value={formData.feature5}
            onChange={handleChange}
          />
        </label>
        <label>
          Feature 6:
          <input
            type="text"
            name="feature6"
            value={formData.feature6}
            onChange={handleChange}
          />
        </label>
        <label>
          Feature 7:
          <input
            type="text"
            name="feature7"
            value={formData.feature7}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Predict</button>
      </form>
      {predictions.length > 0 && (
        <div>
          <h2>Predicted Crops:</h2>
          <ul>
            {predictions.map((crop, index) => (
              <li key={index}>{crop}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CropPredictor;
