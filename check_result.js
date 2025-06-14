var correct_answer = document.getElementsByClassName("correct")
var user_answer = new Array(221)
var answer_area = document.getElementsByClassName("answers_area");
var question_number = document.getElementsByClassName("link_question")
for(var i = 0; i<answer_area.length; i++)
{
    var option = answer_area[i].children
    for(var j = 0; j<option.length; j++)
    {
        option[j].addEventListener("click", function(){
            var id = this.id.split("_")[2];
            if(user_answer[id-1]!=null) return;
            user_answer[id-1] = this.id;
            this.style.background = "#EEAAAA"
            correct_answer[id-1].style.background = "#AAEEAA"
            question_number[id-1].style.background = this.style.background;
            localStorage.setItem("user_answer", JSON.stringify(user_answer));
        })
    }
}
window.onload = function()
{
    user_answer = JSON.parse(localStorage.getItem("user_answer"))||[];
    let has_answer = user_answer.some(answer=>answer!=null);
    if(has_answer)
    {
        let cf = confirm("Bạn có muốn tiếp tục làm bài không?");
        if(cf)
        {
            for(var i = 0; i< user_answer.length;i++)
            {
                if(user_answer[i]!=null)
                {
                    document.getElementById(user_answer[i]).style.background= "#EEAAAA";
                    correct_answer[i].style.background = "#AAEEAA";
                    question_number[i].style.background = document.getElementById(user_answer[i]).style.background
                }
            }
        }
        else
        {
            user_answer = new Array(221).fill(null);
            localStorage.setItem("user_answer", JSON.stringify(user_answer));
        }
    }
}
