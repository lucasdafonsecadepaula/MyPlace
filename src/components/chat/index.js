import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  stories: {
    margin: "30px",
    display: "flex",
  },
  storiescard: {
      paddingRight: "10px",
  },
  img: {
      height: 'auto',
      width: "150px",
      borderRadius: "15px",
      outlineColor: "green",
      outlineWidth: "10px"
  }
}));

function Chat() {
  const classes = useStyles();

  return (
    <>
      <div>
        <form className={classes.stories}>
          <div className={classes.storiescard}>
            <img className={classes.img} src="/party-pic.jpg" alt="" />
          </div>
          <div className={classes.storiescard}>
            <img className={classes.img} src="/party-pic.jpg" alt="" />
          </div>
          <div className={classes.storiescard}>
            <img className={classes.img} src="/party-pic.jpg" alt="" />
          </div>
          <div className={classes.storiescard}>
            <img className={classes.img} src="/party-pic.jpg" alt="" />
          </div>
          <div className={classes.storiescard}>
            <img className={classes.img} src="/party-pic.jpg" alt="" />
          </div>
          <div className={classes.storiescard}>
            <img className={classes.img} src="/party-pic.jpg" alt="" />
          </div>
          <div className={classes.storiescard}>
            <img className={classes.img} src="/party-pic.jpg" alt="" />
          </div>
          <div className={classes.storiescard}>
            <img className={classes.img} src="/party-pic.jpg" alt="" />
          </div>
          <div className={classes.storiescard}>
            <img className={classes.img} src="/party-pic.jpg" alt="" />
          </div>
          <div className={classes.storiescard}>
            <img className={classes.img} src="/party-pic.jpg" alt="" />
          </div>
          <div className={classes.storiescard}>
            <img className={classes.img} src="/party-pic.jpg" alt="" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Chat;
