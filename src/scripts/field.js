let plantsGrowing = []

export const addPlant = (seed) => {
    const checkForArray = Array.isArray(seed)
    if (checkForArray == true) {
        plantsGrowing = plantsGrowing.concat(plantsGrowing, seed)
    }
    else {
        plantsGrowing.push(seed)
    }
    return plantsGrowing
}

export const usePlants = () => {
    plantsGrowing.slice()
}

