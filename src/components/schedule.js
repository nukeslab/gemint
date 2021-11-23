import React from 'react';
import {Grid, Card} from '@material-ui/core';

const List = (props) => {
  const { breaks } = props;
  if (!breaks || breaks.length === 0) return <p>No breaks, sorry</p>;
  return (
    <div className="container">
      <Grid container direction="row"  justify="flex-start"  justify="flex-start" spacing={3}>
        {breaks.map((scheduledBreak) => {
          return (
            <div>
              <Grid item xs={4}>
                <h2>
                {scheduledBreak.boxLeague}
                </h2>
              </Grid>
            </div>
          );
        })}
      </Grid>
      
    </div>
  );
};
export default List;