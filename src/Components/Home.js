import { ArrowDropDown, Close, Done, Search } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import EthLogo from "../Images/Eth.png";
import union from "../Images/Union.png";
import ethInput from "../Images/ethInput.png";
import { Box, IconButton, Modal } from "@mui/material";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 410,
  bgcolor: "#181627",
  boxShadow: 24,
  borderRadius: "18px",
  border: "none",
  outline: "none",
};

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [coins, setCoins] = useState([]);
  const [query, setQuery] = useState("");
  const [chain, setChain] = useState("");
  const [amountToInvest, setAmountToInvest] = useState("");
  const [estimateGet, setEstimateGet] = useState("");

  const getAllCoins = async () => {
    await axios({
      url: `https://www.binance.com/api/v3/ticker/price`,
      method: "GET",
    })
      .then((res) => {
        setCoins(res.data);
        setChain(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setAmountToInvest(e.target.value);
    setEstimateGet(e.target.value / (chain.price * 80));
  };

  useEffect(() => {
    getAllCoins();
  }, []);

  return (
    <div className="home_root">
      <div className="home_main" style={{ backgroundImage: `url(${union})` }}>
        <div className="home_btwLogo">
          <img src={EthLogo} alt="eth" />
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="font_14">Current Value</p>
          <p className="font_24">₹ {(chain.price * 80).toFixed(4)}</p>
        </div>
        <div className="select_custom_ mt-24" onClick={handleOpen}>
          <div className="d-flex">
            <img src={ethInput} alt="eth" />
            <p className="font_16 ms-1">{chain.symbol}</p>
          </div>
          <span>
            <ArrowDropDown />
          </span>
        </div>
        <div className="form_input mt-24">
          <p className="font_14">Amount you want to invest</p>
          <div className="form_input_main">
            <input
              type="number"
              className="mt-12"
              placeholder="0.00"
              value={amountToInvest}
              onChange={handleChange}
            />
            <span>INR</span>
          </div>
        </div>
        <div className="form_input mt-24">
          <p className="font_14">Estimate Number of ETH You will Get</p>
          <input
            type="number"
            className="mt-12"
            placeholder="0.00"
            disabled
            style={{ background: "#1C1731", color: "#6F6F7E" }}
            value={estimateGet}
          />
        </div>
        <button className="buy_btn">Buy</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal_main">
            <IconButton onClick={handleClose} className="modal_closeBtn">
              <Close htmlColor="#fff" color="#ffffff" />
            </IconButton>
            <div className="modal_search">
              <span>
                <Search htmlColor="#d2d2d2" />
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="font_14"
                placeholder="Search chains"
              />
            </div>
            <div className="modal_coins">
              {coins
                .filter((coin) => {
                  if (query === "") {
                    return coin;
                  }
                  return coin.symbol
                    .toLowerCase()
                    .includes(query.toLowerCase());
                })
                .map((coin) => (
                  <div
                    className="modal_coin d-flex align-items-center justify-content-between"
                    onClick={() => {
                      setChain(coin);
                      handleClose();
                    }}
                  >
                    <p className="font_16">{coin.symbol}</p>
                    {chain.symbol === coin.symbol && (
                      <p>
                        <Done htmlColor="#58adab" />
                      </p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
