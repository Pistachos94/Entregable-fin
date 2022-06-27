import { useState } from 'react';
import quotes from '../../json/quotes.json'
import '../App.css'
import colors from '../../json/colors.json';
const Cardsquotes = () => {
    const random = Math.floor(Math.random() * quotes.length)
    const [index, setIndex] = useState(random)


    const randomBg=Math.floor(Math.random()*colors.length)
    const [bgPosi,setBgPosi] = useState(randomBg);

    document.body.style=`background:rgba${colors[bgPosi].color}`

    const changeQuote = ()=> {
        const random2 = Math.floor(Math.random() * quotes.length)
        setIndex(random2)

        const randomBg2=Math.floor(Math.random()*colors.length)        
        setBgPosi(randomBg2)
    }
    return (
        
            <div className='container' style={{color:`rgba${colors[bgPosi].color}`}}>
                
                <div className='cardQuotes'>
                    <div>
                        <div className='phraseCont d-flex'>
                            <div className='quote'>
                            <i className="fa-solid fa-quote-left"></i>
                            </div>
                            <div>
                                <p>
                                    {quotes[index].quoteText}
                                </p>
                            </div>
                        </div>
                        <p className='author'>{quotes[index].quoteAuthor}</p>
                    </div>
                    
                    <div className="buttonCont d-flex">
                        <div></div>
                        <button onClick={changeQuote} style={{background:`rgba${colors[bgPosi].color}`}}>></button>
                    </div>
                </div>
            </div>
        
    );
};

export default Cardsquotes;