import { supabase } from '../lib/Supabase'

export default async function incrementPoints() {
  const { data: fetchData, error: fetchError } = await supabase.from("points").select('*');
  if (fetchError) {
    console.log("incrementPoints fetch error: " + JSON.stringify(fetchError, null, 2));
    return null;
  }
  const { id, counter } = fetchData[0];
  const { data: insertData, error: insertError } = await supabase.from("points").update({
    counter: Number(counter) + 1
  }).eq('id', id);

  if (insertError) {
    console.log("incrementPoints insert error: " + JSON.stringify(insertError, null, 2));
    return null;
  }
  console.log("incremented points: " + String(counter + 1));
  return insertData;
}