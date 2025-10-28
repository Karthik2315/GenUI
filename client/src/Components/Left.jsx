import React, { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { GoogleGenAI } from "@google/genai";
import ClipLoader from "react-spinners/ClipLoader";
import toast from 'react-hot-toast'



const Left = ({setOutputScreen,setCode}) => {
  const ai = new GoogleGenAI({apiKey:import.meta.env.VITE_GEMINI_API_KEY});
  const [prompt,setPrompt] = useState("");
  const [frameWork,setFrameWork] = useState("html-css")
  const [loading,setLoading] = useState(false);
  function extractCode(response) {
    const match = response.match(/```(?:\w+)?\n?(([\s\S]*?)?)```/);
    return match ? match[1].trim() : response.trim();
  }
  async function getResponse() {
    setOutputScreen(false);
    if(prompt === "")
    {
      toast.error("Component should be described")
      return ;
    }
    setLoading(true)
    console.log("Code is being made");
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: ` You are an experienced programmer with expertise in web development and UI/UX design. You create modern, animated, and fully responsive UI components. You are highly skilled in HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React, Next.js, Vue.js, Angular, and more.

      Now, generate a UI component for: ${prompt}  
      Framework to use: ${frameWork}  

      Requirements:  
      The code must be clean, well-structured, and easy to understand.  
      Optimize for SEO where applicable.  
      Focus on creating a modern, animated, and responsive UI design.  
      Include high-quality hover effects, shadows, animations, colors, and typography.  
      Return ONLY the code, formatted properly in **Markdown fenced code blocks**.  
      Do NOT include explanations, text, comments, or anything else besides the code.  
      And give the whole code in a single HTML file.`,
    });
    setCode(extractCode(response.text));
    setOutputScreen(true)
    setLoading(false)
  }

  return (
    <div className='w-full bg-gradient-to-r from-[#2C5364] to-[#203A43]  h-[80vh] mt-10 rounded-md mb-10 flex flex-col px-10  hover:shadow-lg transition-all duration-300' >
      <h2 className='text-2xl font-semibold pt-10'>
        <span className='bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] bg-clip-text text-transparent'>
          AI Component Generator
        </span>
      </h2>
      <p className='text-[15px] mt-1 bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] bg-clip-text text-transparent'>Describe your Component and let AI code for you.</p>
    <p className='font-semibold mt-3 text-[18px] bg-gradient-to-r from-[#F7F8F8] to-[#FBBF24] bg-clip-text text-transparent'>FrameWork</p>
    <select
          className="border-3 border-white block w-full mt-2 px-4 py-2 pr-10 text-gray-800 bg-[#203A43] text-white
               rounded-md shadow-sm appearance-none focus:outline-none" onChange={(e) => setFrameWork(e.target.value)}>
      <option value="html-css">HTML + CSS</option>
      <option value="html-tailwind">HTML + Tailwind</option>
      <option value="html-bootstrap">HTML + Bootstrap</option>
      <option value="html-css-js">HTML + CSS + JS</option>
      <option value="html-tailwind-bootstrap">HTML + Tailwind + Bootstrap</option>
    </select>
    <h2 className='mt-3 text-[17px] font-semibold bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] bg-clip-text text-transparent'>Describe Your Component</h2>
    <textarea onChange={(e) => setPrompt(e.target.value)} value={prompt} placeholder='Describe your component in detail and AI will generate it...' className='mt-3 w-full h-[250px] bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] rounded-md p-2 outline-none resize-none' required/>
    <div className='flex mt-8 justify-between px-2'>
      <p className='bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] bg-clip-text text-transparent'>Click the button to generate your code</p>
      <button className='flex gap-2 px-4 py-2 bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] items-center text-center rounded-2xl cursor-pointer  group' onClick={getResponse}>
      {!loading ? (
        <>
        <Sparkles className='size-4 group-hover:scale-105 group-active:scale-95 transition-all duration-300' /> <p className='group-hover:scale-105 transition-all duration-300 group-active:scale-95'>Generate</p> 
        </> )
        : (
          <>
            <ClipLoader size="20px"/> <p>Generating</p>
          </>
        )
      }
      </button>
    </div>
  </div>
  )
}

export default Left
