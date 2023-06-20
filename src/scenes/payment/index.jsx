import React, { useState } from 'react';
import { Box, FormControl, OutlinedInput,InputLabel, TextField, Radio,title,renderOption ,match,parse} from '@mui/material';
import Header from '../../components/Header';
import './style.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FormControlLabel, RadioGroup } from '@mui/material';






const Payment = () => {
  const [selectedPrice, setSelectedPrice] = useState('');

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };
  const dataOptions = ['Option 1', 'Option 2', 'Option 3'];
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const QuestionComponent = () => {
    const [answer, setAnswer] = useState('');

    const handleAnswerChange = (event) => {
      setAnswer(event.target.value);
    };};
    const SubmitButton = () => {
      const handleSubmit = () => {
        // Handle submit logic here
      };};
  return (
    <Box m="20px">
      <Header title="Create Line" subtitle="" />
      <Box height="75vh">
        <div className="frist">
          <h3>Username:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
          <TextField
            className="text"
            helperText="Please enter your name"
            id="demo-helper-text-misaligned"
            label="Name"
          />
        </div>
        <div class="all">
        <div className="second">
          <h3>Subscription:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
          </div>
          <div class="containre">
        <div className="radioall1">
          <div class="radio1">

         <Card style={{ borderRadius: '25px', padding: '10px' ,}}>

<CardContent>

<p>
  <Typography variant="h2" component="div">
  <FormControl>
    <Radio
      checked={selectedPrice === '19'}
      onChange={handlePriceChange}
      value="19"
    />
  </FormControl> 1 Month&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19 $


  </Typography>
 </p>

  <Typography sx={{ mb: 1.5 }} color="text.secondary">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Package 0.1 Credit for 30 Days
  </Typography>



</CardContent>
</Card>
          </div>

          <div class="radio2">
         <Card style={{ borderRadius: '25px', padding: '10px' ,}}>

<CardContent>
<p>
  <Typography variant="h2" component="div">
  <FormControl>
    <Radio
      checked={selectedPrice === '50'}
      onChange={handlePriceChange}
      value="50"
    />
  </FormControl> 1 Month&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19 $


  </Typography>
 </p>

  <Typography sx={{ mb: 1.5 }} color="text.secondary">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Package 0.1 Credit for 30 Days
  </Typography>



</CardContent>
</Card>
          </div>
          </div>
          <div class="radioall2">
          <div class="radio3">
         <Card style={{ borderRadius: '25px', padding: '10px' ,}}>

<CardContent>
<p>
  <Typography variant="h2" component="div">
  <FormControl>
    <Radio
      checked={selectedPrice === '150'}
      onChange={handlePriceChange}
      value="150"
    />
  </FormControl> 1 Month&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19 $


  </Typography>
 </p>

  <Typography sx={{ mb: 1.5 }} color="text.secondary">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Package 0.1 Credit for 30 Days
  </Typography>



</CardContent>
</Card>
          </div>
          <div class="radio4">
         <Card style={{ borderRadius: '25px', padding: '10px' ,}}>

<CardContent>
<p>
  <Typography variant="h2" component="div">
  <FormControl>
    <Radio
      checked={selectedPrice === '99'}
      onChange={handlePriceChange}
      value="99"
    />
  </FormControl> 1 Month&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19 $


  </Typography>
 </p>

  <Typography sx={{ mb: 1.5 }} color="text.secondary">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Package 0.1 Credit for 30 Days
  </Typography>



</CardContent>
</Card>
          </div>
        </div>
        </div>
        </div>




        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div class="note">
        <h3>Note:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h3>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"

            label="Amount"
          />
        </FormControl>

      </div>

<p></p>
<p></p>



      <div class="option">
      <h3>select an option :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
      <TextField
      select
      label="Select an option"
      value={selectedOption}
      onChange={handleOptionChange}
      variant="outlined"
      fullWidth
      sx={{ m: 1 }}
    >
      <option value="">-- Select --</option>
      {dataOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </TextField>
    </div>
    <p>  </p>
    <p>  </p>
    <p>                   &nbsp;       </p>

<div class="all4">
  <div class="live">
<div class="note">

 
    <img src="/signal.png" alt="Logo" style={{ width: '50px', float: 'left' }} />
    
</div>

<div className="box">
  <div className="content2">

    <h2>Lives Actuels</h2>
    {/* Contenu des lives actuels */}
  </div>
  <div class="buttons">
  <Stack spacing={2} direction="row" sx={{ backgroundColor: '', padding: '10px' }}>

    <Button variant="outlined" sx={{ color: 'gray' } }>Select</Button>

  </Stack>
  <Stack spacing={2} direction="row" sx={{ backgroundColor: '', padding: '10px' }}>

    <Button variant="outlined" sx={{ color: 'gray' } }>Select All</Button>

    <span class="arrow-down">&#9660;</span> <span class="arrow-up">&#9650;</span>

  </Stack>
  
</div>
<TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
</div>
</div>

<div class="mv">
  
<div class="note">

    <img src="/video-camera.png" alt="Logo" style={{ width: '50px', float: 'left' }} />
</div>

<div className="box">
  <div className="content2">

    <h2>movies</h2>
    {/* Contenu des lives actuels */}
  </div>
  <div class="buttons">
  <Stack spacing={2} direction="row" sx={{ backgroundColor: '', padding: '10px' }}>

    <Button variant="outlined" sx={{ color: 'gray' } }>Select</Button>

  </Stack>
  <Stack spacing={2} direction="row" sx={{ backgroundColor: '', padding: '10px' }}>

    <Button variant="outlined" sx={{ color: 'gray' } }>Select All</Button>

    <span class="arrow-down">&#9660;</span> <span class="arrow-up">&#9650;</span>
  </Stack>
</div>
<TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />


</div>
</div>
</div>

<h3>Adult :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   </h3>
<div class="adult">

<FormControl>
<RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
        <FormControlLabel
          value="yes"
          control={<Radio
           />}
          label="Yes"

        />
        <FormControlLabel
          value="no"
          control={<Radio
           />}
          label="No"
          
        />
          </RadioGroup>
        </FormControl>
<div class="submit">
  <Button
      variant="contained"

      style={{
        background: 'transparent',
        borderRadius: '10px',
        fontFamily: 'Arial',
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'green', // Change the color to green
      }}
    >
      Submit
    </Button>
    </div>
    </div>

    </Box>
      </Box>
    </Box>
  );
};

export default Payment;
