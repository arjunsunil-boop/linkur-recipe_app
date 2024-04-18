import React, { useState } from 'react'
import Navbar from './Navbar'

const Home = () => {
    const [recipe, ChangeRecipe] = useState(


        [
            {
                "recipe_name": "Ramen",
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

        ]
    )
    return (
        <div>
            <Navbar />
            <div className="container">

                <div className="row g-5">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-5">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <div id="carouselExampleIndicators" class="carousel slide">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://www.theoriginaldish.com/wp-content/uploads/2018/01/Website-Banner-New.jpg" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://www.theoriginaldish.com/wp-content/uploads/2018/01/Website-Banner-New.jpg" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://www.theoriginaldish.com/wp-content/uploads/2018/01/Website-Banner-New.jpg" class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>


                            </div>
                            <br /><br />

                        </div>
                        <div className="row g-5">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <p className="deals">Deals!</p>
                                <div className="row g-5">
                                    {

                                        recipe.map(
                                            (value) => {

                                                return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                                                    <div class="card">
                                                        <img src={value.recipe_image} class="card-img-top card-dish" alt="Image of Spaghetti Aglio e Olio" />
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
                        <br /><br />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <a href="/view" class="btn btn-primary">More</a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home