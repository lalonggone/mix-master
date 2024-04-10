async function getRecipes() {
    const response = await fetch('https://mix-master-api.onrender.com/api/v1/drinks')
    if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`)
    }
    const recipes = await response.json()
    return recipes
}

async function patchFavorite(id, newBoolean) {
    await fetch(`https://mix-master-api.onrender.com/api/v1/drinks/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "isFavorite": newBoolean
        })
    })
    .then(response => {
        console.log(response.json());
    })
}

export {
    getRecipes,
    patchFavorite
}