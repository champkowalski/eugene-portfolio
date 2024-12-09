import { useQuery } from "@tanstack/react-query";
import { sdk } from "../lib";

type ResourceOpts = {
  url: string;
  queryKey: Array<string>;
};

export const useResources = (opts: ResourceOpts) => {
  return useQuery({
    queryKey: opts.queryKey,
    queryFn: async () => {
      const response = await sdk.get(opts.url);
      if (response.ok) {
        return response.data?.list;
      } else {
        console.log(response.originalError);
        throw new Error(`oops an error occured`);
      }
    },
  });
};
