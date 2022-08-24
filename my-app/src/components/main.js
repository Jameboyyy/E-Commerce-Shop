import React from "react";
import '../components/main.css';

const Main = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="films__header">
                        <h2 className="section__title films__header--title">
                            ALL FILMS
                        </h2>
                        <div className="right__header">
                            <div className="searchBar-header">
                                <input className="searchBar" type="text" placeholder="Search For Films..." />
                            </div>
                            <select id="filter">
                                <option value="" disabled selected>Filter</option>
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                                <option value="Rating">Rating</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;