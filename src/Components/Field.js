import React, {Component} from "react";

import LanguageContext, {languages,Consumer} from "../Contexts/LanguageContext";
import '../style/Components/Field.css';

let nameText = {};
nameText[languages.english] = 'Name';
nameText[languages.persian] = 'نام';

class Field extends Component{
    renderName(value) {
        return nameText[value];
    }

    render() {
        return (
            <div className="field-container">
                <label className="field-label">
                    <Consumer>
                        {this.renderName}
                    </Consumer>
                </label>
                <input type="text" className="field-input"/>
            </div>
        );
    }
}

export default Field;