
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const getHealthAdvice = async (userPrompt: string): Promise<string> => {
  if (!ai) {
    return "The AI Health Assistant is currently unavailable. Please contact a healthcare professional for medical advice.";
  }
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "You are a helpful AI health assistant for LuminaHealth Hospital. Provide general health information, lifestyle advice, and explain medical terms. ALWAYS include a disclaimer that you are an AI and not a replacement for professional medical advice. For emergencies, tell the user to call our emergency line immediately.",
        temperature: 0.7,
      },
    });

    return response.text || "I couldn't generate a response. Please try again or contact a doctor.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I encountered an error while processing your request. Please try again later.";
  }
};
