// Make sure this file name is EXACTLY: script.js

document.addEventListener("DOMContentLoaded", function () {
  const photoElement = document.getElementById("photo");
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const responseText = document.getElementById("response-text");
  const mainText = document.getElementById("main-text");
  const subText = document.getElementById("sub-text");
  const questionText = document.getElementById("question-text");

  // Check that elements exist (debug safety)
  if (!photoElement || !yesBtn || !noBtn) {
    console.error("One or more elements not found. Check your HTML IDs.");
    return;
  }

  // YES button
  yesBtn.addEventListener("click", function () {
    mainText.textContent = "You said yes, Alondra!!! 🌸💖";
    subText.textContent = "My love for you blooms stronger every day — just like lilies.";
    questionText.textContent = "Happy Valentine’s Day, my beautiful lily 🌸";
    responseText.textContent = "I can’t wait to hold you again and give you real flowers 😘💐";

    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  });

  // NO button runs away 😏
  noBtn.addEventListener("mouseover", function () {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  noBtn.addEventListener("click", function () {
    responseText.textContent = "Nice try 😏 You’re my Valentine, lily lover 💖🌸";
  });
});

