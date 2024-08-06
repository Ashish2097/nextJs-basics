import { notFound } from "next/navigation";

export default function ProductDetails({ params }: { params: { productId: string }}) {
  if (parseInt(params.productId) > 1000) {
    notFound();
  }

  return <h1>Details about product {params.productId}</h1>;

}
