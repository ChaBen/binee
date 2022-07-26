import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
// import { supabase } from '@/lib/initSupabase'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient()
  const personalHistory = await prisma.personalHistory.findMany()
  console.log(personalHistory)

  // const { data: personalHistory, error } = await supabase
  //   .from('images')
  //   .select('*')

  console.log(personalHistory)

  res.status(200).json(personalHistory)
}
