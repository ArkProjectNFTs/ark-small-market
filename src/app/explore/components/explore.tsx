"use client";

import React from "react";

import { env } from "@/env";
import { useQuery } from "react-query";

import { mergeTokenData } from "../utils";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const fetchCollection = async () => {
  const response = await fetch(
    `${env.NEXT_PUBLIC_NFT_API_URL}/v1/tokens/${env.NEXT_PUBLIC_STARKNET_NFT_CONTRACT}`,
    {
      headers: {
        "x-api-key": env.NEXT_PUBLIC_NFT_API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

async function fetchCollectionMarket() {
  const response = await fetch(
    `${env.NEXT_PUBLIC_ORDERBOOK_API_URL}/tokens/collection/${env.NEXT_PUBLIC_STARKNET_NFT_CONTRACT}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

const Explore = () => {
  const {
    data: collectionData,
    error: collectionDataError,
    isError: collectionDataIsError,
    isLoading: collectionDataIsLoading,
  }: any = useQuery("tokens", fetchCollection);

  const {
    data: collectionMarketData,
    error: collectionMarketError,
    isLoading: collectionMarketIsLoading,
  }: any = useQuery("collectionMarket", fetchCollectionMarket);

  if (collectionDataIsLoading || collectionMarketIsLoading) {
    return <div>Loading...</div>;
  }

  if (collectionDataIsError || collectionDataError || collectionMarketError) {
    return (
      <div>
        Error missing data:{" "}
        {collectionDataError
          ? collectionDataError.message
          : collectionMarketError}
      </div>
    );
  }

  const tokenWithMarketData = mergeTokenData(
    collectionData.result,
    collectionMarketData
  );
  return <DataTable data={tokenWithMarketData} columns={columns} />;
};

export default Explore;
