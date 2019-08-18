
var questions = [
    {
        prompt: "What is my babez's favorite food?",
        answers: [
            "barbeque ribs", "alfredo pasta", "pepperoni pizza", "clam chowder"
        ],
        correct: "alfredo pasta",
    },
    {
        prompt: "What is my babez's favorite color?",
        answers: [
            "crimson red", "royal blue", "sky blue", "mint green"
        ],
        correct: "mint green",
    },
    {
        prompt: "What is my babez's favorite animal?",
        answers: [
            "cat", "dog", "hamster", "goldfish"
        ],
        correct: "cat",
    },
    {
        prompt: "Where was my babez born?",
        answers: [
            "canada", "texas", "north carolina", "florida"
        ],
        correct: "florida", //what a weird state
    },
    {
        prompt: "What is my babez's favorite candy?",
        answers: [
            "gummy bears", "hershey's kisses", "swedish fish", "reese's cups"
        ],
        correct: "gummy bears",
    },
] //End array "questions"

var i=0;

var qNum=0;

var timerOut = false;

var guess = ""

var correct = 0

var total = questions.length

var result

function reset() {

    document.getElementById("big-words").innerHTML = "Welcome to:";

        document.getElementById("top").innerHTML = "My babez's quiz!";

        document.getElementById("middle").innerHTML = "";

        document.getElementById("bottom").innerHTML = "";

        document.getElementById("button").style.display = "block";

        i=0;

qNum=0;

timerOut = false;

guess = ""

correct = 0

}

function end() {
    document.getElementById("big-words").innerHTML = "";

        document.getElementById("top").innerHTML = "i";

        document.getElementById("middle").innerHTML = "Thanks for playing!";

        if ((correct/total) >= 0.6) {
            result = "You win"
        }
        else {
            result = "You lose"
        }

        document.getElementById("bottom").innerHTML = result + "<br>" + correct + "/" + total;

 second = 0;

document.getElementById("big-words").innerHTML = "<div id='outerBar'>Game Over<div id='loadBar'></div></div>";


        secs = setInterval(function(){
            second++ //incs second

            newBar = (500 - (3.70 * second)) //takes inital width of loadBar and subtracts 1/20 from it or (25 from 500)

            document.getElementById("loadBar").style.width = newBar + "px" ; //changes the width

        }, (0.036225 * 1000));

        loadBar = setTimeout(function(){
            clearInterval(secs)
            document.getElementById("loadBar").style.width = 500 + "px"
            second = 0;
            reset()
    }, (5 * 1000))

}

function loading() { // loading screen before questions

    qNum++

    if (qNum > total) {
        //end page
        end()
        
            }
    else {

        

    document.getElementById("big-words").innerHTML = "";

        document.getElementById("top").innerHTML = "i";

        document.getElementById("middle").innerHTML = "Question number " + qNum;

        console.log(qNum)

        document.getElementById("bottom").innerHTML = guess + "<br>" + correct + "/" + total;


var second = 0;

document.getElementById("big-words").innerHTML = "<div id='outerBar'>Loading<div id='loadBar'></div></div>";


        var secs = setInterval(function(){
            second++ //incs second

            newBar = (500 - (7.40 * second)) //takes inital width of loadBar and subtracts 1/20 from it or (25 from 500)

            document.getElementById("loadBar").style.width = newBar + "px" ; //changes the width

        }, (0.036225 * 1000));

        var loadBar = setTimeout(function(){
            console.log("Time's up!")
            clearInterval(secs)
            document.getElementById("loadBar").style.width = 500 + "px"
            second = 0;
            next()
    }, (2.5 * 1000))


    }
}


    function next() { //whenever the next question is called


        document.getElementById("big-words").innerHTML = questions[i].prompt;

        document.getElementById("bottom").innerHTML = ""

        //--------------------------
        second = 0;

        timeLeft = 15

        document.getElementById("top").innerHTML = "<div id='outerBar2'>" + timeLeft + "<div id='timerBar'></div></div>";
        
        
                secs = setInterval(function(){

                    second++ //incs second

                    timeLeft--

                    document.getElementById("top").innerHTML = "<div id='outerBar2'>" + timeLeft + "<div id='timerBar'></div></div>";
        
                    newBar = (800 - (53.334 * second)) //takes inital width of loadBar and subtracts 1/20 from it or (25 from 500)
        
                    document.getElementById("timerBar").style.width = newBar + "px" ; //changes the width
        
                }, (1 * 1000));
        
                loadBar = setTimeout(function(){
                    console.log("Time's up!")
                    clearInterval(secs)
                    second = 0;
                    timerOut = true
                    guess = "None answered!"
                    loading()
            }, (15 * 1000))
        //--------------------------

        var total = questions[i]

        var a = total.answers

        var compRad = []

        var idents = ["zero", "one", "two", "three"]

        for (q=0; q<=3; q++) {

            compRad[q] = "<input type='radio' class='ans' name='ans' id='" + idents[q] + "'> " + a[q] + "</input>"

            console.log(idents[q])
            
        }


        document.getElementById("middle").innerHTML = "<form name='rads'>" +  compRad[0] + "<br>" +  compRad[1] + "<br>" +  compRad[2] + "<br>" +  compRad[3] + "<br>" + "<input id='sub' type='submit' value='submit'>" + "</form>"

        console.log($("#one")[0].checked)


        console.log(i)

        

        i++

        document.getElementById("sub").addEventListener("click", function(event){ //whenever the submit button is clicked
            event.preventDefault();
//take the value or (text?) of radiobutton and compare it to answer
    if (($("#zero")[0].checked)) {

        if (a[0] === total.correct) {
            correct++
            guess = "CORRECT!!!!"
        }
        else {
            guess = "WRONG!"
        }

    }
    else if (($("#one")[0].checked)) {

        if (a[1] === total.correct) {
            correct++
            guess = "CORRECT!!!!"
        }
        else {
            guess = "WRONG!"
        }

    }
    else if (($("#two")[0].checked)) {

        if (a[2] === total.correct) {
            correct++
            guess = "CORRECT!!!!"
        }
        else {
            guess = "WRONG!"
        }

    }
    else if (($("#three")[0].checked)) {

        if (a[3] === total.correct) {
            correct++
            guess = "CORRECT!!!!"
        }
        else {
            guess = "WRONG!"
        }

    }
    else {
        guess = "None answered!"
    }
    clearInterval(secs)
    clearTimeout(loadBar)
                    second = 0;
                    timerOut = true
    loading()

        });

        
    }

    function start() { //Whenever the start button in the menu is called

        document.getElementById("big-words").innerHTML = "";

        document.getElementById("top").innerHTML = "";

        document.getElementById("button").style.display = "none";

        loading()
    }