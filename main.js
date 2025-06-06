var question = document.getElementsByClassName("question");

for(var i = 0; i<question.length; i++)
{
    question[i].id = "question_" + (i+1)
    var answer_area = question[i].querySelectorAll(".answers_area")[0];
    answer_area.id = "answer_" + (i+1);
    var answer = answer_area.children;
    for(var j = 0; j< answer.length; j++)
    {
        answer[j].id = answer[j].classList[0] + "_" + (i+1)
    }
}