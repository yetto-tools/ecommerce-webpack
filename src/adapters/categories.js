const categoryAdapter = (category) => {
  return {
    id: Number(category.id) || 0,
    name: category.NombreCategoria,
    image: category.image || null,
    url: category.url || "#",
  };
};

export default categoryAdapter;
