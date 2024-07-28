import { OpenAI } from '@langchain/openai'
import { PromptTemplate } from '@langchain/core/prompts'
import { LLMChain } from 'langchain/chains'
import axios from 'axios';

function countWords (txt) {
    txt = txt.trim()
    if (txt === '') {
      return 0
    }
    var words = txt.split(/\s+/)
    return words.length
}

export const getSummaryController = async (req, res) => {
    try {
        const {txt, wordCount} = req.body
        // console.log(txt);
        if (!txt) {
            res.status(500).send({error: "Input text is required"});
        }

          const style = `funny`
          const wordcount = wordCount * 0.01 * countWords(txt);
          const template = `Follow the follwoing writing style: {style}.
          Summarise the following text: {text}. 
          Strictly stick to upto {wordcount} words. `
          
          const promptTemplate = new PromptTemplate({
            template,
            inputVariables: ['text', 'style', 'wordcount']
          })
          
          const openAIModel = new OpenAI({ modelName: 'gpt-3.5-turbo' })

          const llmChain = new LLMChain({
            llm: openAIModel,
            prompt: promptTemplate
          })
          
          const result = await llmChain.call({
            text: txt,
            style: style,
            wordcount: wordcount
          })
          
          

          // Log result to the console
          console.log(result.text)
          const resCount = countWords(result.text)
          

        console.log()
        const ans = result.text + `[${resCount}]`;
        res.status(200).send({
            success: true,
            message: "summary obtained successfully",
            ans
        })
    } catch (error) {
        // console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in creating note",
            error
        })
    }
}