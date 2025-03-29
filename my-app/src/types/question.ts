/**
 * This is data type for the Question.
 * These fields are returned from the database.
 * Correct index uses 0 indexing.
 */
export type QuestionBackend = {
  id: number,
  created_at: Date,
  question: string,
  answer_1: string,
  answer_2: string,
  answer_3: string,
  answer_4: string,
  correct_index: number
}
/**
 * This is data type for the Question.
 * This data needs to be filled in when uploading to database.
 * Correct index uses 0 indexing.
 */
export type QuestionData = {
  question: string,
  answer_1: string,
  answer_2: string,
  answer_3: string,
  answer_4: string,
  correct_index: number
}