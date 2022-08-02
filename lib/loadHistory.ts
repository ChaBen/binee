import { PersonalHistory } from '@/types/PersonalHistory'
import { supabase } from './supabaseClient'

export async function LoadHistory() {
  const { data: personalHistory } = await supabase
    .from<PersonalHistory>('PersonalHistory')
    .select('*')
    .order('startDate', {
      ascending: false,
    })
  return personalHistory
}
