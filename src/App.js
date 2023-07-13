import React, { useState } from "react"


function App() {

    const [book, setBook] = useState([{ name: "Today is Anish Birthday", photo: "./images/anish.jpg", age: 21 },
        { name: "Today is Sahil Birthday", photo: "./images/sahil.jpg", age: 21 }, { name: "Today is Ashish Birthday", photo: "./images/ashish.jpg", age: 22 }, { name: "Today is Amit Birthday", photo: "./images/amit.jpg", age: 26 },]);
    let count = book.length;

    return (

        <>
            < div className="container">

                <p>| Total {count} Birthday is Today |</p>
                {
                    book.map((item) => {


                        return (


                            <div className="item">

                                <div className="itemElement">

                                    <img src={item.photo} />
                                    <p>{item.name}</p>
                                    <p>{item.age}</p>
                                </div>
                            </div>)

                    })
                }


            </div>
            <button type="button" className="btn" onClick={() => { setBook([]) }}><p>clear all</p></button>
        </>

    )

            }
export default App;

