const aiService = require("../services/ai.service");

module.exports.getResponse = async (req, res) => {
  const prompt = req.query.prompt;

  // Check if prompt is provided
  if (!prompt) {
    return res.status(400).send("Prompt is required");
  }

  try {
    // Call the aiService with the provided prompt
    const response = await aiService(prompt);

    // Send the response back to the client
    res.send(response);
  } catch (error) {
    // Handle any errors from the AI service
    console.error("Error in getResponse:", error);
    res.status(500).send("Internal Server Error");
  }
};
