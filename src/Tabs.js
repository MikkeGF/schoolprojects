import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Balloon from './Balloon';
import Social from './Social';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'lightgrey',
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          <Tab label="Balloon animation" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Facebook/Twitter" />
        </Tabs>
      </Paper>
      <div>
      {value === 0 &&
      <React.Fragment>
        <Balloon />
      </React.Fragment>

      }
      {value === 1 &&
        <React.Fragment>
          page2
        </React.Fragment>

        }
        {value === 2 &&
          <React.Fragment>
            <h1>page3</h1>
          </React.Fragment>

          }
          {value === 3 &&
            <React.Fragment>
              <Social />
            </React.Fragment>

            }
      </div>
    </React.Fragment>
  );
}
