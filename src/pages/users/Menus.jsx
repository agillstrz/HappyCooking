import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import CardMenu from "../../components/CardMenu";
import SideBarUser from "../../components/SideBarUser";
import { allMakanan, cookById, searchMakanan } from "../../graphql/Queries";
import { useDebounce } from "../../utils/hookSearch";

function Menus() {
  const { data, loading } = useQuery(allMakanan);
  const [click, setClick] = useState(null);
  const [byId, { data: dataId, loading: loadId, error: errId }] =
    useLazyQuery(cookById);
  const [search, { data: dataSearch, loading: loadSearch, error: errSearch }] =
    useLazyQuery(searchMakanan);

  useEffect(() => {
    byId({
      variables: {
        id: click,
      },
    });
  }, [click]);

  const [_text, setText] = useState("");
  const [text] = useDebounce(1000, _text);

  useEffect(() => {
    setClick(null);
    search({
      variables: {
        _ilike: `%${text}%`,
      },
    });
  }, [text]);
  {
    dataSearch && console.log(dataSearch);
  }

  return (
    <div className="flex w-full pb-10">
      <div className="w-[20%]">
        <SideBarUser setText={setText} click={click} setClick={setClick} />
      </div>
      <div className=" w-[80%] p-5">
        <div className="grid grid-cols-3 gap-5">
          {/* {dataId
            ? dataId?.cooking_makanan.map((m) => (
                <CardMenu key={m.id} data={m} />
              ))
            : ""} */}
          {loading && (
            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-700 h-10 w-10" />
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-700 rounded" />
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-2" />
                      <div className="h-2 bg-slate-700 rounded col-span-1" />
                    </div>
                    <div className="h-2 bg-slate-700 rounded" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {dataId
            ? dataId?.cooking_makanan.map((m) => (
                <CardMenu key={m.id} data={m} />
              ))
            : dataSearch && !dataId
            ? dataSearch.cooking_makanan.map((m) => (
                <CardMenu key={m.id} data={m} />
              ))
            : data?.cooking_makanan.map((m) => (
                <CardMenu key={m.id} data={m} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Menus;
