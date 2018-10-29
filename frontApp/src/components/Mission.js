
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/mission.css"
import Input from "./common/Input"
import Button from "./common/Button"



const Header = ({ value, onChange, onClick }) => {
    return <div id="header-mission">
        <Input type="text" value={value} onChange={onChange} />
        <Button type="button" text="Add" onClick={onClick} />
    </div>
}
class Circle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            margin: this.props.margin

        }
    }
    onClickHandler = () => {
        if (this.state.title !== "") {
            const circle = this.state.circle;
            this.props.onClick(this.state.title, this.state.margin + 100);
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="circle" number={this.state.number} style={{ marginLeft: this.state.margin + "px" }}><span>{this.state.title}</span><button onClick={this.onClickHandler} type="button" className="button">+</button></div>
            </React.Fragment>
        );

    }
}

class Mission extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            circle: [],
            margin: 100

        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleAddClick = this.handleAddCircle.bind(this)
    }

    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    handleAddCircle = (e, margin) => {
        if (this.state.title !== "") {
            const circle = this.state.circle;
            this.setState({
                circle: circle.concat(<Circle onClick={this.handleAddCircle} title={this.state.title} margin={margin ? margin : this.state.margin} key={circle.length} />)
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header onChange={this.handleTitleChange} onClick={this.handleAddCircle} value={this.state.title} />
                {this.state.circle}
            </React.Fragment>
        );

    }

}
export default Mission;
