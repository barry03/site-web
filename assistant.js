async function askGPT() {
    const question = document.getElementById("ai-question").value.trim();
    const resultDiv = document.getElementById("ai-answer");
  
    if (!question) {
      resultDiv.innerHTML = "Veuillez entrer une question 🤔";
      return;
    }
  
    resultDiv.innerHTML = "Chargement de la réponse...⏳";
  
    try {
        const response = await fetch("https://portfolio-wla3.onrender.com/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          question: question
        })
      });
  
      const data = await response.json();
      const result = data.answer;
      resultDiv.innerHTML = marked.parse(result);
      // Appliquer coloration syntaxique aux blocs de code
      document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });

    } catch (error) {
      console.error(error);
      resultDiv.innerHTML = "Erreur lors de la requête. Réessaie plus tard 😥";
    }
}
  