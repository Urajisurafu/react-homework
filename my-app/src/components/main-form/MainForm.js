import React from "react";

class MainForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            block: ''
        };

        this.focusTextInput = this.focusTextInput.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.textInput = React.createRef();
    }

    handleChange(event) {
        this.setState({value: event.target.value});

        if(event.target.value === 'реакт'){
            this.setState({ block: 'реакт' });
        } else{
            this.setState({ block: '' });
        }
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    render() {
        return (
            <form>
                <label>
                    Введите текст:
                    <input type="text"
                           ref={this.textInput}
                           value={this.state.value}
                           onChange={this.handleChange} />
                </label>

                <input
                    disabled={this.state.block}
                    type="button"
                    value="Отправить"
                />

                <input
                    type="button"
                    value="Фокус на текстовом поле"
                    onClick={this.focusTextInput}
                />
            </form>
        );
    }
}

export default MainForm;