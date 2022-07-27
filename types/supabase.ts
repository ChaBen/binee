export interface definitions {
  PersonalHistory: {
    /**
     * Format: text
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id?: string
    /** Format: text */
    title: string
    /** Format: text */
    description: string
    /** Format: text */
    startDate: string
    /** Format: text */
    endDate: string
    /** Format: ARRAY */
    tags: string[]
  }
}
