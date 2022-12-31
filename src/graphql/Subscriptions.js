// import { gql } from "@apollo/client";

import { gql } from "@apollo/client";

// export const tanaman = gql`
//   subscription MySubscription {
//     tanaman_tanaman {
//       id
//       nama
//       habitat
//       lokasi
//       foto
//       waktu
//       informasi
//       kat {
//         nama
//       }
//     }
//   }
// `;

// export const kategori = gql`
//   subscription kategori {
//     tanaman_kategori {
//       id
//       nama
//       foto
//     }
//   }
// `;

export const dataAdmin = gql`
  subscription MySubscription {
    cooking_makanan {
      waktu
      video
      resep
      popular
      nutrisi
      nama
      menu_id
      id
      foto
      deskripsi
      cara
    }
  }
`;

export const makananHome = gql`
  subscription MySubscription {
    cooking_makanan(limit: 2) {
      nama
      id
      foto
      waktu
    }
  }
`;
