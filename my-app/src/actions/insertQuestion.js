import { supabase } from '../lib/Supabase'

export async function insertQuestion(questionData) {
  const { data, error } = await supabase.from("questions").insert(questionData);
  if (error) {
    console.log("Insert question error: " + JSON.stringify(error, null, 2));
    return null;
  }
  return data;
}