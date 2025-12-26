import axios from "axios";
import { LANGUAGES } from "../constants/languages";

// verify this matches your current 'minikube ip'
const PISTON_API_URL = "http://192.168.49.2:30000/execute"; 

export const executeCode = async (languageId, code) => {
  const languageInfo = LANGUAGES.find(lang => lang.id === languageId);

  if (!languageInfo) {
    throw new Error(`Language '${languageId}' not supported.`);
  }

  try {
    // UPDATED PAYLOAD STRUCTURE
    const response = await axios.post(PISTON_API_URL, {
      language: languageInfo.pistonName, // Must match: "python", "javascript", "go", "c"
      code: code // Our backend expects 'code', not 'files' array
    });
    
    // The backend returns { stdout, stderr, error }
    return response.data; 
    
  } catch (error) {
    console.error("API execution error:", error);
    throw new Error(error.response?.data?.message || "Failed to execute code.");
  }
};