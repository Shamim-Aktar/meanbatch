   
//var howManyTimes=500;
   function coinFlip() {
          return(Math.random() < 0.3) ? 'Heads' : 'Tails'; //ofc 0.3 is 30% (3/10)
    }

 let howManyTimes=1000;

 let countHeads=0; 
 for (let i=0; i<howManyTimes;i++){
     if (coinFlip()==='Heads'){
       countHeads++;
     }
 }
 //alert("Heads appear "+(countHeads/howManyTimes)*100+"% of the time");
 console.log("Heads appear "+(countHeads/howManyTimes)*100+"% of the time")
 document.querySelector('p').innerHTML="Heads appear "+(countHeads/howManyTimes)*100+"% of the time"