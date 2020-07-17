var english = [
    ["John ate an apple before afternoon", "before afternoon John ate an apple", "John before afternoon ate an apple"],
    ["some students like to study in the night", "at night some students like to study"],
    ["John and Mary went to church", "Mary and John went to church"],
    ["John went to church after eating", "after eating John went to church", "John after eating went to church"],
    ["did he go to market", "he did go to market"],
    ["the woman who called my sister sells cosmetics", "the woman who sells cosmetics called my sister", "my sister who sells cosmetics called the woman", "my sister who called the woman sells cosmetics"],
    ["John goes to the library and studies", "John studies and goes to the library"],
    ["John ate an apple so did she", "she ate an apple so did John"],
    ["the teacher returned the book after she noticed the error", "the teacher noticed the error after she returned the book", "after the teacher returned the book she noticed the error", "after the teacher noticed the error she returned the book", "she returned the book after the teacher noticed the error", "she noticed the error after the teacher returned the book", "after she returned the book the teacher noticed the error", "after she noticed the error the teacher returned the book"],
    ["I told her that I bought a book yesterday", "I told her yesterday that I bought a book", "yesterday I told her that I bought a book", "I bought a book that I told her yesterday", "I bought a book yesterday that I told her", "yesterday I bought a book that I told her"]
]

var hindi = [
    ["राम और श्याम बाजार गयें", "राम और श्याम गयें बाजार", "बाजार गयें राम और श्याम", "गयें बाजार राम और श्याम"],
    ["राम सोया और श्याम भी", "श्याम सोया और राम भी", "सोया श्याम और राम भी", "सोया राम और श्याम भी"],
    ["मैंने उसे बताया कि राम सो रहा है", "मैंने उसे बताया कि सो रहा है राम", "उसे मैंने बताया कि राम सो रहा है", "उसे मैंने बताया कि सो रहा है राम", "मैंने बताया उसे कि राम सो रहा है", "मैंने बताया उसे कि सो रहा है राम", "उसे बताया मैंने कि राम सो रहा है", "उसे बताया मैंने कि सो रहा है राम", "बताया मैंने उसे कि राम सो रहा है", "बताया मैंने उसे कि सो रहा है राम", "बताया उसे मैंने कि राम सो रहा है", "बताया उसे मैंने कि सो रहा है राम"],
    ["राम खाकर सोया", "खाकर राम सोया", "राम सोया खाकर", "खाकर सोया राम", "सोया राम खाकर", "सोया खाकर राम"],
    ["बिल्लियों को मारकर कुत्ता सो गया", "मारकर बिल्लियों को कुत्ता सो गया", "बिल्लियों को मारकर सो गया कुत्ता", "मारकर बिल्लियों को सो गया कुत्ता", "कुत्ता सो गया बिल्लियों को मारकर", "कुत्ता सो गया मारकर बिल्लियों को", "सो गया कुत्ता बिल्लियों को मारकर", "सो गया कुत्ता मारकर बिल्लियों को"],
    ["एक लाल किताब वहाँ है", "एक लाल किताब है वहाँ", "वहाँ है एक लाल किताब", "है वहाँ एक लाल किताब"],
    ["एक बड़ी सी किताब वहाँ है", "एक बड़ी सी किताब है वहाँ", "बड़ी सी एक किताब वहाँ है", "बड़ी सी एक किताब है वहाँ", "वहाँ है एक बड़ी सी किताब", "वहाँ है बड़ी सी एक किताब", "है वहाँ एक बड़ी सी किताब", "है वहाँ बड़ी सी एक किताब"]
]


var senstore;
var wordstore;
var engSel = 0;
var hinSel = 0;
function englishSen() {
    engSel = 1;
    hinSel = 0;

    document.getElementById("sentence-info").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words <br>";
    document.getElementById("sentence-info2").innerHTML = "(<i>select the buttons in proper order</i>)";
    
    function englishBtn() {
        var fstChoice = english[Math.floor(Math.random() * 10)];
        senstore = fstChoice;
        var scndChoice = fstChoice[Math.floor(Math.random() * fstChoice.length)];
        wordstore = scndChoice.split(" ");

        var len = wordstore.length;
        var temp, index;
        while(len > 0) 
        {
            index = Math.floor(Math.random() * len);
            len--;
            temp = wordstore[len]
            wordstore[len] = wordstore[index];
            wordstore[index] = temp;
        }

        btnCreate();
        
    }
    englishBtn();
}


function hindiSen() {
    hinSel = 1;
    engSel = 0;

    document.getElementById("sentence-info").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words <br>";
    document.getElementById("sentence-info2").innerHTML = "(<i>select the buttons in proper order</i>)";

    function hindiBtn() {
        var fstChoice = hindi[Math.floor(Math.random() * 7)];
        senstore = fstChoice;
        var scndChoice = fstChoice[Math.floor(Math.random() * fstChoice.length)];
        wordstore = scndChoice.split(" ");

        var len = wordstore.length;
        var temp, index;
        while(len > 0) 
        {
            index = Math.floor(Math.random() * len);
            len--;
            temp = wordstore[len]
            wordstore[len] = wordstore[index];
            wordstore[index] = temp;
        }
        btnCreate();
        
    }
    hindiBtn();
    
}

function btnCreate() {
    document.getElementById("btn-display").innerHTML = "";
    document.getElementById("sentence-info3").innerHTML = "";
    document.getElementById("counting").innerHTML = "";
    document.getElementById("main-sentence").innerHTML = "";
    document.getElementById("re-form").style.visibility = "hidden";
    document.getElementById("correct-ness").style.visibility = "hidden";
    document.getElementById("result").innerHTML = "";
    document.getElementById("show-ans").style.visibility = "hidden";
    document.getElementById("show-ans").innerHTML = "Get Correct Sentence";
    document.getElementById("right-ans").innerHTML = "";
    var num = 0;
    for(var i = 0; i < wordstore.length; i++)
    {
        var btn = document.createElement('button');
        btn.innerHTML = wordstore[i];
        document.getElementById("btn-display").appendChild(btn);

        btn.addEventListener("click", function() {
            document.getElementById("sentence-info3").innerHTML = "<b>Formed Sentence</b> (<i>after selecting words</i>):";
            document.getElementById("main-sentence").innerHTML += this.innerHTML + " ";
            this.style.display = "none";
            num += 1;
            document.getElementById("counting").innerHTML = "<i>Total buttons clicked: " + num + "</i>";
            if(num == 1){
                document.getElementById("re-form").style.visibility = "visible";
            }
            if(num == wordstore.length) {
                document.getElementById("correct-ness").style.visibility = "visible";
            }      
        });

    }
    
}

function correctSen() {
    var main = document.getElementById("main-sentence").innerHTML;
    main = main.split(" ");
    main.pop();
    main = main.join(" ");
    if(engSel) {
        var flag = 0, x;
        for(var i = 0; i < senstore.length; i++) {
            x = main.localeCompare(senstore[i]);
            if(x == 0){
                flag = 1;
                break;
            }
        }
        if(flag) {
            document.getElementById("result").innerHTML = "Right Answer!!!";
            document.getElementById("result").style.color = "green";
        }
        else {
            document.getElementById("result").innerHTML = "Wrong Answer!!!";
            document.getElementById("result").style.color = "red";
            document.getElementById("show-ans").style.visibility = "visible";
        }
    }
    else {
        var flag = 0, x;
        for(var i = 0; i < senstore.length; i++) {
            x = main.localeCompare(senstore[i]);
            if(x == 0){
                flag = 1;
                break;
            }
        }
        if(flag) {
            document.getElementById("result").innerHTML = "Right Answer!!!";
            document.getElementById("result").style.color = "green";
        }
        else {
            document.getElementById("result").innerHTML = "Wrong Answer!!!";
            document.getElementById("result").style.color = "red";
            document.getElementById("show-ans").style.visibility = "visible";
        }
    }
}


function showAndHide() {
    var x = document.getElementById("show-ans").innerHTML;
    if(x == "Get Correct Sentence" || x == "Get Answers") {
        document.getElementById("show-ans").innerHTML = "Hide the correct Sentence";
        for (var i = 0; i < senstore.length; i++) {
            document.getElementById("right-ans").innerHTML += senstore[i] + "<br>";
        }
    }

    else {
        document.getElementById("show-ans").innerHTML = "Get Answers";
        document.getElementById("right-ans").innerHTML = "";
    }
}

