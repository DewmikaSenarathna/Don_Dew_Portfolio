function toggleDropdown() {
  var dropdown = document.getElementById("dropdown");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

(function () {
  const words = [
    { text: "Ignite", color: "#FF2400" },
    { text: "Purpose,", color: "white" },
    { text: "Elevate", color: "#FF2400" },
    { text: "Passion,", color: "white" },
    { text: "Shape", color: "#FF2400" },
    { text: "the", color: "white" },
    { text: "Future", color: "white" }
  ];

  const typingSpeed = 100;
  const el = document.getElementById("text-animation");
  let wordIndex = 0;
  let charIndex = 0;

  function typeWord() {
    if (wordIndex >= words.length) return;

    const current = words[wordIndex];
    const spanId = "word_" + wordIndex;

    if (!document.getElementById(spanId)) {
      el.innerHTML += `<span id="${spanId}" style="color:${current.color};"></span> `;
    }

    const span = document.getElementById(spanId);

    if (charIndex < current.text.length) {
      span.innerHTML += current.text.charAt(charIndex);
      charIndex++;
      setTimeout(typeWord, typingSpeed);
    } else {
      wordIndex++;
      charIndex = 0;
      setTimeout(typeWord, typingSpeed);
    }
  }

  typeWord();
})();