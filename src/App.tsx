import React from 'react';
import { useMnM } from '@mnm-tech/provider';

import 'App.scss';

//@ts-ignore
// const Button = React.lazy(() => import('mnmMfeChildApp1/components/Button'));

function App() {
  const { itemList, setItemList } = useMnM();

  // const onItemDelete = (index: number) => {
  //   const newList = itemList.filter((item, itemIndex) => itemIndex !== index);
  //   setItemList(newList);
  // };

  return (
    <>
      <span className="mfe-child-template-app__heading">Child Template App</span>

      <div className="mfe-child-template-app">
        {itemList.map((item: string, index: number) => (
          <div className="mfe-child-template-app__list-item" key={index}>
            <div className="mfe-child-template-app__list-item--name">{item}</div>
            {/* <Button
              onClick={() => {
                onItemDelete(index);
              }}
            >
              Delete
            </Button> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
