let btn = document.getElementsByClassName("btn");


const fetchData = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json()
    console.log(data);
    const {slip} = data
    document.getElementById("adviceid").innerText = slip.id
    document.getElementById("advice-text").innerText = slip.advice
    
};

/*function button()  { 
    button.addEventListener('click',fetchData);
   
};
button()*/




