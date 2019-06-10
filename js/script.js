/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

function randomc() {
  var a = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var c = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + a + "," + b + "," + c + ")";
// console.log(bgColor);

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
  htmlString += "<span class='year'>" + randomQuote.year + "</span>";
   }
   htmlString += "<span class='tag'>" + randomQuote.tag + "</span>";
  htmlString += "</p>";
  document.getElementById('quote-box').innerHTML = htmlString;
  randomc(); 
}
   

   
     
  
   // randomQuote.quote + randomQuote.source
 
 
  
  // <p class="quote">randomQuote.quote </p>
  // <p class="source">randomQuote.source
  // <span class="citation"></span>
  // <span class="year"></span></p>
//console.log (htmlString);
printQuote();
setInterval(printQuote, 20000);
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

//<p class="quote">Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</p>
//<p class="source">Patrick McKenzie<span class="citation">Twitter</span><span class="year">2016</span></p>