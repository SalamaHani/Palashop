/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/shopify/client.ts
import { GET_PRODUCT_BY_HANDLE_QUERY } from "@/graphql/products";
import { DocumentNode } from "graphql";
import { GraphQLClient } from "graphql-request";
import { SHOPIFY_GRAPHQL_API_ENDPOINT } from "@/types";



const endpoint = `https://${`palshop-9445.myshopify.com`}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
export const client = new GraphQLClient(endpoint, {
  headers: {
    'X-Shopify-Storefront-Access-Token': '6a58b73538b7b5e95999c1f9b9fd0b8e',
    'Content-Type': 'application/json',
  },
});

export const fetchGraphQL = async <T = any>(
  query: DocumentNode,
  variables?: Record<string, any>
): Promise<T> => {
  try {
    // graphql-request handles both string and gql template literal queries
    return await client.request<T>(query, variables);
  } catch (error) {
    console.error("GraphQL Request Error:", error);
    throw error;
  }
};

export const getProduct = async (handle: string) => {
  const data = await fetchGraphQL(GET_PRODUCT_BY_HANDLE_QUERY, { handle });
  return data?.product;
};
