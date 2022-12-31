import { gql } from "@apollo/client";

export const menuCooking = gql`
  query MyQuery {
    cooking_menu {
      id
      menu
    }
  }
`;

export const allMakanan = gql`
  query MyQuery {
    cooking_makanan {
      id
      menu_id
      nama
      waktu
      foto
      nutrisi
    }
  }
`;

export const detailMakanan = gql`
  query MyQuery($id: Int = 10) {
    cooking_makanan_by_pk(id: $id) {
      cara
      deskripsi
      foto
      id
      menu_id
      nama
      nutrisi
      resep
      popular
      video
      waktu
    }
  }
`;

export const searchMakanan = gql`
  query MyQuery($_ilike: String = "") {
    cooking_makanan(where: { nama: { _ilike: $_ilike } }) {
      id
      nama
      nutrisi
      resep
      video
      waktu
      menu_id
      foto
      deskripsi
      popular
      cara
    }
  }
`;

export const cookById = gql`
  query MyQuery($id: Int) {
    cooking_makanan(where: { menu_id: { _eq: $id } }) {
      id
      nama
      nutrisi
      resep
      video
      waktu
      menu_id
      foto
      deskripsi
      popular
      cara
    }
  }
`;

export const cookPopular = gql`
  query MyQuery($_eq: Boolean = true) {
    cooking_makanan(where: { popular: { _eq: $_eq } }) {
      menu_id
      id
      nama
      video
      waktu
      foto
    }
  }
`;
