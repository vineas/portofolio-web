const TabButton = ({ onClick, isActive, label, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`my-2 mx-2 md:mx-0 block rounded px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight ${
        disabled
          ? "pointer-events-none bg-zinc-200 text-neutral-400"
          : `bg-zinc-100 text-neutral-500 dark:bg-neutral-700 dark:text-white/50 ${
              isActive
                ? "!bg-primary-100 text-primary-700 dark:!bg-slate-900 dark:text-primary-500"
                : ""
            }`
      } md:me-4`}
      role="tab"
      aria-selected={isActive}
    >
      {label}
    </button>
  );
};

const Tabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <ul
      className="mb-5 flex list-none flex-wrap ps-0 md:flex-row justify-center"
      role="tablist"
    >
      {tabs.map((tab) => (
        <li key={tab.id} role="presentation">
          <TabButton
            onClick={() => onTabClick(tab.id)}
            isActive={activeTab === tab.id}
            label={tab.label}
            disabled={tab.disabled}
          />
        </li>
      ))}
    </ul>
  );
};

const TabsPortfolio = ({ tabs, activeTab, setActiveTab }) => {
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return <Tabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />;
};

TabsPortfolio.TabButton = TabButton;
TabsPortfolio.Tabs = Tabs;

export default TabsPortfolio;