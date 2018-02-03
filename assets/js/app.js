//  setting all required variables
//  variables and events are placed alphbetically

const alhumdulillah = document.getElementById("alhumdulillah");
const allah_u_akbar = document.getElementById("allah_hu_akbar");
const changeMode = document.getElementById("changeMode");
const message = document.getElementById('message');
const selection = document.getElementById('selection');
const subhan_allah = document.getElementById("subhan_allah");
const tasbeeh = {
    subhan_allah: 0,
    alhumdulillah: 0,
    allah_hu_akbar: 0,
}
const tasbeehCount = {
    normal1: 33,
    normal2: 34,
    custom: 0
}

// attaching events to objects.
alhumdulillah.addEventListener('click',increment);
allah_hu_akbar.addEventListener('click',increment);
changeMode.addEventListener('change', setRange);
subhan_allah.addEventListener('click',increment);

/**
 * param: no param
 * increment the counter for each adhkar.
 * limit depends of the selection condition (default: 33/33/34) and (custom: user set value)
 */
function increment(){
    if(changeMode.value === 'default'){
    (this.id === 'subhan_allah' || this.id === 'alhumdulillah')
        ?(tasbeeh[this.id] >= tasbeehCount.normal1) 
            ? tasbeeh[this.id] = 0: tasbeeh[this.id]++
        : (tasbeeh[this.id] >= tasbeehCount.normal2)
            ? tasbeeh[this.id] = 0: tasbeeh[this.id]++;
    }
    else{
        (tasbeeh[this.id] >= tasbeehCount.custom)
        ? tasbeeh[this.id] = 0: tasbeeh[this.id]++;
    }
    document.getElementById(this.id + "_counter").innerHTML = tasbeeh[this.id];
}

/**
 * call for the onchange event of the select box. 
 * Custom option adds a textbox and a button to take user input and set the range respectively.
 * Default option sets the variable to default and remove the textbox and button.
 */
function setRange(){
         if(this.value == 'custom'){  
            const textBox = document.createElement('input');
            textBox.setAttribute('type', 'text');
            textBox.setAttribute('id','customValue');
            textBox.setAttribute('class', 'textBox');
            textBox.setAttribute('placeholder','Enter Range');
            const changeButton = document.createElement('input');
            changeButton.setAttribute('type', 'submit');
            changeButton.setAttribute('id', 'setRangeButton');
            changeButton.setAttribute('value', 'Set Range');
            changeButton.setAttribute('class','rangeButton');
            changeButton.addEventListener('click', () =>{
                const rangeValue = document.getElementById('customValue');
                if((rangeValue.value == 0 || rangeValue.value == '')){
                    alert('You Should Set Some Range First/ Provide Numeric Value')
                    message.innerHTML = 'Custom Range Not Set Yet';
                }
                else{
                    tasbeehCount.custom = rangeValue.value;
                    message.innerHTML = 'Custom Range Set To ' + tasbeehCount.custom;
                    setToZero();
                }    
                
        });
            selection.appendChild(textBox);
            selection.appendChild(changeButton);
         }
         else{
             if(document.getElementById('customValue') && document.getElementById('setRangeButton')){
                 selection.removeChild(document.getElementById('customValue'));
                 selection.removeChild(document.getElementById('setRangeButton'));
                 message.innerHTML = '';
                 setToZero()
             }
         }
}
/**
 * set all the counter inner text to zero.
 */
function setToZero(){
    document.getElementById("subhan_allah_counter").innerHTML = 0;
    document.getElementById("alhumdulillah_counter").innerHTML = 0;
    document.getElementById("allah_hu_akbar_counter").innerHTML = 0;

}

