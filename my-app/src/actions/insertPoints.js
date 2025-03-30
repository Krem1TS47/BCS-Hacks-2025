// src/actions/insertPoints.js
import { supabase } from '../lib/Supabase';

export default async function insertPoints(updatedPoints) {
  const { data, error } = await supabase
    .from('points')
    .update({ counter: updatedPoints }) // Assuming "counter" is the column holding points
    .eq('id', 1); // Make sure to target the correct row

  if (error) {
    console.error('Error updating points:', error);
    return null;
  }

  return data;
}