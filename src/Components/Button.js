import React, {Component} from "react";

import LanguageContext, {languages, Consumer} from "../Contexts/LanguageContext";
import '../style/Components/Button.css';

let submitText = {};
submitText[languages.english] = 'Submit';
submitText[languages.persian] = 'ارسال';

class Button extends Component{
    renderSubmit(value) {
        return submitText[value];
    }

    render() {
        return (
            <button className="button-button" type="submit">
                <Consumer>
                    {this.renderSubmit}
                </Consumer>
            </button>
        );
    }
}

export default Button;