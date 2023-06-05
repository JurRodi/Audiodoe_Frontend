export interface StoryModel {
  _id: string
  title: string
  thumbnail: string
  backGroundColor: string
  description: string
  duration: number
  ageGroup: string
  pageCount: number
  category: string
}

export interface StoryCreateModel {
  title: string
  thumbnail: string
  backGroundColor: string
  description: string
  duration: string
  ageGroup: string
  pageCount: string
  category: string
}
