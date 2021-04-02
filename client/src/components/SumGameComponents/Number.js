import React from 'react';

// Give the number a clickable prop PureComponent makes sure that only the challenge number
// that needs to be re-rendered will receive different values in these props

class Number extends React.PureComponent {
    handleClick = () => {
        if (this.props.clickable) {
            this.props.onClick(this.props.id);
        }
    };

    // Display the number. If the number does not contain the clickable prop then set it to have an opacity
    render() {
        return (
            <div
                className="number"
                style={{ opacity: this.props.clickable ? 1 : 0.3 }}
                onClick={this.handleClick}
            >
                {this.props.value}
            </div>
        );
    }
}

export default Number;