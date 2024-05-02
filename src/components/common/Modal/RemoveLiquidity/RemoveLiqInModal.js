import { Modal, Input } from "antd";
import BigNumber from "bignumber.js";
import { toast } from "../../Toasts/Toast";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPairAddress } from "../../../../redux/tokenAction";
import ButtonCommon from "../../buttonCommon/ButtonCommon";
import { getRemoveLiquiditySignature } from "../../../AddLiquidity/addLiquidity";
import { pairBalanceHelper, getTokenAddress } from "../../../../Swapping/Swap";
import {
  RemoveLiquidityETHWithPermitService,
  RemoveLiquidityWithPermitService,
} from "../../../AddLiquidity/addLiquidity";

const RemoveLiqInModal = (props) => {
  const dispatch = useDispatch();

  const [token0, setToken0] = useState("");
  const [token1, setToken1] = useState("");
  const [signature, setSignature] = useState();
  const [pairbalance, setpairbalance] = useState(0);
  const waddress = useSelector((state) => state.addressSlice.walletAddress);
  const pairAddressinput = useSelector(
    (state) => state.tokenAction.pairAddress
  );
  const tokenASelected = useSelector(
    (state) => state.tokenSelectedSlice.tokenA
  );
  const tokenBSelected = useSelector(
    (state) => state.tokenSelectedSlice.tokenB
  );

  const pairAddress = async (e) => {
    let address = e.target.value;
    dispatch(setPairAddress(address));

    const balance = await pairBalanceHelper(waddress[0], address);
    const convertedAmount = (balance / 10 ** 18).toLocaleString("fullwide", {
      useGrouping: !1,
    });
    setpairbalance(convertedAmount);
    const { token0, token1 } = await getTokenAddress(address);
    setToken0(token0);
    setToken1(token1);
  };
  const signRemoveLiquidityTxn = async () => {
    let deadline = Math.floor(new Date().getTime() / 1000);
    deadline = deadline + 10 * 60;
    const totalLiquidity = await pairBalanceHelper(
      waddress[0],
      pairAddressinput
    );
    const result = await getRemoveLiquiditySignature(
      waddress[0],
      pairAddressinput,
      BigNumber(totalLiquidity),
      1685180759
    );
    console.log("resulsssssssssssssss", result);
    if (result) {
      setSignature(result);
    }
  };

  const removeLiquidityWithPermit = async () => {
    let deadline = Math.floor(new Date().getTime() / 1000);
    deadline = deadline + 10 * 60;
    // If we want to remove liquidity with a native token
    const customToken = tokenASelected.isNative
      ? tokenBSelected
      : tokenASelected;
    const totalLiquidity = await pairBalanceHelper(
      waddress[0],
      pairAddressinput
    );
    if (tokenASelected.isNative || tokenBSelected.isNative) {
      try {
        console.log("fasdfjnldasfj");
        const result = await RemoveLiquidityETHWithPermitService(
          waddress[0],
          signature,
          BigNumber(totalLiquidity),
          "0",
          "0",
          customToken.address,
          1685180759
        );
        if (result?.status) {
          toast.success("Liquidity Removed");
        }
      } catch (err) {
        if (err?.code === 4001) {
          toast.error("User denied Transaction");
        } else {
          toast.error("Remove Liquidity Error");
        }
      }
      // If we want to remove liquidity of custom token with custom token
    } else {
      try {
        const totalLiquidity = await pairBalanceHelper(
          waddress[0],
          pairAddressinput
        );
        const result = await RemoveLiquidityWithPermitService(
          waddress[0],
          signature,
          BigNumber(totalLiquidity),
          "0",
          "0",
          tokenASelected.address,
          tokenBSelected.address,
          1685180759
        );
        if (result?.status) {
          toast.success("Liquidity Removed");
        }
      } catch (err) {
        if (err?.code === 4001) {
          toast.error("User denied Transaction");
        } else {
          toast.error("Remove Liquidity Error");
        }
      }
    }
  };

  return (
    <Modal
      title="Enter Pair Address"
      scrollable={true}
      open={props.isModalVisible}
      onCancel={props.handleCancel}
      className="connect_wallet selectToken_Modal"
      footer={null}
      centered
    >
      <div className="searchField">
        Balance of LP: {pairbalance}
        <Input placeholder="Pair Address" onChange={(e) => pairAddress(e)} />
      </div>
      <ButtonCommon
        title="Approve"
        onClick={signRemoveLiquidityTxn}
      ></ButtonCommon>
      <ButtonCommon
        title="Remove Liquidity"
        onClick={removeLiquidityWithPermit}
      ></ButtonCommon>

      <div>
        <ul>
          <li>
            <Input placeholder="tokenA" value={token0}></Input>
            <Input placeholder="tokenB" value={token1}></Input>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default RemoveLiqInModal;
