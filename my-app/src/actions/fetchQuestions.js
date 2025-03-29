import { supabase } from '../lib/Supabase'

export async function fetchQuestions() {
  const { data, error } = await supabase.from("questions").select("*");
  if (error) {
    console.log("Fetch question error: " + JSON.stringify(error, null, 2));
    return null;
  }
  return data;
}