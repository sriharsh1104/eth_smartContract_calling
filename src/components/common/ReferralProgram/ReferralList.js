import React, { useState } from "react";
import { Modal, Row, Col, Input, Table } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./ReferralList.scss";
import { ReactComponent as ArrowLeft } from "../../../assets/images/ArrowLeft.svg";
import Pagination from "../Pagenation/Pagination";
import { DownloadIcon } from "../../../assets/Svg/SvgImages";

const ReferralList = (props) => {
  const navigate = useNavigate();

  const [isReferralListVisible, setIsReferralListVisible] = useState(false);
  const handleCancel3 = () => {
    setIsReferralListVisible(false);
  };
  const showModal3 = () => {
    setIsReferralListVisible(true);
  };
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const onSearch = (value) => console.log(value);
  const columns = [
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "bYSL TVL",
      dataIndex: "bysltvl",
      key: "bysltvl",
    },
    {
      title: "USDy TVL",
      dataIndex: "usdytvl",
      key: "usdytvl",
    },
    {
      title: "Vault TVL",
      dataIndex: "vaulttvl",
      key: "vaulttvl",
    },
    {
      title: "Volume",
      dataIndex: "volume",
      key: "volume",
    },
    {
      title: "BUSD Earned",
      dataIndex: "busdearned",
      key: "busdearned",
    },
  ];

  const data = [
    {
      level: "1",
      address: "0x223…a52a4",
      bysltvl: 0,
      usdytvl: 0,
      vaulttvl: "$0",
      volume: "$0",
      busdearned: 0,
    },
    {
      level: "2",
      address: "0x223…a52a4",
      bysltvl: 0,
      usdytvl: 0,
      vaulttvl: "$0",
      volume: "$0",
      busdearned: 0,
    },
    {
      level: "3",
      address: "0x223…a52a4",
      bysltvl: 0,
      usdytvl: 0,
      vaulttvl: "$0",
      volume: "$0",
      busdearned: 0,
    },
    {
      level: "4",
      address: "0x223…a52a4",
      bysltvl: 0,
      usdytvl: 0,
      vaulttvl: "$0",
      volume: "$0",
      busdearned: 0,
    },
    {
      level: "5",
      address: "0x223…a52a4",
      bysltvl: 0,
      usdytvl: 0,
      vaulttvl: "$0",
      volume: "$0",
      busdearned: 0,
    },
    {
      level: "6",
      address: "0x223…a52a4",
      bysltvl: 0,
      usdytvl: 0,
      vaulttvl: "$0",
      volume: "$0",
      busdearned: 0,
    },
    {
      level: "7",
      address: "0x223…a52a4",
      bysltvl: 0,
      usdytvl: 0,
      vaulttvl: "$0",
      volume: "$0",
      busdearned: 0,
    },
    {
      level: "8",
      address: "0x223…a52a4",
      bysltvl: 0,
      usdytvl: 0,
      vaulttvl: "$0",
      volume: "$0",
      busdearned: 0,
    },
    {
      level: "9",
      address: "0x223…a52a4",
      bysltvl: 0,
      usdytvl: 0,
      vaulttvl: "$0",
      volume: "$0",
      busdearned: 0,
    },
    {
      level: "10",
      address: "0x223…a52a4",
      bysltvl: 0,
      usdytvl: 0,
      vaulttvl: "$0",
      volume: "$0",
      busdearned: 0,
    },
  ];

  return (
    <>
      <Modal
        title={
          <div className="refrlTitle">
            <button className="ListRe" onClick={() => navigate("/earn")}>
              {/* <img src={ArrowLeft} alt="icon" /> */}
              <ArrowLeft className="Left_arrow" />
              &nbsp;
            </button>
            Referral List
          </div>
        }
        scrollable={true}
        visible={props.isReferralListVisible}
        onCancel={props.handleCancel3}
        className="connect_wallet List_referral"
        footer={null}
        centered
      >
        <Row>
          <Col className="ReferralList">
            <div className="SearchBar">
              <Search
                onSearch={onSearch}
                placeholder="Search by wallet address"
              />
            </div>
            <div className="tablelist">
              <Table
                scroll={{ x: true }}
                columns={columns}
                dataSource={data}
                pagination={false}
              />
              <div className="dflx dwnldCsv_link">
                <Pagination />
                <a href="#">
                  Download CSV Export <DownloadIcon />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ReferralList;
