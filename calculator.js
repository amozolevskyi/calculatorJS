const valueObj = {
                values: [],
                instruction: null
};

let numStr = '';

function setNumStr(){
    valueObj.values.push(numStr);
    console.log('number: ' + numStr);
    numStr = '';
}

function clearObj() {
    valueObj.values = [];
    valueObj.instruction = null;
    console.log(JSON.stringify(valueObj));
}

function clearInp(){
    document.getElementById('inp').value = "0";
    clearObj();
}

function numClick(button) {
    let butVal = button.value;
    let defVal = document.getElementById('inp').value;

    if(defVal === "0"){
        document.getElementById('inp').value = butVal;
        numStr += butVal;
    } else {
        document.getElementById('inp').value += butVal;
        numStr += butVal;
    }
}

function funClick(button) {
    setNumStr();
    let instruction = button.value;
    document.getElementById('inp').value += instruction;
    valueObj.instruction = instruction;
    console.log(JSON.stringify(valueObj));
}

function getResClick(button) {
    setNumStr();
    console.log(JSON.stringify(valueObj));

    let a = Number(valueObj.values[0]);
    let b = Number(valueObj.values[1]);

    switch(valueObj.instruction) {
        case '+':
            document.getElementById('inp').value = a + b;
            break;
            
        case '-':
            document.getElementById('inp').value = a - b;
            break;

        case '*':
            document.getElementById('inp').value = a * b;
            break;
        
        case '/':
            document.getElementById('inp').value = a / b;
            break;
    }
}
