import { TABS } from "../redux/actions/type";
import { useDispatch } from "react-redux";
import { toggleTab } from "../redux/actions";

const Tabs = ({ currentTab }) => {
  const dispatch = useDispatch();

  return TABS.map((tab) => (
    <button
      className={
        tab === currentTab
          ? "bg-gray-500 text-white hover:bg-gray-600 font-semibold py-2 px-2 mx-1 rounded"
          : "bg-blue-500 text-white hover:bg-blue-600 font-semibold py-2 px-2 mx-1 rounded"
      }
      onClick={() => dispatch(toggleTab(tab))}
    >
      {tab}
    </button>
  ));
};

export default Tabs;
