import {useState} from 'react';
import styles from './style.module.css';

type TabProps = {
  tabName: string;
  active: boolean;
  index: number;
  changeTab: (tabIndex: number) => void;
};

const Tab = ({tabName, active, index, changeTab}: TabProps) => {
  const onClick = () => {
    changeTab(index);
  };

  return (
    <div className={`${styles.tab}`}>
      <button className={`${styles.tabButton} ${active && styles.tabActive} text-subtitle`} onClick={onClick}>
        {tabName}
      </button>
      <div className={active ? styles.indicator : styles.hideIndicator} />
    </div>
  );
};

type TabsProps = React.PropsWithChildren & {
  tabNames: string[];
};

export const Tabs = ({tabNames, children}: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeTab = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <main>
      <div className={styles.container}>
        {tabNames.map((tabName, index) => (
          <Tab key={tabName} tabName={tabName} active={activeIndex === index} index={index} changeTab={changeTab} />
        ))}
      </div>
      {children}
    </main>
  );
};
