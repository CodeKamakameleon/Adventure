/**
 * JS API Function to use are:
 *
 * alert(); - standard text for read-only
 * let answer = confirm(); - yes or no questions
 * let otherAnswer = prompt(); - open-ended questions
 *
 */
let playerName;
let playerAge;
let wantsToPlay;
let dragonType;
let nightFury;

const end = () => {
  alert(
    `As the leader of the Velaris arial fleet, I, Tig of Velaris, declare you, ${playerName} an official member of our fleet, to serve and protect Velaris for as long as you and your dragon fly. Congratulations, dragon rider. Welcome to the team.`
  );
};

const finalTrial = () => {
  alert(
    "Now that you and your dragon have flown, carried, and built together, you're ready to command fire from your dragon."
  );
  fireCommand = prompt(
    "Now, there's a reason why this is your final trial. To get a dragon to spit fire is easy enough, but to aim correctly... now that's the challenge. You must type the command and the object your aiming for in order to get your dragon to fire correctly. The command for fire is 'dracarus' and your target, this time around, is 'bush'. Now, type the correct command into the box and watch your dragon turn that bush to ash."
  );
  if (
    fireCommand.match(/dracarus bush|dracarusbush|Dracarus bush|Dracarus Bush/i)
  ) {
    alert(
      "Well would ya look at that! Nothing left but a smoking pile of ash. Very impressive, dragon rider."
    );
  }
  end();

  if (
    !fireCommand.match(
      /dracarus bush|dracarusbush|Dracarus bush|Dracarus Bush/i
    )
  ) {
    alert("Uh oh! Not quite. Try again");
    return fireCommand();
  }
};

const finishMaterials = () => {
  alert(
    "Good work, dragonrider! You scared away those pesky beasts. Now let's finish collecting these materials so the town folk can start rebuilding."
  );
  alert(
    "It's time to give our dragons some food and water before they start gnawing on something they shouldn't."
  );
  alert(
    "Perfect! Now that the dragons are fed, let's return to the village to help the townfolk with rebuilding."
  );

  building = prompt("Shall we help rebuild the eating house or the theater?");
  if (building.match(/theater|Theater|theatre|Theatre/i)) {
    alert(
      "Ah, a fan of the theater, I see! I can tell ya this village wouldn't be the same without it."
    );
  }
  if (building.match(/eatinghouse|eating house/i)) {
    alert(
      "Ah, what would a village be without an eating house, eh? I see someone has their priorities straight. 😉"
    );
  }
  alert(
    "Great job, dragon rider! You've put in a ton of work so far, and the village is all the better for it. Let's move on to your third and final trial."
  );
  finalTrial();
};

const rebuilding = () => {
  alert(
    "Ah, Velaris already looks better without the rubble. Now we can start rebuilding."
  );
  materials = confirm(
    "Now the real work begins, but before we begin rebuilding, we need to go find supplies in the Night Forest. Keep your eyes peeled for building materials like logs, rocks, and clay. But beware of the Orange-eyed beast. They'll sneak attack if you don't spot and expose them before they pounce!"
  );

  if (materials) {
    alert(
      "Oh no! I spot two orange-eyed beasts! Quick, click 'ok' to expose them before they pounce!"
    );
    finishMaterials();
  }
};

const dragonSecured = () => {
  alert(
    "Now that we've secured you a dragon, let's get to work. The city of Velaris, while once thriving, has been ravaged by an attack by the vikings from the east mountains. Thankfully, most were out enjoying the good weather, but many houses and buildings were destroyed. Let's start by helping the townfolk pick up the rubble before we begin to rebuild."
  );
  rubble = confirm("What do you say? Will you help us?");
  if (rubble) {
    alert(
      "That's wonderful! The people of Velaris and I will never forget your service."
    );
    rebuilding();
  }
};

const continueTheGame = () => {
  alert("Let's go to Velaris!");
  dragonType = confirm("Would you like to explore the hidden city?");

  if (dragonType) {
    alert(
      "Great! By the way, my name is Tig! I'll be your guide to the City of Starlight! But first, let's find you a dragon to ride on the way. It is tradition in this village between dragon and rider. If you and your dragon successfully complete three tasks together, you will be invited to be a part Velaris' official team of dragon riders. 🐲"
    );
  }

  selectedDragon = prompt(
    "Would you like to ride the famous Night Fury or a Razorwhip?"
  );

  if (selectedDragon.match(/nightFury|night fury|/i)) {
    alert("Great choice! Let's fly, dragonrider!");
    return dragonSecured();
  }

  if (selectedDragon.match(/razorwhip|Razorwhip|/i)) {
    alert("Great choice! Let's fly, dragonrider!");
    return dragonSecured();
  }
};

const startAdventure = () => {
  alert("Let's go on an adventure!");
  playerName = prompt("What's your name?");
  alert(`Hello ${playerName}, it's nice to meet you.`);
  playerAge = prompt("Do you mind if I ask how old you are?");

  if (playerAge < 18) {
    return alert("Sorry but you must be at least 18 to play this game.");
  }

  wantsToPlay = confirm("Do you want to play a game with me?");

  if (wantsToPlay) {
    alert("YAY! 🎉");
    continueTheGame();
  }
};

const btn = document.querySelector("button");
btn.addEventListener("click", startAdventure, false);
