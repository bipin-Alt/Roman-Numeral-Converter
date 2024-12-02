//Selecting the covert button, form and output container//
const conveterBtn = document.getElementById('convert-btn');
const form = document.getElementById('form');
const outputContainer = document.getElementById('output');

//Relation between base 10 number stystem and Roman numerals and converter machine//
const toRoman = (number) =>{
    const numberSymbol =[
        {
          value : 1000,
          symbol:"M",
        },
        {
          value:900,
          symbol:"CM",
        },
        {
          value : 500,
          symbol:"D",
        },
        {
          value :400,
          symbol:"CD",
        },
        {
          value:100,
          symbol:"C",
        },
        {
          value:90,
          symbol:"XC",
        },
        {
          value: 50,
          symbol:"L",
        },
        {
          value:40,
          symbol:"XL",
        },
        {
          value :10,
          symbol:"X",
        },
        {
          value:9,
          symbol:"IX",
        },
        {
          value: 5,
          symbol:"V",
        },
        {
          value:4,
          symbol:"IV",
        },
        {
          value:1,
          symbol:"I"
        }
      ];
 
 let result ='';
 for(let{value, symbol} of numberSymbol){
    while(number >= value){
      result+=symbol;
      number-=value;
    }
 }
 return result;
}

//Input validation//
const isInputValid = (text, num) =>{
   let errorMsg ='';
   if(!text || text.match(/[e.]/g)){
     errorMsg = 'Please Input a valid number.';
   }else if(num <=0){
     errorMsg = 'Please Input a positive number greater than Zero.';
   }else if(num > 3999){
     errorMsg = 'Please Input a number less than or equal to 3999.';
   }else{
    //if no error is occoured//
    return true;
   };
   outputContainer.innerText = errorMsg;
   outputContainer.classList.add('alert');
   return false;
};
//function cleaning up the output//
const cleanOutput = () =>{
    outputContainer.innerText = '';
    outputContainer.classList.remove('alert');
}
//form submission//

form.addEventListener('submit', (e) => {
    e.preventDefault();
    display();
});

//convert Button functionality //

conveterBtn.addEventListener('click', () => {
    display();
});
//Displaying the results and params conversions //
const display = () =>{
    const text = document.getElementById('number').value;
    const num = parseInt(text, 10);
    outputContainer.classList.remove('hidden');
    cleanOutput();
    if(isInputValid(text, num)){
     outputContainer.innerText = toRoman(num);
    };
}

