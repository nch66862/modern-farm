console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant } from './field.js'
import { usePlants } from './field.js'


const yearlyPlan = createPlan ()
const asparagus = createAsparagus ()
const corn = createCorn ()
const potato = createPotato ()
const soybean = createSoybean ()
const sunflower = createSunflower ()
const wheat = createWheat ()


console.log("Yearly Plan")
console.log(yearlyPlan)
console.log("All the seeds")
console.log(asparagus)
console.log(corn)
console.log(potato)
console.log(soybean)
console.log(sunflower)
console.log(wheat)

let seed = corn
console.log("This is the result of addPlant")
let result = addPlant(seed)
seed = asparagus
console.log("This is the result of addPlant")
result = addPlant(seed)
seed = potato
console.log("This is the result of addPlant")
result = addPlant(seed)

console.log(result)