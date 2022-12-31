import { useMutation, useQuery } from "@apollo/client";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Button, Label, Modal, Textarea, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { v4 } from "uuid";
import { storage } from "../../config/config-firebase";
import { updateMakanan } from "../../graphql/Mutations";
import { menuCooking } from "../../graphql/Queries";

function ModalEdit({ onClick, setOnlick, data: edit }) {
  const [action, { loading: loadAct }] = useMutation(updateMakanan);

  console.log(edit);
  const [form, setForm] = useState({
    id: edit.id,
    cara: edit.cara,
    deskripsi: edit.deskripsi,
    foto: edit.foto,
    menu_id: edit.menu_id,
    nama: edit.nama,
    nutrisi: edit.nutrisi,
    popular: edit.popular,
    resep: edit.resep,
    video: edit.video,
    waktu: edit.waktu,
  });
  const { data, loading, error } = useQuery(menuCooking);

  const handleImage = (e) => {
    const imageUpload = e.target.files[0];
    if (!imageUpload) return;
    const storageRef = ref(storage, `cooking/${imageUpload.name + v4()}`);
    uploadBytes(storageRef, imageUpload).then(() => {
      getDownloadURL(storageRef).then((url) => {
        setForm({ ...form, foto: url });
      });
    });
  };
  const onChange = (e) => {
    const { name, value, checked } = e.target;
    setForm({
      ...form,
      [name]:
        name == "menu_id"
          ? parseInt(value)
          : name == "popular"
          ? checked
          : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    action({
      variables: form,
    });
    setOnlick(false);
  };
  return (
    <React.Fragment>
      <Modal show={onClick} onClose={() => setOnlick(!onClick)}>
        <Modal.Header>Edit ni bos</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="">
            <div className="flex  w-full gap-x-1">
              <div className="w-1/2">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="Nama" />
                  </div>
                  <TextInput
                    id="email1"
                    type="text"
                    name="nama"
                    onChange={onChange}
                    placeholder="name@flowbite.com"
                    value={form.nama}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="Deskripsi" />
                  </div>
                  <TextInput
                    name="deskripsi"
                    onChange={onChange}
                    id="password1"
                    type="text"
                    value={form.deskripsi}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="waktu" />
                  </div>
                  <TextInput
                    id="email1"
                    type="text"
                    name="waktu"
                    onChange={onChange}
                    placeholder="waktu"
                    value={form.waktu}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="nutrisi" />
                  </div>
                  <TextInput
                    id="email1"
                    type="text"
                    placeholder="name@flowbite.com"
                    name="nutrisi"
                    onChange={onChange}
                    value={form.nutrisi}
                  />
                </div>
              </div>
            </div>
            <div className="flex  w-full gap-x-1">
              <div className="w-1/2">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="Video" />
                  </div>
                  <TextInput
                    id="email1"
                    type="text"
                    name="video"
                    onChange={onChange}
                    placeholder="Link Video"
                    value={form.video}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="Foto" />
                  </div>
                  <input name="foto" type="file" onChange={handleImage} />
                  <div className={`${form.foto == null ? "hidden" : ""}`}>
                    <img className="h-10" src={form.foto} alt="" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="Resep" />
                  </div>
                  <Textarea
                    name="resep"
                    onChange={onChange}
                    id="password1"
                    type="text"
                    value={form.resep}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="mb-5">
                  <div className="mb-2 block ">
                    <Label htmlFor="password1" value="Popular" />
                  </div>
                  <div className="flex items-center   ">
                    <div className="flex w-1/2 items-center ">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        name="popular"
                        onChange={onChange}
                        defaultChecked={form.popular}
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Popular
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="Menu id" />
                  </div>
                  <div>
                    <select
                      id="countries"
                      onChange={onChange}
                      name="menu_id"
                      defaultValue={form.menu_id}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value={form.menu_id} selected>
                        Pilih Menu
                      </option>
                      {data &&
                        data?.cooking_menu.map((m) => (
                          <option key={m.id} value={m.id}>
                            {m.menu}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email1" value="Cara" />
                    </div>
                    <Textarea
                      id="email1"
                      type="text"
                      name="cara"
                      onChange={onChange}
                      value={form.cara}
                      placeholder="name@flowbite.com"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  w-full gap-x-1"></div>
            <Button type="submit">Submit</Button>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default ModalEdit;
