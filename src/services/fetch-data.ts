import newspapaperDaysJson from "@/json/newspaper-days.json";
import newspapaperJson from "@/json/newspaper.json";
import { newspaperDaysSchema } from "@/types/newspaper-days-schema";
import { newspaperSchema } from "@/types/newspaper-schema";
import { z } from "zod";

async function fetchNewspaper() {
  try {
    /* 
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    */
    const data = newspapaperJson;

    const dataParsed = newspaperSchema.parse(data);

    return dataParsed.newspaper;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.errors);
    }
    throw error;
  }
}

async function fetchNewspaperDays() {
  try {
    /* 
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    */
    const data = newspapaperDaysJson;
    const dataParsed = newspaperDaysSchema.parse(data);

    return dataParsed.newspaperDays;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.errors);
    }
    throw error;
  }
}

export { fetchNewspaper, fetchNewspaperDays };
