
document.addEventListener('DOMContentLoaded', () => { 
const quizData = [
    {
        subheading: 'Well Air Concept Mock Questions',
        questions: [
            {
                question: 'What is the primary objective of the Air Concept in the WELL Building Standard?',
                choices: [
                    'To maximize energy efficiency in HVAC systems',
                    'To optimize indoor air quality and minimize sources of indoor air pollution',
                    'To increase outdoor air ventilation rates',
                    'To reduce carbon emissions from buildings'
                ],
                correctAnswer: 'To optimize indoor air quality and minimize sources of indoor air pollution'
            },
            {
question: 'Which of the following strategies can be used to control the levels of volatile organic compounds (VOCs) in a WELL-certified building?',
choices: [
'Installing low-VOC emitting materials and products',
'Increasing outdoor air ventilation rates',
'Implementing a regular cleaning and maintenance schedule',
'All of the above'
],
correctAnswer: 'All of the above'
},
{
question: 'According to the WELL Building Standard, what is the maximum allowable concentration of PM2.5 particles in the indoor air?',
choices: [
'15 µg/m³',
'12 µg/m³',
'10 µg/m³',
'5 µg/m³'
],
correctAnswer: '10 µg/m³'
},

{
question: 'In the context of the WELL Building Standard, what is the primary purpose of the air filtration system?',
choices: [
'To reduce energy consumption in the building',
'To maintain a comfortable indoor temperature',
'To remove particulate matter, allergens, and other airborne contaminants',
'To control humidity levels in the building'
],
correctAnswer: 'To remove particulate matter, allergens, and other airborne contaminants'
},

{
question: 'Which of the following strategies can help reduce the risk of mold growth and maintain healthy humidity levels in a WELL-certified building?',
choices: [
'Regular inspection and maintenance of HVAC systems',
'Implementing moisture control measures in building design and construction',
'Monitoring and maintaining indoor relative humidity levels between 30% and 50%',
'All of the above'
],
correctAnswer: 'All of the above'
},
{
question: 'What is the purpose of the Ventilation Effectiveness Feature in the WELL Building Standard?',
choices: [
'To maximize energy efficiency in HVAC systems',
'To ensure the proper distribution of fresh air throughout the building',
'To increase outdoor air ventilation rates',
'To reduce carbon emissions from buildings'
],
correctAnswer: 'To ensure the proper distribution of fresh air throughout the building'
},

{
question: 'Which of the following indoor air contaminants can be controlled by using proper filtration systems?',
choices: [
'Particulate matter (PM)',
'Volatile organic compounds (VOCs)',
'Carbon dioxide (CO2)',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'Which of the following is NOT a strategy for reducing radon levels in a WELL-certified building?',
choices: [
'Sealing foundation cracks and openings',
'Installing a radon mitigation system',
'Increasing outdoor air ventilation rates',
'Using air purifiers with HEPA filters'
],
correctAnswer: 'Using air purifiers with HEPA filters'
},

{
question: 'What is the primary benefit of providing outdoor air delivery monitoring in a WELL-certified building?',
choices: [
'To ensure the buildings air quality is continuously maintained',
'To minimize energy consumption in the building',
'To maintain a comfortable indoor temperature',
'To control humidity levels in the building'
],
correctAnswer: 'To ensure the buildings air quality is continuously maintained'
},

{
question: 'Which of the following strategies can be employed to reduce exposure to environmental tobacco smoke (ETS) in a WELL-certified building?',
choices: [
'Implementing a no-smoking policy within the building and near its entrances',
'Designating separate outdoor smoking areas away from building entrances and air intakes',
'Using proper air filtration systems',
'All of the above'
],
correctAnswer: 'All of the above'
}
            // ... other questions for Set 1
        ]
    },
    {
        subheading: 'Well Water Concept Mock Questions',
        questions: [
            {
                question: 'What is the primary objective of the Water Concept in the WELL Building Standard?',
                choices: [
                    'To optimize water consumption in buildings',
                    'To improve the taste of drinking water',
                    'To ensure the provision of clean, safe, and potable water',
                    'To reduce water pollution from buildings'
                ],
                correctAnswer: 'To ensure the provision of clean, safe, and potable water'
            },
            {
question: 'Which of the following water quality parameters is NOT monitored under the WELL Building Standard?',
choices: [
'Turbidity',
'Lead',
'Dissolved oxygen',
'Total dissolved solids (TDS)'
],
correctAnswer: 'Dissolved oxygen'
},

{
question: 'According to the WELL Building Standard, what is the maximum allowable concentration of lead in drinking water?',
choices: [
'15 µg/L',
'5 µg/L',
'10 µg/L',
'20 µg/L'
],
correctAnswer: '5 µg/L'
},

{
question: 'Which of the following strategies can be used to reduce the risk of Legionella bacteria growth in a buildings water system?',
choices: [
'Regular flushing of water systems',
'Maintaining appropriate water temperatures',
'Implementing a water management plan',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'In the context of the WELL Building Standard, what is the purpose of the Fundamental Water Quality Feature?',
choices: [
'To minimize water consumption in the building',
'To ensure that the buildings water meets or exceeds minimum water quality standards',
'To encourage the use of water-saving technologies and fixtures',
'To reduce water waste from building processes'
],
correctAnswer: 'To ensure that the buildings water meets or exceeds minimum water quality standards'
},
{
question: 'Which of the following is a primary goal of the Water Treatment Feature in the WELL Building Standard?',
choices: [
'To improve the taste of drinking water',
'To ensure that the buildings water meets or exceeds minimum water quality standards',
'To encourage the use of water-saving technologies and fixtures',
'To reduce water waste from building processes'
],
correctAnswer: 'To ensure that the buildings water meets or exceeds minimum water quality standards'
},

{
question: 'Which of the following strategies can be used to improve water efficiency in a WELL-certified building?',
choices: [
'Installing water-efficient fixtures and appliances',
'Implementing a water-efficient landscaping strategy',
'Capturing and reusing rainwater or greywater',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the primary purpose of providing drinking water promotion in the WELL Building Standard?',
choices: [
'To improve the taste of drinking water',
'To encourage occupants to consume more water and stay hydrated',
'To minimize water consumption in the building',
'To reduce water waste from building processes'
],
correctAnswer: 'To encourage occupants to consume more water and stay hydrated'
},

{
question: 'Which of the following is NOT a benefit of using point-of-use water filters in a WELL-certified building?',
choices: [
'Reducing contaminants in drinking water',
'Improving the taste of drinking water',
'Increasing the water pressure in the building',
'Providing an additional layer of protection against waterborne contaminants'
],
correctAnswer: 'Increasing the water pressure in the building'
},

{
question: 'In the context of the WELL Building Standard, how can hot water temperature be managed to reduce the risk of scalding while still minimizing the risk of Legionella bacteria growth?',
choices: [
'Maintaining a minimum hot water temperature of 140°F (60°C)',
'Installing thermostatic mixing valves at points of use',
'Implementing a regular flushing schedule for hot water systems',
'Increasing the water pressure in the building'
],
correctAnswer: 'Installing thermostatic mixing valves at points of use'
}





            // ... other questions for Set 2
        ]
    },
    {
        subheading: 'Nourishment',
        questions: [
            {
                question: 'What is the primary objective of the Air Concept in the WELL Building Standard?',
                choices: [
                    'To maximize energy efficiency in HVAC systems',
                    'To optimize indoor air quality and minimize sources of indoor air pollution',
                    'To increase outdoor air ventilation rates',
                    'To reduce carbon emissions from buildings'
                ],
                correctAnswer: 'To optimize indoor air quality and minimize sources of indoor air pollution'
            },
            // ... other questions for Set 3
        ]
    },
    // Add more sets as needed
];



const quizContainer = document.getElementById('quiz-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const showAnswersBtn = document.getElementById('show-answers-btn');


function createQuestionElement(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.setAttribute('data-question-index', index);

    const questionText = document.createElement('h2');
    questionText.textContent = question.question;
    questionDiv.appendChild(questionText);

    question.choices.forEach((choice, choiceIndex) => {
        const choiceWrapper = document.createElement('div');
        
        const choiceInput = document.createElement('input');
        choiceInput.setAttribute('type', 'radio');
        choiceInput.setAttribute('name', `question${index}`);
        choiceInput.setAttribute('value', `${choice}`);
        choiceInput.setAttribute('id', `choice${choiceIndex}question${index}`);

        const choiceLabel = document.createElement('label');
        choiceLabel.setAttribute('for', `choice${choiceIndex}question${index}`);
        choiceLabel.textContent = choice;
        
        choiceWrapper.appendChild(choiceInput);
        choiceWrapper.appendChild(choiceLabel);
        questionDiv.appendChild(choiceWrapper);
    });

    return questionDiv;
}


quizData.forEach((questionSetData, setIndex) => {
    const setDiv = document.createElement('div');
    setDiv.classList.add('question-set');
    setDiv.setAttribute('data-set-index', setIndex);
    setDiv.style.display = 'none';

    const subheading = document.createElement('h3');
    subheading.textContent = questionSetData.subheading;
    setDiv.appendChild(subheading);

    questionSetData.questions.forEach((question, questionIndex) => {
        const questionElement = createQuestionElement(question, questionIndex);
        setDiv.appendChild(questionElement);
    });

    quizContainer.appendChild(setDiv);
});




let currentSetIndex = 0;
document.querySelector('.question-set[data-set-index="0"]').style.display = 'block';

prevBtn.addEventListener('click', () => {
    if (currentSetIndex > 0) {
        document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`).style.display = 'none';
        currentSetIndex--;
        document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`).style.display = 'block';
    }
});


nextBtn.addEventListener('click', () => {
    if (currentSetIndex < quizData.length - 1) {
        document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`).style.display = 'none';
        currentSetIndex++;
        document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`).style.display = 'block';
        
        // Hide the score-display div when the next button is clicked
        const scoreDisplay = document.getElementById('score-display');
        scoreDisplay.style.display = 'none';
    }
});




submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const currentSet = document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`);
    const questions = currentSet.querySelectorAll('.question');
    let score = 0;

    questions.forEach((questionDiv, index) => {
        const questionIndex = questionDiv.getAttribute('data-question-index');
        const selectedChoice = document.querySelector(`input[name="question${index}"]:checked`);

        if (selectedChoice) {
            const userAnswer = selectedChoice.value;
            const correctAnswer = quizData[currentSetIndex].questions[questionIndex].correctAnswer;

            if (userAnswer === correctAnswer) {
                score++;
            }
        }
    });
    alert(`You answered ${score} out of ${questions.length} questions correctly.`);
    // Display the score on the page
    const scoreDisplay = document.getElementById('score-display');
    scoreDisplay.style.display = 'block'; // Make the score-display div visible
    scoreDisplay.innerHTML = `You answered ${score} out of ${questions.length} questions correctly.`;
});



let answersVisible = false;

showAnswersBtn.addEventListener('click', () => {
    const currentSet = document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`);
    const questions = currentSet.querySelectorAll('.question');

    answersVisible = !answersVisible;

    if (answersVisible) {
        showAnswersBtn.textContent = 'Hide Answers';
    } else {
        showAnswersBtn.textContent = 'Show Answers';
    }

    questions.forEach((questionDiv, index) => {
        const questionIndex = questionDiv.getAttribute('data-question-index');
        const correctAnswer = quizData[currentSetIndex].questions[questionIndex].correctAnswer;
        let correctAnswerParagraph = questionDiv.querySelector('.correct-answer');

        if (!correctAnswerParagraph) {
            correctAnswerParagraph = document.createElement('p');
            correctAnswerParagraph.classList.add('correct-answer');
            correctAnswerParagraph.textContent = `Correct Answer: ${correctAnswer}`;
            correctAnswerParagraph.style.color = 'green';
            correctAnswerParagraph.style.display = 'none';
            questionDiv.appendChild(correctAnswerParagraph);
        }

        correctAnswerParagraph.style.display = answersVisible ? 'block' : 'none';
    });
});





});




