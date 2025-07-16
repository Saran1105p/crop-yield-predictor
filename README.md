🌾 Crop Yield Prediction App
This is a simple and interactive web application built using Streamlit that predicts agricultural crop yield based on user inputs:

📅 Crop Year

🌍 Area (in hectares)

🌿 Crop Type

☀️ Season

The model uses a machine learning regression algorithm trained on historical crop data.

🚀 Features
✅ Simple, user-friendly Streamlit interface

🔄 Real-time yield prediction

📊 One-hot encoding to match input with the trained model

⚠️ Warnings for unseen crop/season selections

📥 Uses joblib to load trained ML model

📁 Project Structure
crop-yield-predictor/
├── app.py                  # Main Streamlit app
├── crop_yield.csv          # Historical dataset
├── crop_yield_model.pkl    # Trained ML model
├── requirements.txt        # Dependencies list
└── README.md               # Project overview
🧠 About the Dataset
The dataset is read from crop_yield.csv

Calculated Yield: Yield = (Production * 1000) / Area

Dropped columns like State, Production, Fertilizer

One-hot encoded Crop and Season fields for model input

Saran P
Feel free to fork and contribute!
