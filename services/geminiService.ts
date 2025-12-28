
import { GoogleGenAI } from "@google/genai";

// Initialize GoogleGenAI with process.env.API_KEY directly as a named parameter.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHealthAdvice = async (userPrompt: string): Promise<string> => {
  try {
    // Use ai.models.generateContent to query GenAI with both model and contents.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "You are a helpful AI health assistant for LuminaHealth Hospital. Provide general health information, lifestyle advice, and explain medical terms. ALWAYS include a disclaimer that you are an AI and not a replacement for professional medical advice. For emergencies, tell the user to call our emergency line immediately.",
        temperature: 0.7,
      },
    });

    // Directly access the .text property from the GenerateContentResponse object.
    return response.text || "I couldn't generate a response. Please try again or contact a doctor.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I encountered an error while processing your request. Please try again later.";
  }
};
