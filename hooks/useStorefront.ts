
import { SHOPIFY_GRAPHQL_API_ENDPOINT } from "@/types";
import { QueryKey, useMutation, useQuery } from "@tanstack/react-query";
import { GraphQLClient, RequestDocument } from "graphql-request";

// Add URL validation and fallback
const getValidEndpoint = () => {


  try {
    const endpoint = `https://${`palshop-9445.myshopify.com`}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
    console.log(endpoint)
    return endpoint;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    throw new Error("Invalid Shopify Storefront API URL");
  }
};

const endpoint = getValidEndpoint();
const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;



export const client = new GraphQLClient(endpoint, {
  headers: {
    'X-Shopify-Storefront-Access-Token': '08f8598a76c5b5e5eeaf77543d5b2d2d',
    'Content-Type': 'application/json',
  },
});

interface QueryVariables {
  query: RequestDocument;
  variables?: Record<string, unknown>;
  enabled?: boolean;
}

interface MutationVariables {
  query: RequestDocument;
  variables: Record<string, unknown>;
}

export function useStorefrontQuery<TData = unknown>(
  queryKey: QueryKey,
  { query, variables, enabled = true, ...options }: QueryVariables
) {
  return useQuery({
    queryKey,
    queryFn: async () => {
      try {
        const response = await client.request<TData>(query, variables);
        return response;
      } catch (error) {
        if (error instanceof Error) {
          throw error;
        }
        throw new Error("Failed to fetch data from Shopify Storefront API");
      }
    },
    enabled,
    ...options,
  });
}

export function useStorefrontMutation<
  TData = unknown,
  TVariables extends MutationVariables = MutationVariables
>() {
  const mutation = useMutation<TData, Error, TVariables>({
    mutationFn: async ({ query, variables }) => {
      try {
        const response = await client.request<TData>(query, variables);
        return response;
      } catch (error) {
        // Type guard to ensure error is an Error object
        if (error instanceof Error) {
          throw error;
        }
        throw new Error("An unknown error occurred during mutation");
      }
    },
  });

  return {
    mutate: mutation.mutateAsync,
    mutateSync: mutation.mutate,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
    data: mutation.data,
  };
}
