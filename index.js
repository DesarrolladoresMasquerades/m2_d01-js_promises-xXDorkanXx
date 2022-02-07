console.log("JS Loaded");

/*
function standardCallback(){
    console.log("I have been run in the future " + new Date())
};

console.log("Time is " + new Date());
setTimeout(standardCallback, 3 * 1000);
console.log("Time after one line is " + new Date());

const magicButton = document.getElementById("magic-button");

magicButton.onclick = standardCallback;
*/

const directions = [
    "Starting point: Ironhack Miami",
    "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
    "➔ Turn right onto S Miami Ave",
    "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
];

/*
const directionList = [];
function getDirections(step, returningCallback, errorCallback) {
    setTimeout(() => {
    console.log(directions[step]);
    directionList.push(directions[step]);
    if (!directions[step]) errorCallback("Instructions not found.");
    else returningCallback();
    }, 2000);

}


console.log(
    "First leg of the journey",
    getDirections(
        0,
        ()=> getDirections(
            1,
            ()=> getDirections(
                2,
                ()=> getDirections(
                    3,
                    ()=>{console.log("You arrived")},
                    ()=>{}
                ),
                ()=>{}
            ),
            ()=>{}
        ),
        ()=>{console.log("There are no more steps")}
    )
);
*/

//for (const stop of directions) console.log(step)

/*
let step = 0;
setTimeout(
    ()=>{
        console.log(directions[step]);
        step++;
    },
    2*1000
)
*/

function obtainDirections(step){
    return new Promise(
        (resolvedCb, rejectedCb)=>{ //<- is the returning callback
            setTimeout(()=>{
                console.log(directions[step]);
                if (!directions[step]) rejectedCb("Instructions not found.");
                else resolvedCb();
            }, 3*1000)
        }
    )
};

obtainDirections(0)
.then(()=> obtainDirections(1))
.then(()=> obtainDirections(2))
.then(()=> obtainDirections(3))
.then(()=> obtainDirections(999))

const magicButton = document.getElementById("magic-button");

magicButton.onclick = handleMagicClick;

function handleMagicClick(){
    return obtainDirections(0)
    .then(()=> obtainDirections(1))
    .then(()=> obtainDirections(2))
    .then(()=> obtainDirections(3))
    .then(()=> obtainDirections(999))
}