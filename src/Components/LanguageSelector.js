import React, {Component, createRef} from "react";

import {languages} from "../Contexts/LanguageContext";
import '../style/Components/LanguageSelector.css';

class LanguageSelector extends Component {
    constructor(props) {
        super(props);
        this.USFlagRef = createRef();
        this.IRFlagRef = createRef();
    }

    selectLanguage(selectedRef, otherRef) {
        selectedRef.current.classList.add('selected');
        otherRef.current.classList.remove('selected');
    }

    render() {
        return (
            <div className="language-selector-container">
                <div className="language-selector-content">Select Language</div>
                <div className="language-selector-icons">
                    <i className="us flag selected language-selector-icon" ref={this.USFlagRef}
                       onClick={() => {
                           this.selectLanguage(this.USFlagRef, this.IRFlagRef);
                           this.props.onLanguageChange(languages.english);
                       }}/>
                    <i className="ir flag language-selector-icon" ref={this.IRFlagRef}
                       onClick={() => {
                           this.selectLanguage(this.IRFlagRef, this.USFlagRef);
                           this.props.onLanguageChange(languages.persian);
                       }}/>
                </div>
            </div>
        );
    }
}

export default LanguageSelector;