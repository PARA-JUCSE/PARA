import React, { useEffect, useRef, useState } from 'react'
import Heading from './../components/Heading';
import Navbar from '../components/Navbar';
import SumInput from '../components/SumInput';
import PostButton from '../components/PostButton';
import axios from 'axios';
import ResultBox from '../components/ResultBox';
import Slider from '@mui/material/Slider';
import { Box, createTheme } from '@mui/material';
import { red } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import {ReactTyped} from "react-typed";
import styles from './Rephraser.module.css'

const Rephraser = () => {
  const [inputText, setInputText] = useState("Enter your text here!");
  const [toneText, setToneText] = useState("Set the tone of the output!");
  const [wordCount, setWordCount] = useState(50);
  const [hasSummary, setHasSummary] = useState(false);
  const [summary, setSummary] = useState("");
  const [resHeight, setResHeight] = useState(0);

  const ref = useRef(null);
  const resBoxRef = useRef(null);

  useEffect(() => {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
      console.log(resBoxRef?.current?.clientHeight);
  }, [resBoxRef]);
  
  const getSummary = async () => {
    setHasSummary(false)
    setSummary('')
    try {
      const res = await axios.post('http://localhost:8080/rephraser/get-rephrase', {
        text: inputText,
        style: toneText
      });
      if (res && res.data.success) {
        setHasSummary(true)
        setSummary(res.data.result.text)
        console.log(res.data.result.text)
        // setSummary(res.data.ans)
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#5F237A',
        dark: '#002884',
        contrastText: '#fff',
      }
    },
  });

  return (
    <>
      <Navbar />
      <div className='page'>
        <div className={styles['sum-container']}>
          <Heading color={"#091334"}>REPHRASER</Heading>
          <div className={styles['rep-textarea-container']}>
            <textarea 
                className={styles['sum-text-area']}
                spellCheck='false'
                contentEditable="true" 
                aria-multiline="true" 
                rows={5}
                value={inputText}
                onChange={(e)=>{setInputText(e.target.value)}}
            />
            <textarea 
                className={styles['sum-text-area']}
                spellCheck='false'
                contentEditable="true" 
                aria-multiline="true" 
                rows={5}
                value={toneText}
                onChange={(e)=>{setToneText(e.target.value)}}
            />
          </div>
          {/* <div className={styles['sum-slider']}>
            <div style={{width: "35%"}} className={styles['sum-slider-item']}>Word count:</div>
            <div style={{width: "40%"}} className={styles['sum-slider-item']}>
              <ThemeProvider theme={theme}>
                <Box sx={{ width: 300 }}>
                  <Slider aria-label="Default" value={wordCount} onChange={(e, val)=>{setWordCount(val)}}/>
                </Box>
              </ThemeProvider>
            </div>
            <div style={{width: "25%"}} className={styles['sum-slider-item']}>{wordCount}%</div>
          </div> */}

          <div className={styles['sum-btn']}>
            <PostButton handleClick={getSummary} style={{height: "100%", width: "100%"}}>REPHRASE</PostButton>
          </div>

        </div>
        <div  ref={resBoxRef} className={`${styles[`result-box`]} ${styles[`${hasSummary ? `open` : `close`}`]}`}>
          <ReactTyped strings={[summary]} typeSpeed={20} />
        </div>
        <div ref={ref}></div> 
      </div>
    </>
  )
}

export default Rephraser