import React from 'react';
export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsList = ingredients.map( item => <li>{item}</li>)

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients( prevState => [...prevState, newIngredient])
    }
    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form" action="submit">
                <input 
                    type="text" 
                    placeholder="e.g.Oregano"
                    aria-label="Add ingredient"
                    name="ingredient" />
                <button>+ Add ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    )
}