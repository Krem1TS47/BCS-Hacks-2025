import { supabase } from '../lib/Supabase'

export default async function insertQuestion(questionData) {
  const { data, error } = await supabase.from("questions").insert(questionData);
  console.log("data: " + JSON.stringify(data, null , 2));
  if (error) {
    console.log("Insert question error: " + JSON.stringify(error, null, 2));
    return null;
  }
  return data;
}