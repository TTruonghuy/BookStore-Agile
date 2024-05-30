import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function anotherAllProducts() {
  const getAllProducts = await productByCategory("another");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
