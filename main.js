let outputVis = document.getElementById('output');
let kgOutput = document.getElementById('kg');
let lbOutput = document.getElementById('lb');
let gmsOutput = document.getElementById('gms');
let ocOutput = document.getElementById('oc');
let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');
let output3 = document.getElementById('output3');
let inputContainer = document.getElementById('inputW');
let outputQuantityDisplay1 = document.getElementById('out1');
let outputQuantityDisplay2 = document.getElementById('out2');
let outputQuantityDisplay3 = document.getElementById('out3');
outputVis.style.visibility = 'hidden';
let bodyWhole = document.getElementById('body');
function lb(){
    bodyWhole.style.background = 'linear-gradient(#3f9e65,#006b60)';
    outputVis.style.visibility = 'hidden';
    kgOutput.style.color = '#000';
    gmsOutput.style.color = '#000';
    ocOutput.style.color = '#000';
    lbOutput.style.color = 'rgb(255, 145, 0)';
    kgOutput.style.fontSize = '17.5px';
    gmsOutput.style.fontSize = '17.5px';
    ocOutput.style.fontSize = '17.5px';
    lbOutput.style.fontSize = '20px';
    inputContainer.value = "";
    inputContainer.placeholder = "Enter weight in pounds...";
    inputContainer.addEventListener('input',function(e){
        let lbs = e.target.value;
        outputVis.style.visibility = 'visible';
        output1.innerHTML = lbs/0.0022046;
        output2.innerHTML = lbs/2.2046;
        output3.innerHTML = lbs*16;
    })
}
function kg(){
    bodyWhole.style.background = 'linear-gradient(#9e653f,#6b1e00)';
    outputVis.style.visibility = 'hidden';
    lbOutput.style.color = '#000';
    gmsOutput.style.color = '#000';
    ocOutput.style.color = '#000';
    kgOutput.style.color = 'rgb(255, 0, 85)';
    lbOutput.style.fontSize = '17.5px';
    gmsOutput.style.fontSize = '17.5px';
    ocOutput.style.fontSize = '17.5px';
    kgOutput.style.fontSize = '20px';
    inputContainer.value = "";
    inputContainer.placeholder = "Enter weight in kilos...";
    inputContainer.addEventListener('input',function(e){
        let kg = e.target.value;
        outputQuantityDisplay1.innerHTML = "Grams:";
        outputQuantityDisplay2.innerHTML = "Pounds:";
        outputQuantityDisplay3.innerHTML = "Ounces:";
        outputVis.style.visibility = 'visible';
        output1.innerHTML = kg*1000;
        output2.innerHTML = kg*2.2046;
        output3.innerHTML = kg*35.27396195;
    })
}
function gms(){
    bodyWhole.style.background = 'linear-gradient(#9e68d1,#37006b)';
    outputVis.style.visibility = 'hidden';
    kgOutput.style.color = '#000';
    lbOutput.style.color = '#000';
    ocOutput.style.color = '#000';
    gmsOutput.style.color = 'rgb(0, 255, 38)';
    kgOutput.style.fontSize = '17.5px';
    lbOutput.style.fontSize = '17.5px';
    ocOutput.style.fontSize = '17.5px';
    gmsOutput.style.fontSize = '20px';
    inputContainer.value = "";
    inputContainer.placeholder = "Enter weight in grams...";
    inputContainer.addEventListener('input',function(e){
        let gm = e.target.value;
        outputQuantityDisplay1.innerHTML = "Kilos:";
        outputQuantityDisplay2.innerHTML = "Pounds:";
        outputQuantityDisplay3.innerHTML = "Ounces:";
        outputVis.style.visibility = 'visible';
        output1.innerHTML = gm/1000;
        output2.innerHTML = gm*0.00220462;
        output3.innerHTML = gm*0.03527396195 ;
    })
}
function oc(){
    bodyWhole.style.background = 'linear-gradient(#c9626e,#5b000a)';
    outputVis.style.visibility = 'hidden';
    kgOutput.style.color = '#000';
    kgOutput.style.color = '#000';
    gmsOutput.style.color = '#000';
    lbOutput.style.color = '#000';
    ocOutput.style.color = 'rgb(30, 0, 255)';
    kgOutput.style.fontSize = '17.5px';
    gmsOutput.style.fontSize = '17.5px';
    lbOutput.style.fontSize = '17.5px';
    ocOutput.style.fontSize = '20px';
    inputContainer.value = "";
    inputContainer.placeholder = "Enter weight in ounces...";
    inputContainer.addEventListener('input',function(e){
        let oc = e.target.value;
        outputQuantityDisplay1.innerHTML = "Grams:";
        outputQuantityDisplay2.innerHTML = "Pounds:";
        outputQuantityDisplay3.innerHTML = "kilos:";
        outputVis.style.visibility = 'visible';
        output1.innerHTML = oc*28.3495;
        output2.innerHTML = oc/16;
        output3.innerHTML = oc/35.274
        ;
    })
}