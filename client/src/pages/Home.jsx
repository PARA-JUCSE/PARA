import React from 'react'
import Navbar from '../components/Navbar'
import "./Home.css"
import OptionsCard from '../components/OptionsCard';
import Heading from '../components/Heading';

const Home = () => {
    const ops = ["NOTES", "SUMMARIZER", "QNA", "REPHRASER", "TRANSLATOR"];
    const cls = ["#F39F5A", "#F3755C", "#AE455A", "#874B9E", "#564E99"];
    const desc = ["Easily capture and organize your thoughts, class lectures, and study materials with our intuitive note-taking feature.",
        "Condense lengthy texts into concise summaries, saving you time and helping you grasp key information at a glance.",
        "Seamlessly extract, search, and answer questions directly from your PDF documents, making study sessions more efficient and interactive.",
        "Enhance your writing skills by effortlessly generating diverse and well-phrased variations of your sentences for more impactful communication.",
        "Break language barriers by translating text between multiple languages, fostering global collaboration and understanding in your academic pursuits."]

    return (
    <>
        <Navbar />
        <Heading style={{marginTop: '10vh'}}>PARA</Heading>
        <div className='dashboard-container'>
            {
                ops.map((op, i) => (
                    <OptionsCard key={i} color={cls[i]} title={op} desc={desc[i]} />
                ))
            }
        </div>
    </>
  )
}

export default Home