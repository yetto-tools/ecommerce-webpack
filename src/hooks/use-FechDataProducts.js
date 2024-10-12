// import cogoToast from "cogo-toast";

// export const fetchProducts = async (pageNumber = 1, pageSize = 5) => {
//   const host = window.origin;
//   console.log(host);
//   const url = `${host}/api/Product/list`;
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ pPageNumber: pageNumber, pPageSize: pageSize }),
//   };

//   try {
//     const response = await fetch(url, requestOptions);
//     if (!response.ok) {
//       cogoToast.error(`Error: ${response.status}`, { position: "bottom-left" });
//       throw new Error(`Error: ${response.status}`);
//     }
//     const data = await response.json();

//     // Convertir y procesar los datos
//     const processedData = data.DataResult.map((product) => {
//       product.variation = product.variation
//         ? JSON.parse(product.variation)
//         : null;
//       product.category = product.category ? JSON.parse(product.category) : null;
//       product.tag = product.tag ? JSON.parse(product.tag) : null;
//       product.image = product.image ? JSON.parse(product.image) : null;
//       return product;
//     });

//     return processedData;
//   } catch (error) {
//     cogoToast.error(`Error: ${error}`);
//     throw error;
//   }
// };

import cogoToast from "cogo-toast";

export const fetchProducts = async () => {
  const url = `${window.origin}/api/Product/list.json`; // URL del JSON estático

  try {
    const response = await fetch(url);
    if (!response.ok) {
      cogoToast.error(`Error: ${response.status}`, { position: "bottom-left" });
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();

    console.log(data);

    // Convertir y procesar los datos
    const processedData = data;

    return processedData;
  } catch (error) {
    cogoToast.error(`Error: ${error}`, { position: "bottom-left" });
    throw error;
  }
};
