import Item from "../Item/Item.js";
import classes from "./Category.module.scss";

function Category({
  data,
  rowIndex,
  initialColIndex,
  colIndex,
  backgroundColor,
}) {
  let rowIndexInRange = rowIndex % (data.length + 1);
  return (
    <div
      className={classes.categoryWrapper}
      style={{
        transform: "translateY(" + (initialColIndex - colIndex) * 100 + "vh)",
      }}
    >
      <div
        className={classes.categoryHome}
        style={{
          transform: "translateX(" + -rowIndexInRange * 100 + "vw)",
          backgroundColor: "rgb(" + backgroundColor + ")",
        }}
      />
      {data.map((value, index) => {
        return (
          <Item
            key={value["Name"]}
            wineData={value}
            transform={(index + 1 - rowIndexInRange) * 100 + "vw"}
          />
        );
      })}
    </div>
  );
}
export default Category;
