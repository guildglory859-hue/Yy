const form = document.getElementById("agentForm");
const input = document.getElementById("agentInput");
const chatLog = document.getElementById("chatLog");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const prompt = input.value.trim();
  if (!prompt) {
    return;
  }

  const userLine = document.createElement("p");
  userLine.innerHTML = `<strong>You:</strong> ${prompt}`;

  const aiLine = document.createElement("p");
  aiLine.innerHTML = `<strong>BBC AI:</strong> Working on: <em>${prompt}</em>. Project structure, UI, and deployment plan generated.`;

  chatLog.append(userLine, aiLine);
  chatLog.scrollTop = chatLog.scrollHeight;
  form.reset();
});
