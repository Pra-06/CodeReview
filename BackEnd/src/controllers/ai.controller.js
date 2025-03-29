const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  const code = req.body.code;

  // Check if prompt is provided
  if (!code) {
    return res.status(400).send("Prompt is required");
  }

  try {
    // Call the aiService with the provided prompt
    const response = await aiService(code);

    // Send the response back to the client
    res.send(response);
  } catch (error) {
    // Handle any errors from the AI service
    console.error("Error in getResponse:", error);
    res.status(500).send("Internal Server Error");
  }
};
