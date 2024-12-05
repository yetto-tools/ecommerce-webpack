const adapterProduct = (product, idxProduct) => {
  return {
    id: Number(product?.id || product.SkuArt || 0),
    sku: product?.SkuArt || "",
    name: product?.NombreComerArt || "",
    price: product?.PrecioUnit || 0,
    discount: product?.Descuento || 0,
    new: product?.new || false,
    rating: product?.rating || 0,
    saleCount: product?.saleCount || 0,
    category: product?.Categoria
      ? Array.from(product?.Categoria?.split(", "))
      : [],
    silueta: product.silueta || [],
    tag: product.Etiquetas?.split(", ") || [],
    stock: Number(product?.Stock) || 0,
    image: [product?.Imagen1, product?.Imagen2] || [],
    variation: product.variation || [
      {
        color: product?.color || "solid",
        image: product?.image || "",
        size: product?.talla || [
          {
            name: product?.variation?.talla || "OSFA",
            stock: product?.variation?.Stock || 0,
          },
        ],
      },
    ],
    shortDescription: product.DescripPeq,
    fullDescription: product.Description || "",
  };
};

export default adapterProduct;
