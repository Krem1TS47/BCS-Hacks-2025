import { supabase } from '../lib/Supabase';

export default async function fetchPoints() {
  const { data: fetchData, error: fetchError } = await supabase.from("points").select('*');
  if (fetchError) {
    console.log("incrementPoints fetch error: " + JSON.stringify(fetchError, null, 2));
    return null;
  }
  if (!fetchData || fetchData.length === 0) {
    console.log("No data found in points table.");
    return null;
  }
  const { counter } = fetchData[0];
  console.log("counter fetchPoints: " + JSON.stringify(fetchData, null, 2));
  return counter;
}