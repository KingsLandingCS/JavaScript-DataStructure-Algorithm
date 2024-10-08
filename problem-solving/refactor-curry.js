const buildSammy = ingred1 => ingred2 => ingred3 =>
    `${ingred1}, ${ingred2}, ${ingred3}`;

const mySammy = buildSammy("Bacon")("Lettuce")("Tomato");
console.log(mySammy);
