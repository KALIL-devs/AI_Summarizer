import {logo} from '../assets';

const Hero = () => {
  return (
    <header 
    className='w-full flex justify-center 
    items-center flex-col '>
      <nav className='flex flex-row justify-between items-center w-full mb-10 pt-5'>
        <img src={logo} alt='sumz_log' className='w-28 object-contain'/>
        <button 
          type='button' 
          onClick={() => window.open('https://github.com/KALIL-devs/Static_Web_Portfolio')
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles with
        <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Summarize is an open-source article summarizer 
        that helps you read smarter by transforming lengthy,
         complex articles into clear, concise, and easy-to-understand summaries.
      </h2>
    </header>
  )
}

export default Hero