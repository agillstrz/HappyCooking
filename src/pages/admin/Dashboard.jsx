import { useMutation, useSubscription } from "@apollo/client";
import { Table } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { hapusMakanan } from "../../graphql/Mutations";
import { dataAdmin } from "../../graphql/Subscriptions";
import ModalEdit from "./ModalEdit";
import ModalTambah from "./ModalTambah";

function Dashboard() {
  const [onClick, setOnlick] = useState(false);
  const [modal, setModal] = useState({
    isShow: false,
    data: {},
  });
  const [actions, { loading: loadHapus }] = useMutation(hapusMakanan);
  const { data, loading, error } = useSubscription(dataAdmin);
  const handleDelete = (e, id) => {
    e.preventDefault();
    actions({
      variables: {
        id: id,
      },
    });
  };
  return (
    <>
      {onClick && <ModalTambah onClick={onClick} setOnlick={setOnlick} />}
      {modal.isShow && (
        <ModalEdit
          onClick={modal.isShow}
          setOnlick={setModal}
          data={modal.data}
        />
      )}
      <div>
        <div className="flex justify-between w-full px-20 p-5">
          <button
            onClick={() => setOnlick(true)}
            className="py-3 px-2 bg-btn rounded-lg cursor-pointer text-main"
          >
            Tambah Makanan
          </button>
          <Link
            to="/"
            className="py-3 px-2 bg-btn rounded-lg cursor-pointer text-main"
          >
            Makanan
          </Link>
        </div>
        <Table className="w-1/2 ">
          <Table.Head>
            <Table.HeadCell>Nama</Table.HeadCell>

            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data?.cooking_makanan.map((m) => (
              <Table.Row
                key={m.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {m.nama}
                </Table.Cell>
                <Table.Cell className="flex gap-x-2">
                  <label
                    onClick={() => setModal({ isShow: !modal.isShow, data: m })}
                    className="font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </label>
                  <label
                    onClick={(e) => handleDelete(e, m.id)}
                    className="font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Hapus
                  </label>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default Dashboard;
