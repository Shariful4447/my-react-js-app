

var btns = document.getElementsByClassName('buttons');
for (var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click',function () {
		const buttonValue=document.getElementsByClassName('button').innerText;
        const newButtonValue=parseInt(buttonValue);
        
        let display=document.getElementById('display').innerText;
        let newDisplay=parseInt(display);
        
        newDisplay=newButtonValue;
        document.getElementById('display').innerText=newDisplay;
        

	});
    
   
    

}


//     newButton=addEventListener('click', function(){
    
    
//         const buttonValue=document.getElementById('numberButton').innerText
//         const newButtonValue=parseInt(buttonValue);
        
//         let display=document.getElementById('display').innerText;
//         let newDisplay=parseInt(display);
        
//         newDisplay=newButtonValue;
//         document.getElementById('display').innerText=newDisplay;
//         // let display=parseInt(newDisplay); 
//         // display=newValue;
//         // document.getElementById('display').innerText=display;

    



// )}
