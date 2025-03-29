import { supabase } from '../lib/Supabase'

export async function fetchQuestions() {
  const { data, error } = await supabase.from("questions").select("*");
  if (error) {
    return null;
  }
  return data;
}