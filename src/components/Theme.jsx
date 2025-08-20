import React from 'react';
import { set } from 'zod';

function Theme(props) {
    const [theme, setTheme] = React.useState(false);

    const lightTheme = () => {
        setTheme(!theme);{
            document.body.style.background = '#E9E9E9';
            document.body.style.color = 'black';
            document.body.style.transition = 'all 0.5s ease-in-out';
        }
    }

        const darkTheme = () =>{
            setTheme(!theme);{
                document.body.style.background = "linear-gradient(to right, #090040, #180239,#210F37 )";
                document.body.style.color = 'white';
                document.body.style.transition = 'all 0.5s ease-in-out';
            }
        }
    
    return (
        <div >
           <div className="flex flex-col gap-3 fixed top-0 right-0 p-4 bg-white/10 w-20 h-26 rounded-lg shadow-lg shadow-purple-700 mt-32">
            <i onClick={lightTheme} className='fa-solid fa-sun text-2xl'></i>
            <i onClick={darkTheme} className='fa-solid fa-moon text-2xl'></i>
            </div> 
        </div>
    );
}

export default Theme;