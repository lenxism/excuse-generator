const excuseButton = document.querySelector("#excuse-button");

const generateExcuse = () => {
  const who = [
    "The browser",
    "The Webflow editor",
    "A random plugin",
    "My internet connection",
  ];
  const action = [
    "misinterpreted",
    "glitched on",
    "conflicted with",
    "timed out on",
  ];
  const what = [
    "my responsive settings",
    "the custom code",
    "the CMS collection",
    "the animations",
    "the interactions",
    "the styles",
  ];
  const when = [
    "right before the demo",
    "during peak hours",
    "just as I hit publish",
    "while I was syncing",
    "when I least expected",
  ];

  const whoIndex = Math.floor(Math.random() * who.length);
  const actionIndex = Math.floor(Math.random() * action.length);
  const whatIndex = Math.floor(Math.random() * what.length);
  const whenIndex = Math.floor(Math.random() * when.length);

  return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
};

excuseButton.addEventListener("click", () => {
  document.querySelector("#excuse-message").innerHTML = generateExcuse();
});