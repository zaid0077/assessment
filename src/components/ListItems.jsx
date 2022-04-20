import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Container } from '@mui/material';

export default function ListItems(props) {

  return (
    <Container>
      {props.data.map((value) => {
        return (
              <List
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  bgcolor: 'background.paper',
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src={value.author.avatar}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={value.author.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                         {value.title}
                        </Typography>
                        {value.publishDate}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
        );
      })}
    </Container>
  );
}