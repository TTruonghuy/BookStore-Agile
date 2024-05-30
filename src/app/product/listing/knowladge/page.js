import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function knowladgeAllProducts() {
  const getAllProducts = await productByCategory("knowladge");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
