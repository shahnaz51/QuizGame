let nextText = "next"

let currentHtml;

let value = 0;

let quiz = document.getElementsByClassName("quiz")[0];

let currentQuest = ""

let quest = 1;

let correctAnswers = 0;

let q1;

let q2;

let q3;

let q4;

function run() {
    switch (quest) {
        case 1:
                currentQuest = "Who is the CEO of Google?";
                q1 = "Sundar Pichai";
                q2 = "Mark Zuckerberg";
                q3 = "Elon Musk";
                q4 = "Jeff Bezos";
                break;
                
        case 2:
                value = 20
                currentQuest = "Who is the CEO of Amazon?";
                q1 = "Sundar Pichai";
                q2 = "Jeff Bezos";
                q3 = "Elon Musk";
                q4 = "Jack Ma";
                break;
                
        case 3:
                value = 40
                currentQuest = "Which among these provides end-to-end encryption?";
                q1 = "YouTube";
                q2 = "Telegram";
                q3 = "WhatsApp";
                q4 = "Twitter";
                break;
                
        case 4:
                value = 60
                currentQuest = "YouTuber having highest subscriber in India?";
                q1 = "Round2hell";
                q2 = "Mr.Indian Hacker";
                q3 = "Techno Gamerz";
                q4 = "CarryMinati";
                break;
                
        case 5:
                value = 80
                currentQuest = "Winner of FIFA wold cup 2022";
                q1 = "Argentina";
                q2 = "France";
                q3 = "Germany";
                q4 = "Sweden";
            break;

        
        default:
            
            
            break;
    }

    if (quest<5) {
        nextText = "Next";
    }
    
    else if(quest==5){
        nextText = "Submit";
    }
    else if(quest == 6){
        document.getElementById("score").innerHTML = `${correctAnswers}/5`;
        location.href = "#href"
    }
    console.log(quest);
}

run();


function updateHtml() {
    currentHtml = `
    <progress style="width: 100%; height: 30px" value="${value}" max="100">Never</progress>
    <h2 id="question">${currentQuest}</h2>
<div id="ansbtn">
    <label class="btn"><input type="radio" id="q1" name="ok"><span class="btntext">${q1}</span></label>
    <label class="btn"><input type="radio" id="q2" name="ok"><span class="btntext">${q2}</span></label>
    <label class="btn"><input type="radio" id="q3" name="ok"><span class="btntext">${q3}</span></label>
    <label class="btn"><input type="radio" id="q4" name="ok"><span class="btntext">${q4}</span></label>
</div>


<button class="next" onClick="next()">${nextText}</button>
<button class="next" onClick="prev()">Previous</button>`
    quiz.innerHTML = currentHtml;
}
updateHtml();

let inputs = document.getElementsByTagName("input");


// let next = document.getElementsByTagName("next")[0];

function next() {


    if(inputs[0].checked && quest===1){
        correctAnswers++;
    }
    
    if(inputs[1].checked && quest===2){
        correctAnswers++;
    }

    if(inputs[2].checked && quest===3){
        correctAnswers++;
    }

    if(inputs[3].checked && quest===4){
        correctAnswers++;
    }

    if(inputs[0].checked && quest===5){
        correctAnswers++;
    }
        
            quest++;

        if(quest>5){
            
            run()
        }
        if(quest<6){
            run();
            updateHtml();
        }
    
}

function prev() {
    if(quest>1){
        quest--;
        run();
        updateHtml();
    }
}




console.log(quiz);

