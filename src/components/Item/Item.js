import classes from "./Item.module.scss";

function Item({ wineData, transform }) {
  return (
    <div
      className={classes.itemWrapper}
      style={{ transform: "translateX(" + transform + ")" }}
    >
      <div className={classes.headerWrapper}>
        <div className={classes.header}>{wineData["Name"]}</div>
      </div>
      <div className={classes.detailsWrapper}>
        <div className={classes.details}>
          <div className={classes.detail}>
            <div
              className={classes.icon}
              style={{
                WebkitMaskImage: "url(../resources/icons/Location.png)",
                maskImage: "url(../resources/icons/Location.png)",
              }}
            />
            <div className={classes.info}>{wineData["Origin"]}</div>
          </div>
          <div className={classes.detail}>
            <div
              className={classes.icon}
              style={{
                WebkitMaskImage: "url(../resources/icons/Grapes.png)",
                maskImage: "url(../resources/icons/Grapes.png)",
              }}
            />
            <div className={classes.info}>{wineData["Grapes"]}</div>
          </div>
          <div className={classes.detail}>
            <div
              className={classes.icon}
              style={{
                WebkitMaskImage: "url(../resources/icons/Drop.png)",
                maskImage: "url(../resources/icons/Drop.png)",
              }}
            />
            <div className={classes.info}>{wineData["Alcohol"] + "%"}</div>
          </div>
          <div className={classes.detail}>
            <div
              className={classes.icon}
              style={{
                WebkitMaskImage: "url(../resources/icons/Bottle.png)",
                maskImage: "url(../resources/icons/Bottle.png)",
              }}
            />
            <div className={classes.info}>
              {wineData["BottlePrice"] +
                "₪ | " +
                wineData["BottlePriceHH"] +
                "₪"}
            </div>
          </div>
          <div className={classes.detail}>
            <div
              className={classes.icon}
              style={{
                WebkitMaskImage: "url(../resources/icons/Glass.png)",
                maskImage: "url(../resources/icons/Glass.png)",
              }}
            />
            <div className={classes.info}>
              {wineData["GlassPrice"] + "₪ | " + wineData["GlassPriceHH"] + "₪"}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.descriptionWrapper}>
        <div className={classes.description}>{wineData["Description"]}</div>
        <div
          className={classes.image}
          style={{
            backgroundImage:
              "url(/resources/images/" + wineData["ImageUrl"] + ".png)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Item;
