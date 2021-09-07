import React, {useState, useEffect} from 'react';
import  '../App.css';
function Pagination(){
    const pages = 33;
    const numberOfPages = [];
    for(let i=1;i<=pages;i++){
        numberOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

    useEffect(() => {
        let tempNumberOfPages = [...arrOfCurrButtons];
        let dotsInitial = '...'
        let dotsLeft = '... '
        let dotsRight = ' ...'
        if (currentButton >= 1 && currentButton <= 3){
            tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length]
        }
        else if (currentButton === 4){
            const sliced = numberOfPages.slice(0,5);
            tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length]
        }
        else if (currentButton >=4 && currentButton < numberOfPages.length - 2){
            const sliced1 = numberOfPages.slice(currentButton-2, currentButton);
            const sliced2 = numberOfPages.slice(currentButton, currentButton+1)
            tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length])
        }
        else if (currentButton > numberOfPages.length - 3){
            const sliced = numberOfPages.slice(numberOfPages.length - 4)
            tempNumberOfPages = ([1, dotsLeft, ...sliced])
        }
        else if (currentButton === dotsInitial){
            setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1)
        }
        else if (currentButton === dotsLeft){
            setCurrentButton(arrOfCurrButtons[3] + 2)
        }
        else if (currentButton === dotsRight){
            setCurrentButton(arrOfCurrButtons[3] - 2)
        }
       
        setArrOfCurrButtons(tempNumberOfPages);
        
    }, [currentButton]);
    return(


        <React.Fragment>
            <div className="container-fluid pt-5 pb-5">
                <div className="conatiner">
                    <div className="row">
                        <div className="col-md-3">
                            
                        </div>
                        <div className="col-md-6">
                            <h1>Pagination</h1>
                            <div className="pagination-container text-center">
                                <div className="pagination-main">
                                    <a href="#!" className="" onClick = {() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}>Prev</a>
                                    {arrOfCurrButtons.map((page, index) => {
                                        return(
                                            <a
                                            key = {index}
                                            onClick = {() => setCurrentButton(page)}
                                             href="#!"
                                             className={currentButton === page ? 'active' : ''}
                                             >{page}</a>
                                                 
                                        )
                                    })}
                                    
                                    <a href="#!" onClick = {() => setCurrentButton((prev) => prev === numberOfPages.length ? prev : prev+1)}>Next</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Pagination;