import { createPlan } from './plan.js'
import { createCorn } from './seeds/corn.js';

const thisYearsPlan = createPlan()

export const plantSeeds = (thisYearsPlan) => {
    const plantedSeeds= thisYearsPlan.array.forEach(element => {
        element.array.forEach(element => {
            if (element == corn) {
                element[0] = createCorn()
            }
        })
    });
    return plantedSeeds
}
