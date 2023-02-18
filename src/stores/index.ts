import { proxy } from "valtio";

interface GlobalStoreType {
  userId: string | undefined;
  userCode: number | undefined;
  userCounty: string | undefined;
  userConstituency: string | undefined;
}
export const GlobalStore = proxy<GlobalStoreType>({
  userId: undefined,
  userCode: undefined,
  userCounty: undefined,
  userConstituency: undefined,
});
