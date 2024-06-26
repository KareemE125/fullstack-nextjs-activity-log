"use client";
import { SWRConfig } from "swr";
import fetcher from "@/services/fetcher";
import { CACHE_INVALIDATION_TIME } from "@/utils/constants";


type SWRProviderProps = {
  children: React.ReactNode, 
  fallback?: any
}

export default function SWRProvider({children, fallback = {}}: SWRProviderProps) {

  return (
    <SWRConfig value={{fetcher, fallback, refreshInterval: CACHE_INVALIDATION_TIME}}>
      {children}
    </SWRConfig>
  )
}