import { supabase } from '../lib/Supabase'

export default async function fetchPoints() {
  const { data: fetchData, error: fetchError } = await supabase.from("points").select('*');
  if (fetchError) {
    console.log("incrementPoints fetch error: " + JSON.stringify(fetchError, null, 2));
    return null;
  }
  const { counter } = fetchData[0];
  console.log("counter fetchPoints: " + JSON.stringify(fetchData, null, 2));
  return counter;
}