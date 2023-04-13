import { Grid, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SavedPosts from '../Posts/SavedPosts';
import { getSavedPosts } from '../../actions/userActions';

const Home2 = () => {
  const dispatch = useDispatch();
  const user  = JSON.parse(localStorage.getItem('profile'));

  useEffect(()=>{
    console.log("reloading savedposts");
    dispatch(getSavedPosts());
  },[dispatch]);

  if(!user){
    return(
      <Paper elevation={5} className='paper' sx={{backgroundColor:'#fcf4dc',py:1,width:'50%',height:'50%',marginTop:'2%',marginX:'auto'}}>
        <Typography variant='h6' align='center'>
          Please sign in to <br/>
           view your saved posts <br/>
        </Typography>
      </Paper>
    )
  }

  return (
    <Container maxWidth='xl' >
      <Container>
        <Grid container>
          <Grid item justifyContent='end'>
            <SavedPosts/>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Home2;