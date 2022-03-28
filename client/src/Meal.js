import React, { useState, useEffect } from 'react';
var axios = require("axios").default;

 export default function Meal({ meal }) {

  const [imageUrl, setImageUrl] = useState("");

  useEffect (() => {
    var options = {
      method: 'GET',
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${meal.id}/information`,
      headers: {
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'b94831634emsh9a21cbcbd82614ep1c7f5ejsn5205892eb94d'
      }
    };
    
    axios.request(options).then(function (response) {
      setImageUrl(response.data.image);
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
  }, [meal.id])

   return (
     <article>
       <h1>{meal.title}</h1>
       <img src={imageUrl} alt="recipe" />
       <ul>
         <li>Preperation time: {meal.readyInMinutes} minutes</li>
         <li>Number of Servings: {meal.servings}</li>
       </ul>

       <a href={meal.sourceUrl}>Go to Recipe</a>
     </article>
   )
 }