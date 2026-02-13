interface LukeSkywalker {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
}

// # Solution 3
export const fetchLukeSkywalker = async () => {
  const response = await fetch('https://swapi.py4e.com/api/people/1')
  const data = await response.json()
  return data.json() as LukeSkywalker
}
// # Solution 2
// export const fetchLukeSkywalker = async () => {
//   const data: LukeSkywalker = await fetch(
//     'https://swapi.py4e.com/api/people/1',
//   ).then((res) => {
//     return res.json()
//   })

//   return data
// }
// # Solution1
// export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
//   const data = await fetch('https://swapi.py4e.com/api/people/1').then(
//     (res) => {
//       return res.json()
//     },
//   )

//   return data
// }
