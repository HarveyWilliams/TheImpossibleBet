var numberOfPeople = 100;
var boxes = [];
var originalPeople = [];

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

for (let i = 0; i < numberOfPeople; i++) {
    originalPeople.push({ foundBox: false });
    boxes.push(i);
}

// Answer

var attempt = (originalPeople) => {
    let people = originalPeople;

    for (let i = 0; i < numberOfPeople; i++) {
        //console.log('person', i);

        let tries = numberOfPeople / 2;
        let currentTargetBox = i;
        let boxFound = false;

        do {
            //console.log('try', tries);

            if (boxes[currentTargetBox] === i) {
                boxFound = true;
            } else {
                currentTargetBox = boxes[currentTargetBox];
            }

            tries--;
        } while (tries != 0 && !boxFound)

        originalPeople[i].foundBox = boxFound;
    }

    return people;
};

var numberOfAttempts = 1000000;
var success = 0;

for (let i = 0; i < numberOfAttempts; i++) {
    shuffleArray(boxes);

    let triedAttempt = attempt(originalPeople);

    //console.log(triedAttempt);

    if (triedAttempt.every(person => person.foundBox)) {
        success++;
    }

    /*
    if (triedAttempt.filter(person => person.foundBox).length / numberOfPeople > 0.5) {
        success++;
    }
    */
}

console.log(success / numberOfAttempts);

/*
attempts.forEach(triedAttempt => {
    console.log(triedAttempt);
    console.log(triedAttempt.filter(person => person.foundBox).length);
});
*/
