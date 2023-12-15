import React from 'react';

export default function NutritionCounter({ data }) {
  console.log(data);
  return (
    <div className='nutrition-counter_container'>
      <div className='nutrition_container'>
        <img src='../src/assets/Calories_Icon.png' alt='' />
        <div className='text_container'>
          <h4>{data.data.keyData.calorieCount}kCal</h4>
          <p>Calories</p>
        </div>
      </div>
      <div className='nutrition_container'>
        <img src='../src/assets/Protein_Icon.png' alt='' />
        <div className='text_container'>
          <h4>{data.data.keyData.proteinCount}g</h4>
          <p>Proteines</p>
        </div>
      </div>
      <div className='nutrition_container'>
        <img src='../src/assets/Carbs_Icon.png' alt='' />
        <div className='text_container'>
          <h4>{data.data.keyData.carbohydrateCount}g</h4>
          <p>Glucides</p>
        </div>
      </div>
      <div className='nutrition_container'>
        <img src='../src/assets/Fat_icon.png' alt='' />
        <div className='text_container'>
          <h4>{data.data.keyData.lipidCount}g</h4>
          <p>Lipides</p>
        </div>
      </div>
    </div>
  );
}
