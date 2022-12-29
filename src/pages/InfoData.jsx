import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InfoData = () => {
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState([]);
  const [fetch, setFetch] = useState(true);
  const [loading, setLoading] = useState(false);
  const [, setCurrentId] = useState(-1);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (fetch === true) {
      axios
        .get(`${process.env.REACT_APP_API_ADMIN}/admToko`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setDataSource(res.data.dataToko.data);
          console.log(res.data.dataToko.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
      setFetch(false);
    }
  }, [fetch, setFetch]);

  const columns = [
    {
      title: "Kategori",
      width: 70,
      key: "1",
      fixed: "left",
      dataIndex: "category",
      align: "center",
    },
    {
      title: "Nama Barang",
      width: 100,
      key: "2",
      align: "center",
      dataIndex: "produkName",
    },
    {
      key: "3",
      title: "Kode Barang",
      width: 90,
      align: "center",
      dataIndex: "codeProduk",
    },

    {
      key: "4",
      title: "Brand",
      align: "center",
      width: 80,
      dataIndex: "brandProduk",
    },
    {
      key: "5",
      title: "Harga",
      width: 100,
      align: "center",
      dataIndex: "hargaProduk",
    },
    {
      key: "6",
      title: "Masuk",
      width: 100,
      align: "center",
      dataIndex: "dateIn",
    },
    {
      key: "7",
      title: "Stok",
      width: 60,
      align: "center",
      dataIndex: "stok",
    },
    {
      title: "Action",
      key: "8",
      fixed: "right",
      align: "center",
      width: 70,
      render: (item, index) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                handleEdit(item._id);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                handleDelete(item._id);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  //   ambil token

  //   handleDelete
  const handleDelete = async (tokoId) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`${process.env.REACT_APP_API_ADMIN}/admtoko/${tokoId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        setFetch(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   handleEdit
  const handleEdit = (id) => {
    let idToko = id;
    setCurrentId(idToko);
    navigate(`/edit/${idToko}`);
  };

  return (
    <>
      <div className="text-center text-3xl font-bold">
        <h1>PAGE TABLE</h1>
      </div>
      <div className="m-5">
        <Table
          scroll={{ x: 900, y: 390 }}
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          loading={loading}
        ></Table>
      </div>
    </>
  );
};

export default InfoData;
