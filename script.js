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
let heardOf;
let nightFury;

const finishMaterials = () => {
  alert(
    "Good work, dragonrider! You scared away those pesky beasts. Now let's finish collecting these materials so the town folk can start rebuilding."
  );
  peskyBeasts = confirm(
    "It's time to give our dragons some food and water before they start gnawing on something they shouldn't."
  );
  if (peskyBeasts) {
    return alert(
      "Perfect! Now that the dragons are fed, let's return to the village to help the townfolk with rebuilding."
    );
  }
};

const rebuilding = () => {
  alert(
    "Ah, Velaris already looks better without the rubble. Now we can start rebuilding."
  );
  materials = confirm(
    "Now the real work begins, but before we begin rebuilding, we need to go find supplies in the Night Forest. Keep your eyes peeled for building materials like logs, rocks, and clay. But beware of the Orange-eyed beast. They'll sneak attack if you don't spot and expose them before they pounce!"
  );

  if (materials) {
    return alert(
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
    return alert(
      "That's wonderful! The people of Velaris and I will never forget your service."
    );
    rebuilding();
  }
};

const continueTheGame = () => {
  alert("Let's go to Velaris!");
  heardOf = confirm("Would you like to explore the hidden city?");

  if (heardOf) {
    return alert(
      "Great! Next stop: The City of Starlight! ✨ But first, let's find you a dragon to ride on the way. 🐲"
    );
  }

  nightFury = prompt("Would you like to ride the famous Night Fury dragon?");

  if (nightFury) {
    return alert("Great choice! Let's fly, dragonrider!");
    dragonSecured();
  }

  if (!nightFury) {
    return prompt("How about the fierce Razorwhip?");
  }

  razorwhip = alert("Please pick a dragon to ride.");

  if (razorwhip) {
    return alert("Great choice! Let's fly, dragonrider!");
    dragonSecured();
  }

  if (!razorwhip) {
    return alert("Please pick a dragon to ride.");
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
btn.addEventListener("click", continueTheGame, false);
