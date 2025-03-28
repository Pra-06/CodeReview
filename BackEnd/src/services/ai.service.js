const { GoogleGenAI } = require("@google/genai");
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Initialize the GoogleGenAI instance with the API key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API });

// Define and export aiService function
async function aiService(prompt) {
  try {
    console.log("Sending prompt to AI:", prompt);

    // Make the API call using ai.models.generateContent with the provided prompt
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash", // Specify the model you want to use
      contents: prompt,            // Send the prompt to the model
    });

    // Log and return the response text
    console.log("Received AI response:", response);
    return response.text;
  } catch (error) {
    console.error("Error calling AI service:", error);
    throw new Error("Failed to communicate with AI service.");
  }
}

// Export the aiService function
module.exports = aiService;
