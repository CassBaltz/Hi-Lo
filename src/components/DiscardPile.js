import React from "react";
import { withStyles } from "@material-ui//styles";

const BlankCard = ({ classes, offSet, zIndex, }) => (
  <div
    className={classes.blankCard}
    style={{ bottom: offSet, right: offSet, zIndex, }}
  ></div>
);

const TopCard = ({ card, classes, offSet, zIndex }) => (
  <img
    className={classes.topCard}
    src={card.image}
    alt={card.code}
    style={{ bottom: offSet, right: offSet, zIndex, }}
  />
);

export const DiscardPile = ({ cardsShowing, classes }) => {
  const lastIndex = cardsShowing.length - 1;

  const discardPile = cardsShowing.map((card, index) => {
    const offSet = index * 3;
    if (index === lastIndex) {
      return (
        <TopCard
          key={card.code}
          card={card}
          classes={classes}
          offSet={offSet}
          zIndex={index}
        />
      );
    }

    return (
      <BlankCard
        key={card.code}
        offSet={offSet}
        classes={classes}
        zIndex={index}
      />
    );
  }
  );

  return (
    <div className={classes.root}>
      {discardPile}
      <p className={classes.count}>{discardPile.length}</p>
    </div>
  );
};

const styles = {
  root: {
    position: "relative",
    width: "70px",
    height: "98px",
    left: "100px",
  },
  topCard: {
    width: "70px",
    height: "98px",
    position: "absolute",
  },
  blankCard: {
    width: "70px",
    height: "98px",
    backgroundColor: "#FFF",
    borderRadius: "4px",
    border: "1px solid #ced4da",
    boxSizing: "border-box",
    position: "absolute",
  },
  count: {
    position: "absolute",
    fontSize: "18px",
    fontWeight: 700,
    bottom: "-45px",
    textAlign: "center",
    width: "70px",
    color: "#495057",
  },
};

export default withStyles(styles)(DiscardPile);
