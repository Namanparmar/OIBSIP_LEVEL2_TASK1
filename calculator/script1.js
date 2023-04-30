let input = document.getElementById('input');
buttons = document.querySelectorAll('button');
let inputvalue = "" ;
for (item of buttons){
	item.addEventListener('click',(e)=>{
		buttonText =e.target.innerText;
		console.log('Button text is ',buttonText);
		if(buttonText=='X'){
			buttonText='*';
			inputvalue += buttonText;
			input.value= inputvalue;
		}
		else if (buttonText =='='){
			input.value=eval(inputvalue);

		}
		else if (buttonText =='AC'){
			inputvalue="";
			input.value=inputvalue;
		
		}
		else 
	{
		inputvalue +=buttonText;
		input.value= inputvalue;}
	})
}