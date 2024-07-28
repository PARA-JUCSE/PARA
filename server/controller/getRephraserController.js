import { OpenAI } from '@langchain/openai'
import { PromptTemplate } from '@langchain/core/prompts'
import { LLMChain } from 'langchain/chains'
import axios from 'axios';

// function countWords (txt) {
//     txt = txt.trim()
//     if (txt === '') {
//       return 0
//     }
//     var words = txt.split(/\s+/)
//     return words.length
// }

export const getRephraserController = async (req, res) => {
    try {
        const {text, style} = req.body
        // console.log(txt);
        if (!text) {
            res.status(500).send({error: "Input text is required"});
        }

		console.log(text)
		console.log(style)

		const template = `Follow the follwoing writing style: {style}.
		Rephrase the following text: {text}. `
			
		const promptTemplate = new PromptTemplate({
			template,
			inputVariables: ['text', 'style']
		})

		const openAIModel = new OpenAI({ modelName: 'gpt-3.5-turbo' })

		const llmChain = new LLMChain({
		llm: openAIModel,
		prompt: promptTemplate
		})

		const result = await llmChain.call({
			text: text,
			style: style
		})

		console.log(result.text)

        res.status(200).send({
            success: true,
            message: "summary obtained successfully",
            result
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