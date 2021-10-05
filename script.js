fetch("https://icanhazdadjoke.com/slack")
     .then(data => data.json())
     .then(quotedata =>{
         const quotetext = quotedata.attachments[0].text;
         const quoteElement = document.getElementById('quoteElement');

         quoteElement.innerHTML = quotetext;
     })
     //https://icanhazdadjoke.com/slack