import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { FaClipboard, FaCheck, FaHandHoldingHeart } from "react-icons/fa";
import orderTemplate from "../utils/OrderTemplate";

const IndexPage = () => {
  const [templateText, setTemplateText] = useState("");
  const [isCopyClicked, setIsCopyClicked] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const currentVersion = "v2"
  
  useEffect(() => {
    if (!localStorage.getItem("currentVersion") !== currentVersion) {
      localStorage.clear();
      localStorage.setItem("currentVersion", currentVersion);
    }
    const storedList = localStorage.getItem("orderList");
    if (storedList) {
      setItemList(JSON.parse(storedList));
    } else {
      setItemList(orderTemplate);
    }
    setIsLoadingPage(false);
  }, []);

  const updateTemplateText = useCallback(() => {
    const orderString = itemList
      .filter((item) => item.amount)
      .map((item) => {
        return `${item.amount} ${item.metric} ${item.name}`;
      })
      .join("\n");
    setTemplateText(orderString);
  }, [itemList]);

  useEffect(() => {
    updateTemplateText();
  }, [itemList, updateTemplateText]);

  useEffect(() => {
    if (isCopyClicked) {
      setTimeout(() => {
        setIsCopyClicked(false);
      }, 2500);
    }
  }, [isCopyClicked]);

  const handleChangeItem = (e) => {
    const editedItem = itemList.find(
      (item) => item.id === parseInt(e.target.id, 10)
    );
    editedItem.name = e.target.innerHTML;
    localStorage.setItem("orderList", JSON.stringify(itemList));
  };

  const handleClickCopy = () => {
    const textarea = document.querySelector("textarea");
    textarea.select();
    document.execCommand("copy");
    setIsCopyClicked(true);
  };

  const handleInputBlur = (e) => {
    const updatedItem = itemList.find(
      (item) => item.id === parseInt(e.target.id)
    );
    const newAmount = parseInt(e.target.value, 10);
    updatedItem.amount = newAmount;
    if (newAmount > 1 && updatedItem.metric === "box") {
      updatedItem.metric = "boxes";
    } else if (newAmount <= 1 && updatedItem.metric === "boxes") {
      updatedItem.metric = "box";
    }
    setItemList(itemList);
    localStorage.setItem("orderList", JSON.stringify(itemList));
    updateTemplateText();
  };

  const handleClickClear = () => {
    const clearedItems = itemList.map((item) => {
      return { ...item, amount: "" };
    });
    setItemList(clearedItems);
    localStorage.setItem("orderList", JSON.stringify(clearedItems));
  };

  if (isLoadingPage) {
    return (
      <main className="flex items-center justify-center flex-col gap-4 m-4 text-lg h-screen">
        <div class="loader"></div>
      </main>
    );
  }

  const templateColumns = ["Amount", "Metric", "Item Name"];

  return (
    <main className="flex items-center justify-center flex-col gap-4 m-4 text-lg font-light">
      <h1 className="text-2xl">PoultryLine Order Template 🐔</h1>
      <div id="page-content" className="flex justify-center flex-col gap-4">
        <table className="border rounded-lg border-separate p-4 font-normal">
          <tr>
            {templateColumns.map((col) => (
              <th>{col}</th>
            ))}
          </tr>
          {itemList.map((item) => {
            return (
              <tr className={item.amount > 0 ? "text-green-600" : ""}>
                <input
                  className="border border-black rounded-md m-1 w-12 text-xl text-center"
                  type="number"
                  min="0"
                  id={item.id}
                  name="item-amount"
                  onChange={handleInputBlur}
                  onWheel={(e) => e.target.blur()}
                  value={item.amount}
                />
                <td name="item-metric">{item.metric}</td>
                <td
                  name="item-name"
                  contentEditable={true}
                  onInput={handleChangeItem}
                  id={item.id}
                >
                  {item.name}
                </td>
              </tr>
            );
          })}
        </table>
        <div className="flex justify-between w-full">
          <button
            onClick={() => handleClickCopy()}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex flex-row items-center gap-2"
          >
            {!isCopyClicked ? <FaClipboard /> : <FaCheck />}
            {isCopyClicked ? "copied!" : "copy"}
          </button>
          <button
            onClick={() => handleClickClear()}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            clear
          </button>
        </div>
        <textarea
          className="border rounded-lg w-full p-4"
          id="template-text"
          name="template-text"
          rows={itemList.length}
          value={templateText}
          contenteditable="false"
        />
      </div>
      <footer>
        <span className="flex items-center gap-2 text-sm">
          Made with <FaHandHoldingHeart /> by your favourite daughter
        </span>
      </footer>
    </main>
  );
};

export default IndexPage;

export const Head = () => {
  <title>Home Page</title>;
};
