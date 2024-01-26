const quizData = [  
            {  
            question: "Hangi Takım daha eskidir ?",  
            a: "Fenerbahçe",  
            b: "Beşiktaş",  
            c: "Galatasaray",  
            d: "Trabzonspor",  
            correct: "b",  
            },  
            {  
            question: "Tff'in açılımı nedir ?",  
            a: "Türkiye Finalist Fedarasyonu",  
            b: "Türkiye Futbol Fedarasyonu",  
            c: "Tarla Finans Fedarasyonu",  
            d: "Traktör Finans Fedarasyonu",  
            correct: "b",  
            },  
            {  
            question: "Fb'in açılımı nedir ?",  
            a: "Fenerbahçe",  
            b: "Galatasaray",  
            c: "Beşiktaş",  
            d: "Trabzonspor",  
            correct: "a",  
            },  
            {  
            question: "Fenerbahçe hangi yılda Kurulmuştur ?",  
            a: "1908",  
            b: "1907",  
            c: "1994",  
            d: "Hiçbiri",  
            correct: "b",  
            },  
        ];  

        const quiz = document.getElementById("quiz");  
        const answerElements = document.querySelectorAll(".answer");  
        const questionElement = document.getElementById("question");  
        const a_text = document.getElementById("a_text");  
        const b_text = document.getElementById("b_text");  
        const c_text = document.getElementById("c_text");  
        const d_text = document.getElementById("d_text");  
        const submitButton = document.getElementById("submit");  

        let currentQuiz = 0;  
        let score = 0;  

        const deselectAnswers = () => {  
            answerElements.forEach((answer) => (answer.checked = false));  
        };  

        const getSelected = () => {  
            let answer;  
            answerElements.forEach((answerElement) => {  
            if (answerElement.checked) answer = answerElement.id;  
            });  
            return answer;  
        };  

        const loadQuiz = () => {  
            deselectAnswers();  
            const currentQuizData = quizData[currentQuiz];  
            questionElement.innerText = currentQuizData.question;  
            a_text.innerText = currentQuizData.a;  
            b_text.innerText = currentQuizData.b;  
            c_text.innerText = currentQuizData.c;  
            d_text.innerText = currentQuizData.d;  
        };  

        loadQuiz();  

        submitButton.addEventListener("click", () => {  
            const answer = getSelected();  
            if (answer) {  
                if (answer === quizData[currentQuiz].correct) score++;  
                currentQuiz++;  
                if (currentQuiz < quizData.length) loadQuiz();  
                else {  
                    quiz.innerHTML = `  
                    <h2>${quizData.length} sorudan ${score} tanesini bildin.</h2>  
                    <button onclick="history.go(0)">Baştan Başla</button>  
                    ` 
                }  
            }  
        }); 
        