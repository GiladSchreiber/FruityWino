import classes from "./App.module.scss";
import data from "./data/data.json";

import { useState } from "react";
import Category from "./components/Category/Category";

const wines = data["Wines"];

function App() {
  const [rowIndex, setRowIndex] = useState(0);
  const [colIndex, setColIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0]);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0]);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distanceX = touchStart.clientX - touchEnd.clientX;
    const distanceY = touchStart.clientY - touchEnd.clientY;
    const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);

    if (isHorizontalSwipe) {
      const isLeftSwipe = distanceX > minSwipeDistance;
      const isRightSwipe = distanceX < -minSwipeDistance;
      if (isLeftSwipe) {
        swipeLeft();
      }
      if (isRightSwipe) {
        swipeRight();
      }
    } else {
      const isDownSwipe = distanceY > minSwipeDistance;
      const isUpSwipe = distanceY < -minSwipeDistance;
      if (isDownSwipe) {
        swipeDown();
      }
      if (isUpSwipe) {
        swipeUp();
      }
    }
  };

  function swipeLeft() {
    setRowIndex(rowIndex + 1);
  }

  function swipeRight() {
    setRowIndex(Math.max(rowIndex - 1, 0));
  }

  function swipeDown() {
    if (colIndex < Object.keys(wines).length - 1) {
      setRowIndex(0);
      setColIndex(colIndex + 1);
    }
  }

  function swipeUp() {
    if (colIndex > 0) {
      setRowIndex(0);
      setColIndex(colIndex - 1, 0);
    }
  }

  return (
    <div
      className={classes.app}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Category
        data={wines["Red"]}
        rowIndex={rowIndex}
        backgroundColor={"255, 0, 0"}
        colIndex={colIndex}
        initialColIndex={0}
      />
      <Category
        data={wines["White"]}
        rowIndex={rowIndex}
        backgroundColor={"0, 255, 255"}
        colIndex={colIndex}
        initialColIndex={1}
      />
    </div>
  );
}
export default App;
