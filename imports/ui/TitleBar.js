import React from 'react'
import PropTypes from 'prop-types'

export default class TitleBar extends React.Component {
    renderSubtitle() {
        if (this.props.subtitle) {
            return <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>
        }
    }
    render(){
        return (
            <div className="title-bar">
                <div className="wrapper">
                    <h1>{this.props.title}</h1>
                    {this.renderSubtitle()}
                </div>    
            </div>   
        )
    }
}

// props syarat value
TitleBar.propTypes = {
    // React.PropTypes maybe deprecated
    // title: React.PropTypes.string.isRequired, // wajib diisi
    // subtitle: React.PropTypes.string.isRequired, // wajib diisi

    title: PropTypes.string.isRequired, // wajib diisi
    // subtitle: PropTypes.string.isRequired, // wajib diisi
}

// props default value
TitleBar.defaultProps = {
    title: 'DEFAULT VALUE',
    // subtitle: 'Created By UKIK',
}