
var questions = [
    {
        prompt: "What is my babez's favorite food?",
        answers: [
            "Barbeque ribs", "Alfredo pasta", "Pepperoni pizza", "Clam chowder"
        ],
        correct: "Alfredo pasta",
    },
    {
        prompt: "What is my babez's favoritre color?",
        answers: [
            "Crimson red", "royal blue", "sky blue", "Mint green"
        ],
        correct: "Mint green",
    },
    {
        prompt: "",
        answers: "",
        correct: "",
    },
    {
        prompt: "",
        answers: "",
        correct: "",
    },
    {
        prompt: "",
        answers: "",
        correct: "",
    },
] //End array "questions"

var i=0;

var qNum=0;

var timerOut = false;

function loading() { // loading screen before questions

    qNum++

    document.getElementById("big-words").innerHTML = "";

        document.getElementById("top").innerHTML = "i";

        document.getElementById("middle").innerHTML = "Question number " + qNum;

        console.log(qNum)

        document.getElementById("bottom").innerHTML = "";


var second = 0;

document.getElementById("big-words").innerHTML = "<div id='outerBar'>Loading<div id='loadBar'></div></div>";


        var secs = setInterval(function(){
            second++ //incs second

            newBar = (500 - (3.125 * second)) //takes inital width of loadBar and subtracts 1/20 from it or (25 from 500)

            document.getElementById("loadBar").style.width = newBar + "px" ; //changes the width

        }, (0.0625 * 1000));

        var loadBar = setTimeout(function(){
            console.log("Time's up!")
            clearInterval(secs)
            document.getElementById("loadBar").style.width = 500 + "px"
            second = 0;
            next()
    }, (10 * 1000))



}


    function next() { //whenever the next question is called


        document.getElementById("big-words").innerHTML = questions[i].prompt;

        //--------------------------
        second = 0;

        timeLeft = 30

        document.getElementById("top").innerHTML = "<div id='outerBar2'>" + timeLeft + "<div id='timerBar'></div></div>";
        
        
                secs = setInterval(function(){

                    second++ //incs second

                    timeLeft--

                    document.getElementById("top").innerHTML = "<div id='outerBar2'>" + timeLeft + "<div id='timerBar'></div></div>";
        
                    newBar = (800 - (26.667 * second)) //takes inital width of loadBar and subtracts 1/20 from it or (25 from 500)
        
                    document.getElementById("timerBar").style.width = newBar + "px" ; //changes the width
        
                }, (1 * 1000));
        
                loadBar = setTimeout(function(){
                    console.log("Time's up!")
                    clearInterval(secs)
                    second = 0;
                    timerOut = true
                    loading()
            }, (30 * 1000))
        //--------------------------

        var a = questions[i].answers

        document.getElementById("middle").innerHTML = "<form>" + "<input type='radio' id='rad1' name='q' value='0'> " + a[0] + "</input>" + "<br>" + "<input type='radio' id='rad2' name='q' value='1'> " + a[1] + "</input>" + "<br>" + "<input type='radio' id='rad3' name='q' value='3'> " + a[2] + "</input>" + "<br>" + "<input type='radio' id='rad4' name='q' value='4'> " + a[3] + "</input>";

        document.getElementById("bottom").innerHTML = "<input id='sub' type='submit' value='submit'>" + "</form>"

        console.log(i)

        console.log(questions[i].prompt)

        i++

        var val = document.getElementById("rad").value;

        document.getElementById("sub").addEventListener("click", function(){ //whenever the submit button is clicked
//take the value or (text?) of radiobutton and compare it to answer
            alert(rad.text)

        });

        
    }

    function start() { //Whenever the start button in the menu is called

        document.getElementById("big-words").innerHTML = "";

        document.getElementById("top").innerHTML = "";

        document.getElementById("button").style.display = "none";

        loading()
    }