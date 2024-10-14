// export const getData = async () => {
//     console.log("req getting at get data ")
//     console.log( process.env.NEXT_PUBLIC_CMC_API_KEY)
//     const response = await fetch(
//       `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY="f1cfd689-8679-4092-a9b1-66424aeb834d"`,
//       {
//         method: 'GET',
//         headers: {
//             'X-CMC_PRO_API_KEY': "f1cfd689-8679-4092-a9b1-66424aeb834d",
//           Accept: '*/*',
//         },
//       },
//     )

//     const data = await response.json()

//     res.status(200).json({ data })}