import { List } from './StickerList.styled'
import { Sticker } from 'components/Sticker/Sticker'
import { Choice } from 'components/Choice/Choice'
import { Component } from 'react'

export class StickerList extends Component {
    state = {
        label: '',
        imgSrc: ''
    }

    handleChange = (newLabel, newSrc) => {
        if (newLabel !== this.state.label) {
            this.setState({
                label: newLabel,
                imgSrc: newSrc
            })
        }
    }

    render () {
        return (
            <>
                <Choice imgSrc={this.state.imgSrc} label={this.state.label} />
                <List>
                    {this.props.stickerData.map(({img, label}) => (
                        <Sticker key={label} handleChange={this.handleChange} img={img} label={label}/>
                    ))}
                </List>
            </>
        )
    }
}
