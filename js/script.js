// this is my random color generator code here. 
function randomclr() {
  var a = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var c = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + a + "," + b + "," + c + ")";

  document.body.style.background = bgColor;
  }



/*** 
 these are the first steps of adding var quotes to my .js file
***/

var quotes = [ 
  {
    quote: " Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win. " , 
    source: "Sun Tzu, The Art of War",  
    citation: " The Art of War ",
    year: " 500 "
  },
  {
    quote: " Victory usually goes to the army who has better trained officers and men. " , 
    source: "Sun Tzu, The Art of War , Year - 500 B.C.", 
    citation: " The Art of War ",
    year: " 500 B.C. "
  },
  {
    quote: " You may not control all the events that happen to you, but you can decide not to be reduced by them. " ,
    source: "Maya Angelo",   
    tag: " Inspirational " 
  },
  {
    quote: " You may not control all the events that happen to you, but you can decide not to be reduced by them. " ,
    source: "Maya Angelo", 
    tag: " African American Women "
  },
  {
    quote: " Your past does not equal your future. " ,
    source: "Tony Robbins",
    tag: " Motivational "
  }
  

];
 
console.log ()


/***
  this part shows the generation of the random quotes.
***/

function getRandomQuote ()
{   
  var randomNumber = Math.floor(Math.random()*quotes.length);
      
  return quotes[randomNumber];
} 
function color() 
{
 
  
} 

    



/***
  this part prints and generates the random quotes with the if statment that is needed.
***/

    
function printQuote ()
 {
  var htmlString = ""; 
  var randomQuote = getRandomQuote(quotes); 
  htmlString +=  "<p class='quote'>" + randomQuote.quote + "</p>";
  htmlString += "<p class='source'>" + randomQuote.source;
   if (randomQuote.citation) {
  htmlString += "<span class='citation'>" + randomQuote.citation + "</span>";
   } 
    if (randomQuote.year) {
  htmlString += "<span class='year'>" +  randomQuote.year + "</span>";
   }  if (randomQuote.tag) {
   htmlString += "<span class='tag'>" + randomQuote.tag + "</span>";
   }
  htmlString += "</p>";
  document.getElementById('quote-box').innerHTML = htmlString;
  randomclr(); 
}
   

   
     
  
printQuote();
setInterval(printQuote, 20000);


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
