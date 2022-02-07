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

/*
function obtainDirections(step){
    return new Promise(
        (resolvedCb, rejectedCb)=>{ //<- is the returning callback
            setTimeout(()=>{
                console.log(directions[step]);
                if (!directions[step]) rejectedCb(`Directions not found for step ${step}.`);
                else resolvedCb(`Directions GIVEN for step ${step}.`);
            }, 3*1000)
        }
    )
};


console.log(obtainDirections(0));
*/

/*
obtainDirections(0)
.then(()=> obtainDirections(1))
.then(()=> obtainDirections(2))
.then(()=> obtainDirections(3))
.then(()=> obtainDirections(999))
.catch((error)=>{
    console.log("There was an error: " + error);
})
*/


/*
const magicButton = document.getElementById("magic-button");

magicButton.onclick = handleMagicClick;

function handleMagicClick(){
    return obtainDirections(0)
    .then(()=> obtainDirections(1))
    .then(()=> obtainDirections(2))
    .then(()=> obtainDirections(3))
    .then(()=> obtainDirections(999))
}
*/

function onclickHandler(){
    return new Promise(
        (res, rej)=> {
            /*
            Equivalent to:
            if(Math.random() > 0.5 randomResult = true
            else randomResult = false)
            */
            const randomResult = Math.random() > 0.2 ? true : false

            if(randomResult){
                res("You have another to do!")
            } else {
                rej("You ran out of todos")
            }
        }
    )
    .then((newToDo)=>{
        const todoList = document.getElementById("todo-list")
        todoList.innerHTML += `<div> ${newToDo} </div>`
        }
    ).catch((err)=>{
        const todoList = document.getElementById("todo-list")
        todoList.innerHTML = `<h3> ${err} </h3>`;
    })
}

const magicButton = document.getElementById("magic-button");

magicButton.onclick = ()=> onclickHandler();


