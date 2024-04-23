import os
from flask import Flask, request, jsonify, render_template
import pickle
import numpy as np
from PIL import Image
import tensorflow as tf
from loguru import logger
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
def predict(values, dic):
    if len(values) == 8:  # diabetes
        dic2 = {'NewBMI_Obesity 1': 0, 'NewBMI_Obesity 2': 0, 'NewBMI_Obesity 3': 0, 'NewBMI_Overweight': 0,
                'NewBMI_Underweight': 0, 'NewInsulinScore_Normal': 0, 'NewGlucose_Low': 0,
                'NewGlucose_Normal': 0, 'NewGlucose_Overweight': 0, 'NewGlucose_Secret': 0}

        if dic['BMI'] <= 18.5:
            dic2['NewBMI_Underweight'] = 1
        elif 18.5 < dic['BMI'] <= 24.9:
            pass
        elif 24.9 < dic['BMI'] <= 29.9:
            dic2['NewBMI_Overweight'] = 1
        elif 29.9 < dic['BMI'] <= 34.9:
            dic2['NewBMI_Obesity 1'] = 1
        elif 34.9 < dic['BMI'] <= 39.9:
            dic2['NewBMI_Obesity 2'] = 1
        elif dic['BMI'] > 39.9:
            dic2['NewBMI_Obesity 3'] = 1

        if 16 <= dic['Insulin'] <= 166:
            dic2['NewInsulinScore_Normal'] = 1

        if dic['Glucose'] <= 70:
            dic2['NewGlucose_Low'] = 1
        elif 70 < dic['Glucose'] <= 99:
            dic2['NewGlucose_Normal'] = 1
        elif 99 < dic['Glucose'] <= 126:
            dic2['NewGlucose_Overweight'] = 1
        elif dic['Glucose'] > 126:
            dic2['NewGlucose_Secret'] = 1

        dic.update(dic2)
        values2 = list(map(float, list(dic.values())))

        model = pickle.load(open('models/diabetes.pkl','rb'))
        values = np.asarray(values2)
        return model.predict_proba(values.reshape(1, -1))[0][1]  # Return probability of positive class

    elif len(values) == 22:  # breast_cancer
        model = pickle.load(open('models/breast_cancer.pkl','rb'))
        values = np.asarray(values)
        return model.predict_proba(values.reshape(1, -1))[0][1]  # Return probability of positive class

    elif len(values) == 13:  # heart disease
        model = pickle.load(open('models/heart.pkl','rb'))
        values = np.asarray(values)
        return model.predict_proba(values.reshape(1, -1))[0][1]  # Return probability of positive class

    elif len(values) == 24:  # kidney disease
        model = pickle.load(open('models/kidney.pkl','rb'))
        values = np.asarray(values)
        return model.predict_proba(values.reshape(1, -1))[0][1]  # Return probability of positive class

    elif len(values) == 10:  # liver disease
        model = pickle.load(open('models/liver.pkl','rb'))
        values = np.asarray(values)
        return model.predict_proba(values.reshape(1, -1))[0][1]  # Return probability of positive class

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/diabetes", methods=['GET', 'POST'])
def diabetesPage():
    return render_template('diabetes.html')

@app.route("/cancer", methods=['GET', 'POST'])
def cancerPage():
    return render_template('breast_cancer.html')

@app.route("/heart", methods=['GET', 'POST'])
def heartPage():
    return render_template('heart.html')

@app.route("/kidney", methods=['GET', 'POST'])
def kidneyPage():
    return render_template('kidney.html')

@app.route("/liver", methods=['GET', 'POST'])
def liverPage():
    return render_template('liver.html')

@app.route("/malaria", methods=['GET', 'POST'])
def malariaPage():
    return render_template('malaria.html')

@app.route("/pneumonia", methods=['GET', 'POST'])
def pneumoniaPage():
    return render_template('pneumonia.html')

@app.route("/predict", methods=['POST'])
def predictPage():
    try:
        if request.method == 'POST':
            to_predict_dict = request.form.to_dict()

            for key, value in to_predict_dict.items():
                try:
                    to_predict_dict[key] = int(value)
                except ValueError:
                    to_predict_dict[key] = float(value)

            to_predict_list = list(map(float, list(to_predict_dict.values())))
            pred_prob = predict(to_predict_list, to_predict_dict)

            # Apply thresholding
            threshold = 0.5
            pred = 1 if pred_prob > threshold else 0

            return jsonify({"prediction": pred})
    except Exception as e:
        logger.error(e)
        return jsonify({"error": "Please enter valid data"})

@app.route("/malariapredict", methods=['POST'])
def malariapredictPage():
    try:
        if request.method == 'POST':
            uploads_dir = os.path.join(os.path.dirname(__file__), 'uploads')
            if not os.path.exists(uploads_dir):
                os.makedirs(uploads_dir)

            img = Image.open(request.files['image'])
            img.save("uploads/image.jpg")
            img_path = os.path.join(uploads_dir, 'image.jpg')

            img = tf.keras.utils.load_img(img_path, target_size=(128, 128))
            img = tf.keras.utils.img_to_array(img)
            img = np.expand_dims(img, axis=0)
            model = tf.keras.models.load_model("models/malaria.h5")
            logger.info("1")
            pred_prob = model.predict(img)[0][0]  # Assuming 0 is negative class and 1 is positive class

            # Apply thresholding
            # threshold = 0.5
            pred = 1 if pred_prob == 1 else 0

            return jsonify({"prediction": pred})
    except Exception as e:
        logger.error(e)
        return jsonify({"error": "Please upload an image"})

@app.route("/pneumoniapredict", methods=['POST'])
def pneumoniapredictPage():
    try:
        if request.method == 'POST':
            img = Image.open(request.files['image']).convert('L')
            img.save("uploads/image.jpg")
            img_path = os.path.join(os.path.dirname(__file__), 'uploads/image.jpg')
            os.path.isfile(img_path)
            img = tf.keras.utils.load_img(img_path, target_size=(128, 128))
            img = tf.keras.utils.img_to_array(img)
            img = np.expand_dims(img, axis=0)

            model = tf.keras.models.load_model("models/pneumonia.h5")
            pred_prob = model.predict(img)[0][0]  # Assuming 0 is negative class and 1 is positive class

            # Apply thresholding
            threshold = 0.5
            pred = 1 if pred_prob > threshold else 0

            return jsonify({"prediction": pred})
    except Exception as e:
        logger.error(e)
        return jsonify({"error": "Please upload an image"})

if __name__ == '__main__':
    app.run(debug=True)
