document.getElementById("MadLib-btn").addEventListener("click", showMadLib);

function showMadLib() {
  // input
  let member = document.getElementById("top1-input").value;
  let pluralnoun = document.getElementById("top2-input").value;
  let action = document.getElementById("top3-input").value;

  // processing
  let output = `My ${member} loves to eat ${pluralnoun} and then ${action}.`;

  // output
  document.getElementById("MadLib-output").innerHTML = output;
}
