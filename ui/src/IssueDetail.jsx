/* eslint-disable linebreak-style */
/* eslint-disable radix */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import graphQLFetch from './graphQLFetch';

/*

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';

*/

const styles = {
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  deets: {
    margin: '5px',
    padding: '10px',
    display: 'block',
  },
};

export default withStyles(styles)(class IssueDetail extends React.Component {
  constructor() {
    super();
    this.state = { issue: {} };
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id: prevId } } } = prevProps;
    const { match: { params: { id } } } = this.props;
    if (prevId !== id) {
      this.loadData();
    }
  }

  async loadData() {
    const { match: { params: { id } } } = this.props;
    const query = `query issue($id: Int!) {
          issue (id: $id) {
              id description
          }
      }`;

    const data = await graphQLFetch(query, { id: parseInt(id) });
    if (data) {
      this.setState({ issue: data.issue });
    } else {
      this.setState({ issue: {} });
    }
  }

  render() {
    const { issue: { description } } = this.state;
    const { classes } = this.props;
    // eslint-disable-next-line no-console
    // console.log(description);
    return (
        <div>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Description
                    </Typography>
                    <Divider/>
                    <Typography className={classes.deets} variant="body2" component="pre">
                        { description }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
        </div>
    );
  }
});
