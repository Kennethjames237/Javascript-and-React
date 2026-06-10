//async - await

const preHeatOven = () => {
    return new Promise((resolves, reject) => {
        setTimeout(() => {
            const preHeatOven = true;
            if (preHeatOven) {
                resolves("Preheat obven to 100deg")
            } else {
                reject("Failed Task")
            }
        }, 2000)
    })
}

const addSugarAndChocoChips = () => {
    return new Promise((resolves, reject) => {
        setTimeout(() => {
            const addchocco = true;
            if (addchocco) {
                resolves("place choko and butter")
            } else {
                reject("Failed Task")
            }
        }, 2000)
    })
}

const AddFlourCocoAndSalt = () => {
    return new Promise((resolves, reject) => {
        setTimeout(() => {
            const addSaltFlour = true;
            if (addSaltFlour) {
                resolves("Add flour, coco and salt")
            } else {
                reject("Failed Task")
            }
        }, 2000)
    })
}

const bakeMixture = () => {
    return new Promise((resolves, reject) => {
        setTimeout(() => {
            const bakeMixture = true;
            if (bakeMixture) {
                resolves("bake to 24 min")
            } else {
                reject("Failed Task")
            }
        }, 2000)
    })
}

const bake = async () => {
    try {
        const task1 = await preHeatOven();
        console.log(task1);

        const task2 = await addSugarAndChocoChips();
        console.log(task2);

        const task3 = await AddFlourCocoAndSalt();
        console.log(task3);

        const task4 = await bakeMixture();
        console.log(task4);

        console.log("enjoy your food...");
    } catch(error) {
        console.log(error);
    }
}

bake();