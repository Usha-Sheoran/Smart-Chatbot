 function sendMessage() {
    var input = document.getElementById("userInput").value;
    var chatBox = document.getElementById("chatBox");

    // Show user message
    var userDiv = document.createElement("div");
    userDiv.className = "msg user";
    userDiv.innerText = input;
    chatBox.appendChild(userDiv);

    var reply = "";
    input = input.toLowerCase().trim();

   if (input === "hello" ||input === "hi" ||input === "hlo" ||input === "hii") {
      reply = "Hello! How can I help you?";
    } 
    else if (input === "aap kon ho") {
      reply = "Main ek Chatbot hu Aapki help k liye yaha hu";
     }
      else if (input === "aap kya kr sakte hai") {
      reply = "Aap jo kaam doge m aapki help Kruga ";
    }
     else if (input === "aapko kya pasand hai") {
      reply = " Mujhe wo log pasand h jo Ham jaise chatbot ya chatgbt bnate hai.";
    }
    
    else if (input === "aapka naam") {
      reply = "Mera nam Chatbot hai or aapko naam.";
     }
      else if (input === "mera naam usha hai") {
      reply = "Usha naam bhot acha hai Aapse Milkar acha lga Usha,Aapka din acha ho .";
    } 
    else if (input === "hindi bol sakte ho kya " ) {
      reply = "Haan, main Hindi bhi bol sakta hoon .";
    }
    else if (input === "media query kya hai") {
      reply = "Media Query ek CSS technique hai jo responsive design banane ke liye use hoti hai. Ye screen size ke hisaab se styles change karti hai.";
    }
    else if (input === "node.js kya hai" || input === "nodejs kya hai") {
      reply = "Node.js ek JavaScript runtime hai jo browser ke bahar JavaScript chalata hai. Iska use server-side programming me hota hai.";
    }
    else if (input === "jquery kya hai") {
      reply = "jQuery ek JavaScript library hai jo HTML handle karna, events, animations aur AJAX ka kaam asaan bana deti hai.";
    }
    else if (input === "bootstrap kya hai") {
      reply = "Bootstrap ek CSS framework hai jisme ready-made classes aur components hote hain jisse responsive website jaldi ban jati hai.";
    }
    else if (input === "postgresql kya hai") {
      reply = "PostgreSQL ek open-source relational database system hai jo data ko store aur manage karne ke liye SQL language use karta hai.";
    }

   
    else if (input === "what is media query") {
      reply = "Media Query is a CSS technique used to make responsive designs. It applies different styles based on screen size or device type.";
    }
    else if (input === "what is node.js" || input === "what is nodejs") {
      reply = "Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser, mainly used for backend development.";
    }
    else if (input === "what is jquery") {
      reply = "jQuery is a JavaScript library that makes it easier to handle HTML, events, animations, and AJAX with shorter code.";
    }
    else if (input === "best advice for developer") {
      reply = "Best advice to web developer is that you just Consistency for your work and Practice daily coding And you just need to foucs learning";
    }
    else if (input === "what is bootstrap") {
      reply = "Bootstrap is a CSS framework that helps in building responsive and modern websites using pre-built classes and components.";
    }
    else if (input === "what is postgresql") {
      reply = "PostgreSQL is a powerful open-source relational database system that uses SQL to store and manage structured data.";
    }

    else if (input === "how are you") {
      reply = "I'm a bot, but I'm doing great! And How about you";
     }
      else if (input === "who are you") {
      reply = "I'm a bot,i am here to Assist you. ";
    }
     else if (input === "what is your name") {
      reply = "My name is ChatBot And your name.";
    }
     else if (input === "my name is usha sheoran") {
      reply = "Usha is a Nice Name. Nice to meet you Usha, have a good day .";
     }
      else if (input === "who created you") {
      reply = "I was created by Usha Sheoran.";
    }
     else if (input === "do you speak hindi" ) {
      reply = "Haan, main Hindi bhi bol sakta hoon.";
    }
     else if (input === "what is html") {
      reply = "HTML stands for HyperText Markup Language.";
    } 
    else if (input === "what is css") {
      reply = "CSS stands for Cascading Style Sheets.";
    }
     else if (input === "what is java script") {
      reply = "JavaScript is a scripting language for web development";
    } 
    else if (input === "what is full stack developer") {
      reply="A Full Stack Developer is a programmer who works on both the front-end (user interface) and back-end (server, database) of a website or application.";
    }
     else if (input === "what is your purpose") {
      reply = "I am here to answer your questions.";
    } 
    else if (input === "coding dificult hai kya kre") {
      reply = "I completely understand Usha As a beginner coding is difficult but agar tum consistency se code krego to coding tume asan lgegi you just practice coding daily.  .";
    }
     else if (input === "kya haal chal") {
      reply = "mera to haal chal badiya tumhra thik h kya.";
    } 
    else if (input === "where do you live") {
      reply = "I live inside your browser!";
    }
     else if (input === "developer kya kaam krta hai") {
      reply = "Web Developer website bnate hai jo user Friendly hoti hai ";
    }
     else if (input === "what can you do") {
      reply = "I can chat and answer simple questions.";
    }
     else if (input === "are you real") {
      reply = "I'm just code, not a human!";
    }
     else if (input === "aapko kisne bnaya") {
      reply = "Mujhe Usha Sheoran ne Bnaya hai!";
    }
     else if (input === "kaise ho") {
      reply = "Main Badiya aap btao kaise ho";
    } 
    else if (input === "what is your favorite color") {
      reply = "I like green, it's peaceful!";
    }
     else if (input === "can you help me") {
      reply = "Yes, I'll try my best!";
    } 
    else if (input === "bye") {
      reply = "Goodbye! Take care.";
    } 
    else if (input === "thank you") {
      reply = "You're welcome!";
    }
     else {
      reply = "Sorry, I don't understand that. Ask other Question please?";
    }

    // Show bot reply
    var botDiv = document.createElement("div");
    botDiv.className = "msg bot";
    botDiv.innerText = reply;
    chatBox.appendChild(botDiv);

    document.getElementById("userInput").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }