import reportWebVitals from "../reportWebVitals"

export const useWeb3 = () => {

   const connectToWallet = () => {
      try {
         return console.log('CONNECTING TO WALLET')
      } catch (error) {
         return error
      }
   }

   reportWebVitals(console.log)

   return {
      connectToWallet
   }
}