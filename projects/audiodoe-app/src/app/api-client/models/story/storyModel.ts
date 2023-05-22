export interface StoryModel {
  _id: string
  title: string
  thumbnail: string
  backGroundColor: string
}

export interface StoryDetailModel {
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
