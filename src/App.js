import { useState } from "react";
import "./App.css";

const dummyTabs = [
  {
    title: "home",
    content: "I am home tab content",
  },
  {
    title: "profile",
    content: "I am Profile tab content",
  },
  {
    title: "contact",
    content: "I am contact tab content",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [activeTabPane, setActiveTabPane] = useState("home");
  const handleTabClick = (event) => {
    setActiveTab(event.target.innerText);
  };

  return (
    <div className="App">
      {activeTab}
      <div role="tablist">
        {dummyTabs.map((item, index) => (
          <button
            onClick={handleTabClick}
            class={`nav-link ${
              activeTab == `${item.title}` ? "active" : ""
            } `}
            id={`${item.title}-tab`}
            type="button"
            role="tab"
            aria-controls={`pills-${item.title}`}
            aria-selected={activeTab == `${item.title}-tab` ? true : false}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="tab-content" id="pills-tabContent">
        {dummyTabs.map((item, index) => (
          <div className={`tab-pane ${
            activeTab == `${item.title}` ? "show" : ""
          }`} role="tabpanel" aria-labelledby={`pills-${item.title}`}>
            {item.content}
          </div>
        ))}
        {/* <div
          class={`tab-pane ${
            activeTab == `pills-${item.title}` ? "aaaa" : ""
          }`}
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          I am home
        </div>
        <div
          class={`tab-pane ${
            activeTab == `pills-${item.title}` ? "aaaa" : ""
          }`}
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          I am Profile
        </div>
        <div
          class={`tab-pane ${
            activeTab == `pills-${item.title}` ? "aaaa" : ""
          }`}
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          I am Contact
        </div> */}
      </div>
    </div>
  );
}

export default App;
