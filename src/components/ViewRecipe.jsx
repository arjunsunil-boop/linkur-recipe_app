import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewRecipe = () => {
    const[recipe,ChangeRecipe] = useState(

        
[
    {
        "recipe_name":  "Ramen",
        "recipe_image": "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "recipe_description": "Simmer broth with aromatics like ginger, garlic, and soy sauce.Boil noodles separately until al dente.Add noodles, sliced protein (pork, chicken, etc.), and a soft-boiled egg to the hot broth.Garnish with your favorites: scallions, seaweed, chili oil (optional)."
    },
    {
        "recipe_name": "Smash Potato",
        "recipe_image": "https://images.unsplash.com/photo-1553696836-03510978653f?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "recipe_description": "Boil potatoes until tender. Drain and roughly mash, leaving some texture.Mix in butter, milk, salt, and pepper to create a creamy base.(Optional) Top with grated cheese for extra flavor and richness.Drizzle with olive oil and bake until golden brown for a crispy finish."
    },
    {
        "recipe_name": "Pancake",
        "recipe_image": "https://images.unsplash.com/photo-1598214887283-1b96ceceea96?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "recipe_description": "Whisk together flour, milk, egg, and sugar in a bowl until smooth.Heat a pan with butter or oil over medium heat.Pour batter onto the pan and cook until bubbles appear on top.Flip and cook until golden brown for fluffy pancakes."
    },
    {
        "recipe_name": "Salad",
        "recipe_image": "https://plus.unsplash.com/premium_photo-1673590981810-894dadc93a6d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "recipe_description": "Toss together your favorite leafy greens and chopped vegetables in a bowl.Combine a simple vinaigrette: olive oil, vinegar (or lemon juice), salt, and pepper.Drizzle the vinaigrette over the salad to coat evenly.Add crumbled cheese, nuts, or seeds for extra flavor and texture (optional).Toss again and enjoy!(Optional) For a heartier salad, add cooked protein like grilled chicken or tofu.(Optional) Experiment with different dressings: creamy ranch, honey mustard, etc."
    },
    {
        "recipe_name": "Bread Toast",
        "recipe_image": "https://plus.unsplash.com/premium_photo-1669557211332-9328425b6f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2QlMjBpbWFnZXN8ZW58MHwxfDB8fHww",
        "recipe_description": "Toast bread slices to your desired level of doneness (light, golden, or dark).Spread with butter, cheese, avocado, or a nut butter of your choice.Top with your favorite toppings like jam, sliced vegetables, or fresh herbs.Season with a sprinkle of salt and pepper for added taste.Enjoy your customized toast!"
    },
    {
        "recipe_name": "Pumpkin Seed Oats",
        "recipe_image": "https://plus.unsplash.com/premium_photo-1669559809547-6e4c4fe41371?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "recipe_description": "Combine rolled oats, pumpkin seeds, milk, and chia seeds in a pot.Bring to a boil, then simmer for a few minutes until oats are cooked through.Remove from heat and let sit for a few minutes to thicken.Top with fresh fruit, chopped nuts, or a drizzle of honey for extra flavor and sweetness.Enjoy your warm and nutritious breakfast!"
    },
    {
        "recipe_name": "Rice and Curry",
        "recipe_image": "https://plus.unsplash.com/premium_photo-1699293238823-7f56fe53ae3e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "recipe_description": "Cook rice according to package instructions for fluffy rice.Sauté vegetables and protein (chicken, tofu, etc.) in a pan with curry paste or powder.Add coconut milk or broth and simmer until the sauce thickens.Season with additional spices to your taste (optional).Serve the flavorful curry over cooked rice.Enjoy a comforting and flavorful meal!"
    },
    {
        "recipe_name": "Fruit and Granola",
        "recipe_image": "https://plus.unsplash.com/premium_photo-1700053460784-2993baeca13c?q=80&w=2582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "recipe_description": ""
    },
    {
        "recipe_name": "Brown Doughnuts",
        "recipe_image": "https://images.unsplash.com/photo-1607939299142-5b235ffd94a4?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "recipe_description": "Layer your favorite fruits in a bowl for a beautiful presentation.Top with granola for added crunch and texture.Drizzle with yogurt, honey, or milk (optional) for extra moisture and sweetness.Enjoy a refreshing and healthy breakfast or snack!"
    },
    {
        "recipe_name": "Biscuits",
        "recipe_image": "https://images.unsplash.com/photo-1436565079298-1b29be0341b9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "recipe_description": "Sift flour, baking powder, and salt into a bowl for a light and airy texture.Cut in cold butter with a pastry cutter until the mixture resembles coarse crumbs.Mix in milk or buttermilk until a soft dough forms, avoiding overworking it.Knead gently on a lightly floured surface for a few seconds.Roll out the dough and cut into desired shapes with cookie cutters.Place biscuits on a baking sheet and bake until golden brown.Enjoy warm biscuits on their own or with butter, jam, or gravy.These homemade biscuits are perfect for breakfast, side dish, or anytime snack!"
    },
    {
        "recipe_name": "Pasta",
        "recipe_image": "https://plus.unsplash.com/premium_photo-1705686155055-269efeedeb82?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "recipe_description":"Cook pasta according to package instructions for perfect al dente texture.While the pasta cooks, sauté your favorite sauce ingredients like vegetables, ground meat,or tomato sauce in a pan with olive oil.Season the sauce with your preferred herbs and spices (garlic powder, oregano, etc.).Drain the pasta and toss it with the prepared sauce until well coated.(Optional) Add grated cheese on top for a creamy and rich finish.Garnish with chopped fresh herbs like parsley or basil for an extra pop of flavor (optional)." 
        
        
    },
    {
        "recipe_name": "Seafood Stew",
        "recipe_image": "https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "recipe_description": "Sauté onions, peppers, and garlic in a pot with olive oil to soften the vegetables.Add your favorite seafood like shrimp, mussels, white fish, or a combination.Pour in diced tomatoes, broth, and your desired seasonings (bay leaf, thyme, etc.).Bring to a boil, then simmer until the seafood is cooked through and the stew thickens.Adjust seasonings to taste for a perfectly flavored broth.(Optional) Add a squeeze of lemon juice for a touch of brightness.Serve hot with crusty bread for dipping or spooning up the flavorful broth."
    },
    {
        "recipe_name": "Fruit Salad",
        "recipe_image": "https://images.unsplash.com/photo-1543668900-9124915a121f?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "recipe_description": " Chop your favorite fruits (berries, melon, mango, etc.) into bite-sized pieces.Mix together in a bowl for a vibrant and colorful salad.Drizzle with lemon juice to prevent browning, especially for fruits like apples.(Optional) For a touch of sweetness, add a drizzle of honey or maple syrup.Serve chilled or at room temperature for a refreshing and healthy dessert."
    },
    {
        "recipe_name": "Daal Soup and Bread",
        "recipe_image": "https://plus.unsplash.com/premium_photo-1699293238740-7588b9c5a09a?q=80&w=2514&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "recipe_description": "Simmer lentils, vegetables like chopped carrots and onions, and spices (cumin, coriander, turmeric) in broth until the lentils are soft.Mash some of the lentils for a thicker and creamier daal soup consistency (optional).Season with salt and pepper to your taste for a flavorful base.Garnish with fresh cilantro for a pop of color and freshness.Serve hot with crusty bread for dippingEnjoy this comforting and nourishing daal soup and bread combination!"
    },
    {
        "recipe_name": "Green Lentils Daal",
        "recipe_image": "https://plus.unsplash.com/premium_photo-1699030868880-d8970ccc146e?q=80&w=2526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "recipe_description": "Sauté onions, garlic, and spices like cumin and turmeric in ghee or oil until fragrant.Add green lentils, diced tomatoes, and water or broth for a flavorful base.Bring to a boil, then simmer until the lentils are tender and the daal has thickened.Adjust seasonings to your taste for a perfectly balanced flavor profile.Garnish with chopped cilantro for a fresh touch.Serve with rice or roti for a complete and satisfying meal."
    },
    {
        "recipe_name": "Yogurt Bowl",
        "recipe_image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "recipe_description": "Spoon plain yogurt into a bowl for a healthy and protein-rich base.Top with your favorite fruits (berries, banana, mango, etc.) for a burst of sweetness and vitamins.Add granola for a delightful textural contrast and extra crunch.Sprinkle with chopped nuts like almonds or walnuts for healthy fats and protein.Drizzle with honey, maple syrup, or agave nectar for additional sweetness (optional).Enjoy this customizable and nutritious yogurt bowl for breakfast, snack, or dessert!"
    }
]
    )
    return (
        <div>
            <Navbar/>

            <div className="container">
                <div className="row">
                    <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />

                    <div className="row g-5">
                        {

                            recipe.map(
                                (value)=>{

                                    return                         <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                                    <div class="card">
                                        <img src={value.recipe_image} class="card-img-top card-dish" alt="Image of Spaghetti Aglio e Olio"/>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.recipe_name}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">Recipe</h6>
                                                <p className="card-text" >{value.recipe_description}</p>
                                                
                                            </div>
                                    </div>
        
        
                                </div>


                                }
                            )
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewRecipe