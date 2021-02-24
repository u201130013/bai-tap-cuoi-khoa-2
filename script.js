var pos = 0, test,  question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
  {
      question: "việt nam có bao nhieu dân tộc?",
      a: "64",
      b: "54",
      c: "45",
      answer: "B"
    },
  {
      question: "đảng cộng sản việt nam thành lập năm nào?",
      a: "22/3/1930",
      b: "3/2/1931",
      c: "3/2/1930",
      answer: "C"
    },
  {
      question: "giải phóng việt nam thống nhất đất nước là ngày tháng năm nào?",
      a: "30/4/1975",
      b: "30/4/1954",
      c: "30/5/1975",
      answer: "A"
    },
  {
      question: "ngày sinh của chủ tịch HỒ CHÍ MINH ngày tháng năm nào?",
      a: "19/6/1890",
      b: "19/4/1890",
      c: "19/5/1890",
      answer: "C"
    },
    {
        question: "ngày sinh của ĐẠI TƯỚNG VÕ NGUYÊN GIÁP ngày tháng năm nào?",
        a: "25/8/1911",
        b: "19/4/1911",
        c: "25/8/1912",
        answer: "a"
    },
    {
        question: "bộ trưởng bộ công an việt nam hiện nay là ai?",
        a: "NGÔ XUÂN LỊCH",
        b: "TÔ LÂM",
        c: "ĐINH HẢI",
        answer: "B"
    },
    {
        uestion: "bộ trưởng bộ quốc QĐ việt nam hiện nay là ai?",
        a: "NGÔ XUÂN LỊCH",
        b: "TÔ LÂM",
        c: "ĐINH HẢI",
        answer: "A"   
    }
  ];

function get(x){
  return document.getElementById(x);
}
function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test").innerHTML = "Test completed";
    pos = 0;
    correct = 0;
    return false;
  }
  get("test").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  test.innerHTML = "<h3>"+question+"</h3>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[pos].answer){
    correct++;
  }
  pos++;
  renderQuestion();
}
window.addEventListener("load", renderQuestion);