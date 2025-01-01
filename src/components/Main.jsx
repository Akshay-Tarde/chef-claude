import React from 'react';
export default function Main() {

    const [ingredients, setIngredients] = React.useState(["oregano"])

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
            <ul>
                {ingredientsList}
            </ul>
        </main>
    );
}