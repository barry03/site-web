const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/ask", async (req, res) => {
  const { question } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
            {
              role: "system",
              content: "Tu es un assistant expert en veille technologique. Donne des réponses détaillées, précises, et faciles à comprendre, même pour les étudiants."
            },
            { role: "user", content: question + " Donne une réponse complète avec exemples si possible." }
        ],
          
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Réponse OpenAI:", response.data);
    res.json({ answer: response.data.choices[0].message.content });
  } catch (error) {
    console.error(error.response?.data || error.message);
    console.log("Question reçue :", question);
    console.log("Clé API:", process.env.OPENAI_API_KEY ? "✔️ présente" : "❌ absente");

    res.status(500).json({ error: "Erreur lors de l’appel à OpenAI." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});