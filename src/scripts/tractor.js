import { createCorn } from './seeds/corn.js';
import { createAsparagus} from './seeds/asparagus.js';
import { createPotato} from './seeds/potato.js';
import { createSoybean} from './seeds/soybean.js';
import { createSunflower} from './seeds/sunflower.js';
import { createWheat} from './seeds/wheat.js';


export const plantSeeds = (thisYearsPlan) => {
    let seedArrayForThisYearsPlan = []
    for (let i = 0; i < thisYearsPlan.length; i++) {
        let childArray = thisYearsPlan[i];
        for (let j = 0; j < childArray.length; j++) {
            let element = childArray[j];
            if (element == "Corn") {
                element = createCorn()
            }
            else if (element == "Asparagus") {
                element = createAsparagus()
            }
            else if (element == "Potato") {
                element = createPotato()
            }
            else if (element == "Soybean") {
                element = createSoybean()
            }
            else if (element == "Sunflower") {
                element = createSunflower()
            }
            else if (element == "Wheat") {
                element = createWheat()
            }
        }
        
    }
    seedArrayForThisYearsPlan = thisYearsPlan
    return seedArrayForThisYearsPlan
}
