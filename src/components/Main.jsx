import React from 'react';
export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsList = ingredients.map( item => <li>{item}</li>)

    function addIngredient(formData) {
        // event.preventDefault()
        const newIngredient = formData.get("ingredient")
        setIngredients( prevState => [...prevState, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text" 
                    placeholder="e.g.oregano"
                    aria-label="Add ingredient"
                    name="ingredient" />
                <button >+ Add ingredient</button>
            </form>
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className='ingredients-list'>{ingredientsList}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
        </main>
    );
}