import React, { useState } from 'react'
import "./SumInput.css"
import { ThemeProvider } from '@emotion/react'
import { Box, Slider, createTheme } from '@mui/material'
import PostButton from './PostButton'

const SumInput = ({inputText, setInputText, wordCount, setWordCount, handleSubmit}) => {
  
  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#091334',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  return (
    <div className='middle-container'>
        <textarea 
            className='sum-text-area'
            spellCheck='false'
            contentEditable="true" 
            aria-multiline="true" 
            rows={7}
            value={inputText}
            onChange={(e)=>{setInputText(e.target.value)}}
        />
        <div className='summarizer-options-container'>
        <div>
          Word count:
          <ThemeProvider theme={theme}>
            <Box sx={{ width: 300 }}>
              <Slider aria-label="Default" value={wordCount} onChange={(e, val)=>{setWordCount(val); console.log(wordCount)}}/>
            </Box>
          </ThemeProvider>
        </div>
        <PostButton handleClick={handleSubmit}>Get Summary</PostButton>
        <input type='text'></input>
        </div>
    </div>
  )
}

export default SumInput