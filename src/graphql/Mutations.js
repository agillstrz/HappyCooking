// import { gql } from "@apollo/client";

import { gql } from "@apollo/client";

// export const AddTanaman = gql`
//   mutation MyMutation(
//     $kate_id: Int = 10
//     $nama: String = ""
//     $lokasi: String = ""
//     $informasi: String = ""
//     $habitat: String = ""
//     $foto: String = ""
//   ) {
//     insert_tanaman_tanaman(
//       objects: {
//         kate_id: $kate_id
//         nama: $nama
//         lokasi: $lokasi
//         informasi: $informasi
//         foto: $foto
//         habitat: $habitat
//       }
//     ) {
//       returning {
//         id
//       }
//     }
//   }
// `;

// export const UpdateTanaman = gql`
//   mutation MyMutation(
//     $id: Int!
//     $kate_id: Int = 10
//     $nama: String = ""
//     $lokasi: String = ""
//     $informasi: String = ""
//     $habitat: String = ""
//     $foto: String = ""
//   ) {
//     update_tanaman_tanaman_by_pk(
//       pk_columns: { id: $id }
//       _set: {
//         kate_id: $kate_id
//         nama: $nama
//         lokasi: $lokasi
//         informasi: $informasi
//         foto: $foto
//         habitat: $habitat
//       }
//     ) {
//       id
//     }
//   }
// `;

// export const AddKategori = gql`
//   mutation MyMutation($nama: String = "", $foto: String = "") {
//     insert_tanaman_kategori(objects: { nama: $nama, foto: $foto }) {
//       returning {
//         id
//       }
//     }
//   }
// `;

// export const HapusTanaman = gql`
//   mutation MyMutation($_eq: Int, $id: Int!) {
//     delete_tanaman_tanaman_by_pk(id: $id) {
//       id
//     }
//   }
// `;
// export const HapusKategori = gql`
//   mutation MyMutation($id: Int = 10) {
//     delete_tanaman_kategori_by_pk(id: $id) {
//       id
//     }
//   }
// `;

// export const UpdateKategori = gql`
//   mutation MyMutation($id: Int!, $foto: String = "", $nama: String = "") {
//     update_tanaman_kategori_by_pk(
//       pk_columns: { id: $id }
//       _set: { foto: $foto, nama: $nama }
//     ) {
//       id
//     }
//   }
// `;

export const tambahMakanan = gql`
  mutation MyMutation(
    $cara: String = ""
    $deskripsi: String = ""
    $foto: String = ""
    $menu_id: Int = 10
    $nama: String = ""
    $nutrisi: String = ""
    $popular: Boolean = false
    $resep: String = ""
    $video: String = ""
    $waktu: String = ""
  ) {
    insert_cooking_makanan(
      objects: {
        cara: $cara
        deskripsi: $deskripsi
        foto: $foto
        menu_id: $menu_id
        nama: $nama
        nutrisi: $nutrisi
        popular: $popular
        resep: $resep
        video: $video
        waktu: $waktu
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export const hapusMakanan = gql`
  mutation MyMutation($id: Int!) {
    delete_cooking_makanan_by_pk(id: $id) {
      id
    }
  }
`;

export const updateMakanan = gql`
  mutation MyMutation(
    $id: Int!
    $cara: String = ""
    $deskripsi: String = ""
    $foto: String = ""
    $menu_id: Int = 10
    $nama: String = ""
    $nutrisi: String = ""
    $popular: Boolean = false
    $resep: String = ""
    $video: String = ""
    $waktu: String = ""
  ) {
    update_cooking_makanan_by_pk(
      pk_columns: { id: $id }
      _set: {
        cara: $cara
        deskripsi: $deskripsi
        foto: $foto
        menu_id: $menu_id
        nama: $nama
        nutrisi: $nutrisi
        popular: $popular
        resep: $resep
        video: $video
        waktu: $waktu
      }
    ) {
      id
    }
  }
`;
