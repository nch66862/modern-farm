let plantsGrowing = []

export const addPlant = (seed) => {
    const checkForArray = Array.isArray(seed)
    if (checkForArray == true) {
        plantsGrowing = concat(plantsGrowing, seed)
    }
    else {
        plantsGrowing.push(seed)
    }
}

export const usePlants = () => {
    plantsGrowing.slice()
}

