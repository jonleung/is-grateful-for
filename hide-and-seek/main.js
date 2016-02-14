var WELCOME = "Welcome to the Castro House Scavenger Hunt! Here is your first clue! Send the codes you find back to me and I'll give you the next clue!"

var CLUES = [
  "Baby, when you put things inside me\n" +
  "I make them rise\n" +
  "You'll want to taste it",

  "Baby, your turn me on\n" +
  "You make electricity course through my veins.\n" +
  "Touch me.\n" +
  "Flick me.\n" +
  "Let's spend all night together in the dark.\n",

  "Although I was just born\n" +
  "I still see lots of porn\n" +
  "Everyone asks me for questions\n" +
  "I see all the connections\n" +
  "when they leach\n" +
  "I screech\n" +
  "If I die\n" +
  "You're all fucked"
]

var PASSPHRASE_1 = "KVWN"
var PASSPHRASE_2 = "SCCO"



Twilio.listenForMessages(function (msg) {
    var phone = msg.from;

    if (msg.body === PASSPHRASE_1) {
      Twilio.sendMessage(msg.from, CLUES[1]);
    }
    else if (msg.body === PASSPHRASE_2) {
      Twilio.sendMessage(msg.from, CLUES[2]);
    }
    else {
      Twilio.sendMessage(msg.from, WELCOME + "\n\n" + CLUES[0])
    }
});
