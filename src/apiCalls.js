async function getRecipes() {
    const response = await fetch('https://mix-master-api.onrender.com/api/v1/drinks')
    if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`)
    }
    const recipes = await response.json()
    return recipes
}

export {
    getRecipes
}