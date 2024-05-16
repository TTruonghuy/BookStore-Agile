import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function literaryAllProducts() {
  const getAllProducts = await productByCategory("literary");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
