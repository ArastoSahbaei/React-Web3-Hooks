import { ethers } from 'ethers'
import { requestAccount, requestBalance } from "./constants/ETH_METHOD"

export const useWeb3 = () => {
   const ethereum = (window as any).ethereum

   const verifyWalletExtension = () => {
      return ethereum
         ? true
         : false
   }

   const connectToWallet = async () => {
      if (ethereum) {
         try {
            const response = await ethereum.request({ method: requestAccount })
            return response[0]
         } catch (error) {
            return error
         }
      }
   }

   const getWalletBalance = async (address: any) => {
      try {
         const response = await ethereum.request({ method: requestBalance, params: [address, 'latest'] })
         const accountBalanceFormated = ethers.utils.formatEther(response)
         return accountBalanceFormated
      } catch (error) {
         return error
         /*  toast.error('Error occured when trying to receive account balance') */
      }
   }

   return {
      verifyWalletExtension,
      connectToWallet,
      getWalletBalance
   }
}