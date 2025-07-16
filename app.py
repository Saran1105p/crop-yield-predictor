# app.py
import streamlit as st
import pandas as pd
import numpy as np
import joblib

# Load trained model
model = joblib.load('crop_yield_model.pkl')

# Load dataset (for columns and dropdown options)
df = pd.read_csv("crop_yield.csv")
df.columns = df.columns.str.strip()
df.dropna(inplace=True)

# Add yield column like in training
df['Yield'] = df['Production'] * 1000 / df['Area']

# Drop unused columns (just like in training)
df = df.drop(columns=['State', 'Fertilizer', 'Production'])

# One-hot encode
df = pd.get_dummies(df, columns=['Crop', 'Season'], drop_first=True)

# Save feature columns used in training
model_features = df.drop(columns=['Yield']).columns

# Get dropdown values from original data
raw_df = pd.read_csv("crop_yield.csv")
raw_df.columns = raw_df.columns.str.strip()
unique_crops = sorted(raw_df['Crop'].dropna().unique())
unique_seasons = sorted(raw_df['Season'].dropna().unique())

# 🎨 Streamlit App UI
st.title("🌾 Crop Yield Prediction App")
st.markdown("🚜 Predict crop yield based on year, area, crop type, and season.")

# 📥 User Input
crop_year = st.number_input("📅 Enter Crop Year", min_value=2000, max_value=2100, value=2022)
area = st.number_input("🌍 Enter Area (in hectares)", min_value=0.1, value=1.0)

crop = st.selectbox("🌿 Select Crop", unique_crops)
season = st.selectbox("☀️ Select Season", unique_seasons)

# 🧠 Prepare input data
input_df = pd.DataFrame(columns=model_features)
input_df.loc[0] = [0] * len(model_features)

input_df.at[0, 'Crop_Year'] = crop_year
input_df.at[0, 'Area'] = area

# One-hot encode Crop
crop_col = f"Crop_{crop}"
if crop_col in input_df.columns:
    input_df.at[0, crop_col] = 1
else:
    st.warning(f"⚠️ The selected crop '{crop}' was not in the training dataset.")

# One-hot encode Season
season_col = f"Season_{season}"
if season_col in input_df.columns:
    input_df.at[0, season_col] = 1
else:
    st.warning(f"⚠️ The selected season '{season}' was not in the training dataset.")

# 🔮 Make Prediction
if st.button("🚀 Predict Yield"):
    try:
        predicted_yield = model.predict(input_df)[0]
        st.success(f"✅ Predicted Yield: **{round(predicted_yield, 2)} kg/ha**")
    except Exception as e:
        st.error(f"🚫 Prediction failed: {e}")
