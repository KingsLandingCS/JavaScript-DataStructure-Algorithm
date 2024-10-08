const buildSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
        }
    }
}


const mySandwich = buildSandwich("Bacon")("Lettuce")("Tomato");
console.log(mySandwich);

