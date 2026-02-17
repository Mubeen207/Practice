// import { GoogleGenerativeAI } from "@google/generative-ai";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Only POST Allowed" });
//   }

//   try {
//     const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
//     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); 

//     const { message } = req.body;

//     if (!message) {
//       return res.status(400).json({ error: "Message is required" });
//     }

//     const result = await model.generateContent(message);
//     const response = await result.response; 
//     const text = response.text();

//     res.status(200).json({ reply: text });
//   } catch (err) {
//     // Ye console check karein terminal mein details ke liye
//     console.error("Gemini API Error:", err);
//     res.status(500).json({ error: err.message || "Something went wrong" });
//   }
// }

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST Allowed" });
  }

  // 1. Check if API Key exists
  if (!process.env.GEMINI_API_KEY) {
    console.error("ERROR: GEMINI_API_KEY is missing in .env.local");
    return res.status(500).json({ error: "API Key setup missing" });
  }

  try {
    const { message } = req.body;
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // Model name exactly "gemini-1.5-flash" hona chahiye
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      // Safety settings add karne se random crashes kam ho jate hain
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
      ],
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    if (!text) {
        throw new Error("Gemini returned an empty response");
    }

    res.status(200).json({ reply: text });

  } catch (err) {
    // Ye console log aapke terminal (VS Code) mein dikhega
    console.error("--- SERVER ERROR START ---");
    console.error(err);
    console.error("--- SERVER ERROR END ---");

    res.status(500).json({ 
      error: "Gemini Error", 
      details: err.message 
    });
  }
}