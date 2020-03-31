import React, {Component} from 'react';

import {Provider, languages} from "../Contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import UserCreate from "./UserCreate";
import '../style/Components/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {language: languages.english};
        this.onLanguageChanged = this.onLanguageChanged.bind(this);
    }

    onLanguageChanged(language) {
        this.setState({language});
    }

    render() {
        return (
            <div>
                <LanguageSelector onLanguageChange={this.onLanguageChanged}/>
                <Provider value={this.state.language}>
                    <UserCreate className={this.state.language === languages.persian?'app-rtl':''}/>
                </Provider>
            </div>
        );
    }
}

export default App;
