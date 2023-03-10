export type Vowels = {
  a: 'a'
  e: 'e'
  i: 'i'
  o: 'o'
  u: 'u'
}

type VowelsInMahdiObject = Pick<Vowels, 'a' | 'o'>
type VowelsNoInMahdiObject = Omit<Vowels, 'a' | 'o'>

type VowelsInMahdi = keyof VowelsNoInMahdiObject
// 'a' | 'o'

const favoriteVowels: VowelsInMahdi = 'e'
