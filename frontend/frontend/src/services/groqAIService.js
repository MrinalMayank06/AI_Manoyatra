const API_URL = "https://ai-manoyatra.onrender.com";

export const groqAIService = {
  mentalHealthAssistant: async (message, agentType, onChunk) => {
    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          message: message,
          agent: agentType 
        }),
      });

      if (!response.body) {
        throw new Error("ReadableStream not supported in this browser.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let fullResponse = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        fullResponse += chunk;

        if (onChunk) {
          onChunk(chunk);
        }
      }

      return fullResponse;

    } catch (error) {
      console.error("Connection Error:", error);
      return "Sorry, I am having trouble connecting to the backend.";
    }
  }
};